from fastapi import UploadFile
from sqlalchemy.orm import Session
from models import project_info
from models.zip_project import ZipProject
from repo.zip_repo import ZipRepository
from utils.zip_utils import (save_uploaded_zip,extract_zip,)
from utils.file_scanner import scan_project
from utils.language_detector import detect_languages
from rag.llama_index_service import LlamaIndexService


class ZipService:

    @staticmethod
    def upload_project(
        db: Session,
        user_id: int,
        target_language: str,
        file: UploadFile,
    ):

        # Step 1
        project_name, file_path = save_uploaded_zip(file)

        # Step 2
        project_folder = extract_zip(file_path)

        # Step 3
        project_info = scan_project(project_folder)

        # Step 4
        project_info.detected_languages = detect_languages(project_info.source_files)
        project_index = LlamaIndexService.build_index(project_info)
        if project_index:
            print("✅ LlamaIndex created successfully.")
        else:
            print("⚠️ No documentation/configuration files found to index.")
            
        #print(project_info)
        print("=" * 50)
        print("Project Name :", project_info.project_name)
        print("Languages    :", project_info.detected_languages)
        print("\nSource Files:")
        for file in project_info.source_files:
            print(file)
        print("\nDocumentation Files:")
        for file in project_info.documentation_files:
            print(file)
        print("\nConfiguration Files:")
        for file in project_info.config_files:
            print(file)
        print("=" * 50)


        project = ZipProject(
            user_id=user_id,
            project_name=project_name,
            target_language=target_language,
            original_zip_path=file_path,
            status="UPLOADED",
        )

        return ZipRepository.create_project(db, project)