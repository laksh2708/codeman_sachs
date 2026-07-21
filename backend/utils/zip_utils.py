import os, shutil, zipfile
from uuid import uuid4
from fastapi import UploadFile
from pathlib import Path

UPLOAD_DIR = "uploads/uploaded_projects"
EXTRACT_DIR = "uploads/extracted_projects"


def save_uploaded_zip(file: UploadFile) -> tuple[str, str]:
    """
    Saves the uploaded zip file.

    Returns:
        project_name
        saved_file_path
    """

    os.makedirs(UPLOAD_DIR, exist_ok=True)
    extension = os.path.splitext(file.filename)[1]
    filename = f"{uuid4()}{extension}"
    file_path = os.path.join(UPLOAD_DIR, filename)
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    project_name = os.path.splitext(file.filename)[0]
    return project_name, file_path

def extract_zip(zip_path: str) -> str:
    """
    Extracts a ZIP file.

    Returns:
        Path of extracted project.
    """

    project_name = Path(zip_path).stem

    output_folder = os.path.join(
        EXTRACT_DIR,
        project_name
    )

    os.makedirs(output_folder, exist_ok=True)

    with zipfile.ZipFile(zip_path, "r") as zip_ref:
        zip_ref.extractall(output_folder)

    return output_folder