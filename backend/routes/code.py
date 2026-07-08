from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database import get_db
from app.dependencies import get_current_user

from schema.code_schema import (
    CreateCodeRequest,
    UpdateCodeRequest,
    CodeResponse
)

from services.code_service import (
    create_code,
    get_all_codes,
    get_code,
    update_code,
    delete_code
)

router = APIRouter(
    prefix="/code",
    tags=["Code Block"]
)

@router.post(
    "",
    response_model=CodeResponse,
    status_code=201
)
def create(
    request: CreateCodeRequest,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return create_code(
        db=db,
        user_id=current_user.id,
        title=request.title,
        language=request.language,
        target_language=request.target_language,
        code=request.code
    )


@router.get(
    "",
    response_model=list[CodeResponse]
)
def get_all(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return get_all_codes(
        db,
        current_user.id
    )


@router.get(
    "/{code_id}",
    response_model=CodeResponse
)
def get_one(
    code_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return get_code(
        db,
        code_id,
        current_user.id
    )


@router.patch(
    "/{code_id}",
    response_model=CodeResponse
)
def update(
    code_id: int,
    request: UpdateCodeRequest,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return update_code(
        db,
        code_id,
        current_user.id,
        request
    )


@router.delete(
    "/{code_id}"
)
def delete(
    code_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return delete_code(
        db,
        code_id,
        current_user.id
    )