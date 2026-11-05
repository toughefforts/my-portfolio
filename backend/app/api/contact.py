"""
Contact Form Submission API Route Handler.

Exposes the HTTP POST /api/contact endpoint to ingest, validate, sanitize, and persist
inquiries submitted by portfolio visitors, with comprehensive logging and error handling.
"""

import logging
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.schemas.contact import ContactCreate, ContactSuccessResponse, ErrorResponse
from app.services.contact_service import ContactService

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/contact", tags=["Contact"])


@router.post(
    "",
    response_model=ContactSuccessResponse,
    status_code=status.HTTP_201_CREATED,
    responses={
        422: {"model": ErrorResponse, "description": "Validation error"},
        500: {"model": ErrorResponse, "description": "Server error"},
    },
)
def create_contact_message(
    contact_data: ContactCreate,
    db: Session = Depends(get_db),
) -> ContactSuccessResponse:
    """
    Submits a contact form message.
    
    Validates input fields, sanitizes extraneous whitespace, persists the inquiry record
    to the underlying relational database, and logs telemetry for operational visibility.
    """
    try:
        # Sanitize incoming text fields by trimming boundary whitespace
        sanitized_data = ContactCreate(
            name=contact_data.name.strip(),
            email=contact_data.email.strip(),
            message=contact_data.message.strip(),
        )

        message = ContactService.create_message(db, sanitized_data)
        logger.info(f"New contact message received from {message.email} (Record ID: {message.id})")

        return ContactSuccessResponse(
            success=True,
            message="Your message has been sent successfully!",
            id=message.id,
        )
    except Exception as e:
        logger.error(f"Failed to persist contact message: {e}", exc_info=True)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Something went wrong. Please try again later.",
        )
