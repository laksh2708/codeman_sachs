from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text
from sqlalchemy import ForeignKey
from sqlalchemy import DateTime
from sqlalchemy.sql import func

from app.database import Base


class CodeBlock(Base):
    __tablename__ = "code_blocks"

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

    title = Column(
        String(255),
        nullable=False
    )

    language = Column(
        String(50),
        nullable=False
    )

    target_language = Column(
        String(50),
        nullable=False
    )

    original_code = Column(
        Text,
        nullable=False
    )

    migrated_code = Column(
        Text,
        nullable=True
    )

    status = Column(
        String(20),
        nullable=False,
        default="PENDING",
        server_default="PENDING"
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