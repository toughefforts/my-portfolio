from fastapi import APIRouter
from sqlalchemy import text
from app.core.database import SessionLocal

router = APIRouter(tags=["health"])


@router.get("/api/health")
def health_check() -> dict[str, str]:
    """Health check endpoint."""
    try:
        db = SessionLocal()
        db.execute(text("SELECT 1"))
        db.close()
        return {"status": "healthy", "database": "connected"}
    except Exception:
        return {"status": "unhealthy", "database": "disconnected"}
