from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import ForeignKey
from sqlalchemy import DateTime
from sqlalchemy.sql import func

from app.database import Base


class ZipProject(Base):

    __tablename__ = "zip_projects"
    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False
    )

    project_name = Column(
        String(255),
        nullable=False
    )

    source_language = Column(
        String(50),
        nullable=True
    )

    target_language = Column(
        String(50),
        nullable=False
    )

    original_zip_path = Column(
        String(500),
        nullable=False
    )

    migrated_zip_path = Column(
        String(500),
        nullable=True
    )

    status = Column(
        String(20),
        nullable=False,
        default="UPLOADED",
        server_default="UPLOADED"
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now()
    )