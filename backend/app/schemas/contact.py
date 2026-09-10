from datetime import datetime
from pydantic import BaseModel, EmailStr, Field


class ContactCreate(BaseModel):
    """Schema for creating a new contact message."""

    name: str = Field(..., min_length=2, max_length=100, description="Sender's name")
    email: EmailStr = Field(..., description="Sender's email address")
    message: str = Field(
        ..., min_length=10, max_length=5000, description="Message content"
    )


class ContactResponse(BaseModel):
    """Schema for contact message response."""

    id: int
    name: str
    email: str
    message: str
    is_read: bool
    created_at: datetime

    model_config = {"from_attributes": True}


class ContactSuccessResponse(BaseModel):
    """Schema for successful contact form submission."""

    success: bool = True
    message: str = "Your message has been sent successfully!"
    id: int


class ErrorResponse(BaseModel):
    """Schema for error responses."""

    success: bool = False
    message: str
    details: str | None = None
