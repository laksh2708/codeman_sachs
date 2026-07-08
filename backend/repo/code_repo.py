from sqlalchemy.orm import Session

from models.code_block import CodeBlock


def create_code_block(
    db: Session,
    user_id: int,
    title: str,
    language: str,
    target_language: str,
    code: str
):

    code_block = CodeBlock(
        user_id=user_id,
        title=title,
        language=language,
        target_language=target_language,
        code=code
    )

    db.add(code_block)
    db.commit()
    db.refresh(code_block)

    return code_block


def get_all_code_blocks(
    db: Session,
    user_id: int
):

    return (
        db.query(CodeBlock)
        .filter(CodeBlock.user_id == user_id)
        .order_by(CodeBlock.created_at.desc())
        .all()
    )


def get_code_block_by_id(
    db: Session,
    code_id: int
):

    return (
        db.query(CodeBlock)
        .filter(CodeBlock.id == code_id)
        .first()
    )


def update_code_block(
    db: Session,
    code_block: CodeBlock
):

    db.commit()
    db.refresh(code_block)

    return code_block


def delete_code_block(
    db: Session,
    code_block: CodeBlock
):

    db.delete(code_block)
    db.commit()