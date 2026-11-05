"""
Contact Form Validation Schemas and Data Transfer Objects (DTOs).

Defines Pydantic schemas enforcing input validation rules on incoming visitor inquiry payloads
(length boundaries, email formatting) and standardizing output JSON serialization responses.
"""

from datetime import datetime
from pydantic import BaseModel, EmailStr, Field


class ContactCreate(BaseModel):
    """Schema for validating a new incoming contact message request payload."""

    name: str = Field(..., min_length=2, max_length=100, description="Sender's name")
    email: EmailStr = Field(..., description="Sender's email address")
    message: str = Field(
        ..., min_length=10, max_length=5000, description="Message content"
    )


class ContactResponse(BaseModel):
    """Schema for serializing a stored contact message entity."""

    id: int
    name: str
    email: str
    message: str
    is_read: bool
    created_at: datetime

    model_config = {"from_attributes": True}


class ContactSuccessResponse(BaseModel):
    """Schema for acknowledging successful receipt of an inquiry."""

    success: bool = True
    message: str = "Your message has been sent successfully!"
    id: int


class ErrorResponse(BaseModel):
    """Standardized error response payload schema."""

    success: bool = False
    message: str
    details: str | None = None
