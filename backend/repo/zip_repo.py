from sqlalchemy.orm import Session
from models.zip_project import ZipProject


class ZipRepository:

    @staticmethod
    def create_project(db: Session, project: ZipProject):

        db.add(project)

        db.commit()

        db.refresh(project)

        return project

    @staticmethod
    def get_project(db: Session, project_id: int):

        return (
            db.query(ZipProject)
            .filter(ZipProject.id == project_id)
            .first()
        )