from fastapi import HTTPException
from fastapi import status
from sqlalchemy.orm import Session

from repo.code_repo import (
    get_code_block_by_id,
    save_migration
)

from services.llm_service import generate_migration


def migrate_code(
    db: Session,
    code_id: int,
    user_id: int
):

    code_block = get_code_block_by_id(
        db,
        code_id
    )

    if not code_block:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Code block not found."
        )

    if code_block.user_id != user_id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Access denied."
        )

    code_block.status = "MIGRATING"

    save_migration(
        db,
        code_block
    )

    prompt = f"""
You are an expert software migration engineer.

Convert the following code.

Source Language:
{code_block.language}

Target Language:
{code_block.target_language}

Requirements

1. Preserve functionality.

2. Follow best practices.

3. Return ONLY the migrated code.

Original Code

{code_block.original_code}
"""

    try:

        migrated_code = generate_migration(
            prompt
        )

        code_block.migrated_code = migrated_code

        code_block.status = "COMPLETED"

        save_migration(
            db,
            code_block
        )

        return {
            "message": "Migration completed successfully.",
            "migrated_code": migrated_code
        }

    except Exception as e:

        code_block.status = "FAILED"

        save_migration(
            db,
            code_block
        )

        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )