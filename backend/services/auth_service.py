from fastapi import HTTPException
from fastapi import status
from sqlalchemy.orm import Session

from app.security import (
    hash_password,
    verify_password,
    create_access_token
)

from repo.auth_repo import (
    get_user_by_email,
    create_user
)


def register_user(
    db: Session,
    name: str,
    email: str,
    password: str
):

    existing_user = get_user_by_email(
        db,
        email
    )

    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered."
        )

    hashed_password = hash_password(password)

    user = create_user(
        db=db,
        name=name,
        email=email,
        password=hashed_password
    )

    return user


def login_user(
    db: Session,
    email: str,
    password: str
):

    user = get_user_by_email(
        db,
        email
    )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password."
        )

    if not verify_password(
        password,
        user.password
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password."
        )

    access_token = create_access_token(
        {
            "sub": str(user.id),
            "role": user.role
        }
    )

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }