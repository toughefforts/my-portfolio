"""
Portfolio Backend API Service - FastAPI Application Entry Point.

This module initializes the core FastAPI server application, establishes structured
logging, applies Cross-Origin Resource Sharing (CORS) security headers, and mounts
modular route handlers for contact form processing and operational health diagnostics.
"""

import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import get_settings
from app.api import contact, health

# Configure structured runtime application logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)

logger = logging.getLogger("portfolio.api")
settings = get_settings()

# Initialize FastAPI application instance with selective documentation exposure
app = FastAPI(
    title=settings.APP_NAME,
    description="High-performance backend API for Sachin Sharma's portfolio ecosystem",
    version="1.0.0",
    docs_url="/api/docs" if settings.DEBUG else None,
    redoc_url="/api/redoc" if settings.DEBUG else None,
)

# Apply CORS middleware using allowed origins from environment configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

# Mount modular route handlers
app.include_router(contact.router)
app.include_router(health.router)


@app.get("/", tags=["Root"])
def root() -> dict[str, str]:
    """
    Root server heartbeat endpoint.
    Confirms that the FastAPI service is online and accepting incoming HTTP traffic.
    """
    return {"message": "Portfolio API is running"}
