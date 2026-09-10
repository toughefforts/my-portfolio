from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker, Session
from typing import Generator
from app.core.config import get_settings

settings = get_settings()

# Initialize SQLAlchemy Engine with connection pool recycling and liveness pre-ping
engine = create_engine(
    settings.DATABASE_URL,
    pool_pre_ping=True,  # Reconnects automatically if MySQL connection dropped
    pool_recycle=3600,   # Recycles idle connections every hour
    echo=settings.DEBUG,
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


class Base(DeclarativeBase):
    """Base class for all SQLAlchemy ORM models."""
    pass


def get_db() -> Generator[Session, None, None]:
    """
    FastAPI dependency yielding a thread-local database session,
    ensuring proper release and cleanup upon request completion.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

