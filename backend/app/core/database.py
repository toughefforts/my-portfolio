"""
Database Session and Connection Engine Orchestration.

Configures the SQLAlchemy engine with pool recycling and liveness pre-pings to safeguard
against connection drops in long-running MySQL/MariaDB instances. Provides the thread-scoped
dependency generator `get_db` for FastAPI route dependencies.
"""

from typing import Generator
from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker
from app.core.config import get_settings

settings = get_settings()

# Initialize SQLAlchemy Engine with connection pool recycling and liveness pre-ping
engine = create_engine(
    settings.DATABASE_URL,
    pool_pre_ping=True,  # Reconnects automatically if MySQL connection drops
    pool_recycle=3600,   # Recycles idle connections every hour to prevent stale handles
    echo=settings.DEBUG,
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


class Base(DeclarativeBase):
    """Base class for all SQLAlchemy ORM declarative models."""
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
