from datetime import datetime
from pydantic import BaseModel


class ZipProjectResponse(BaseModel):
    id: int
    project_name: str
    source_language: str | None = None
    target_language: str
    original_zip_path: str
    migrated_zip_path: str | None = None
    status: str
    created_at: datetime
    class Config:
        from_attributes = True