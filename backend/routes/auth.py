from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database import get_db
from app.dependencies import get_current_user

from schema.auth_schema import (
    RegisterRequest,
    LoginRequest,
    UserResponse
)

from schema.token_schema import Token

from services.auth_service import (
    register_user,
    login_user
)


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post(
    "/register",
    response_model=UserResponse,
    status_code=201
)
def register(
    request: RegisterRequest,
    db: Session = Depends(get_db)
):

    return register_user(
        db=db,
        name=request.name,
        email=request.email,
        password=request.password
    )


@router.post(
    "/login",
    response_model=Token
)
def login(
    request: LoginRequest,
    db: Session = Depends(get_db)
):

    return login_user(
        db=db,
        email=request.email,
        password=request.password
    )


@router.get("/user",response_model=UserResponse)
def get_profile(
    current_user=Depends(get_current_user)
):

    return current_user