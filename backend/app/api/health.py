"""
Operational Health Check Diagnostic API Route.

Exposes the GET /api/health endpoint used by monitoring systems and frontend status checks
to verify API responsiveness and test live database connectivity via a ping query.
"""

from fastapi import APIRouter
from sqlalchemy import text
from app.core.database import SessionLocal

router = APIRouter(tags=["Health"])


@router.get("/api/health")
def health_check() -> dict[str, str]:
    """
    Health check diagnostic endpoint.
    Executes a lightweight query (SELECT 1) against the database to confirm end-to-end liveness.
    """
    try:
        db = SessionLocal()
        db.execute(text("SELECT 1"))
        db.close()
        return {"status": "healthy", "database": "connected"}
    except Exception:
        return {"status": "unhealthy", "database": "disconnected"}
