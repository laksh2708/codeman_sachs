from fastapi import HTTPException
from fastapi import status
from sqlalchemy.orm import Session

from repo.code_repo import (
    create_code_block,
    get_all_code_blocks,
    get_code_block_by_id,
    update_code_block,
    delete_code_block
)


def create_code(
    db: Session,
    user_id: int,
    title: str,
    language: str,
    target_language: str,
    original_code: str
):

    return create_code_block(
        db=db,
        user_id=user_id,
        title=title,
        language=language,
        target_language=target_language,
        original_code=original_code
    )


def get_all_codes(
    db: Session,
    user_id: int
):

    return get_all_code_blocks(
        db,
        user_id
    )


def get_code(
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

    return code_block


def update_code(
    db: Session,
    code_id: int,
    user_id: int,
    request
):

    code_block = get_code(
        db,
        code_id,
        user_id
    )

    if request.title is not None:
        code_block.title = request.title

    if request.language is not None:
        code_block.language = request.language

    if request.target_language is not None:
        code_block.target_language = request.target_language

    if request.original_code is not None:
        code_block.original_code = request.original_code

    return update_code_block(
        db,
        code_block
    )


def delete_code(
    db: Session,
    code_id: int,
    user_id: int
):

    code_block = get_code(
        db,
        code_id,
        user_id
    )

    delete_code_block(
        db,
        code_block
    )

    return {
        "message": "Code block deleted successfully."
    }