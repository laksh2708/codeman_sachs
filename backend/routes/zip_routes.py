from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File
from fastapi import Form
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database import get_db

from schema.zip_schema import ZipProjectResponse
from services.zip_service import ZipService

router = APIRouter(
    prefix="/zip",
    tags=["ZIP Upload"]
)

@router.post(
    "/upload",
    response_model=ZipProjectResponse
)
def upload_zip(
    target_language: str = Form(...),
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):
    """
    Temporary user_id = 1
    We'll replace this with JWT later.
    """

    return ZipService.upload_project(
        db=db,
        user_id=1,
        target_language=target_language,
        file=file,
    )