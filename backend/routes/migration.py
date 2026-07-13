from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database import get_db
from app.dependencies import get_current_user

from schema.code_schema import CodeResponse

from services.code_service import get_code
from services.migration_service import migrate_code

router = APIRouter(
    prefix="/migration",
    tags=["Migration"]
)


@router.post("/{code_id}")
def migrate(
    code_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return migrate_code(
        db=db,
        code_id=code_id,
        user_id=current_user.id
    )


@router.post("/start/{code_id}")
def start_migration(
    code_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return migrate_code(
        db=db,
        code_id=code_id,
        user_id=current_user.id
    )


@router.get("/status/{code_id}", response_model=CodeResponse)
def migration_status(
    code_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return get_code(
        db=db,
        code_id=code_id,
        user_id=current_user.id
    )