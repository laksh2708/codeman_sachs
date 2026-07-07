import getpass

from passlib.context import CryptContext
from sqlalchemy.orm import Session

from app.database import SessionLocal
from models.user import User


pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)


def get_db() -> Session:
    db = SessionLocal()
    try:
        return db
    finally:
        pass


def create_admin():

    db = get_db()

    print("\n========== Create Admin ==========\n")

    name = input("Name: ").strip()

    while True:
        email = input("Email: ").strip().lower()

        existing = db.query(User).filter(User.email == email).first()

        if existing:
            print("\nEmail already exists.\n")
        else:
            break

    while True:

        password = getpass.getpass("Password: ")

        confirm = getpass.getpass("Confirm Password: ")

        if password != confirm:
            print("\nPasswords do not match.\n")
            continue

        if len(password) < 8:
            print("\nPassword must contain at least 8 characters.\n")
            continue

        break

    hashed_password = pwd_context.hash(password)

    admin = User(
        name=name,
        email=email,
        password=hashed_password,
        role="admin"
    )

    db.add(admin)
    db.commit()

    print("\nAdmin created successfully.\n")

    db.close()


if __name__ == "__main__":
    create_admin()