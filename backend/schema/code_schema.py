from typing import Optional
from pydantic import BaseModel


class CreateCodeRequest(BaseModel):
    title: str
    language: str
    target_language: str
    original_code: str


class UpdateCodeRequest(BaseModel):
    title: Optional[str] = None
    language: Optional[str] = None
    target_language: Optional[str] = None
    original_code: Optional[str] = None


class CodeResponse(BaseModel):
    id: int
    title: str
    language: str
    target_language: str
    original_code: str
    migrated_code: Optional[str] = None
    status: str

    class Config:
        from_attributes = True