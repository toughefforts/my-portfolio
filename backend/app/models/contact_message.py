"""
Contact Message ORM Model Definition.

Represents persisted visitor inquiries received through the portfolio's contact form,
storing sender identity, indexed email, full text body, read status flag, and UTC timestamps.
"""

from datetime import datetime
from sqlalchemy import Boolean, DateTime, String, Text
from sqlalchemy.orm import Mapped, mapped_column
from app.core.database import Base


class ContactMessage(Base):
    """Stores contact form submissions from visitors."""

    __tablename__ = "contact_messages"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    email: Mapped[str] = mapped_column(String(255), nullable=False, index=True)
    message: Mapped[str] = mapped_column(Text, nullable=False)
    is_read: Mapped[bool] = mapped_column(Boolean, default=False)
    created_at: Mapped[datetime] = mapped_column(
        DateTime, default=datetime.utcnow, nullable=False
    )

    def __repr__(self) -> str:
        return f"<ContactMessage(id={self.id}, name='{self.name}', email='{self.email}')>"
