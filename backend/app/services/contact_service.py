"""
Contact Service Layer Implementation.

Encapsulates data manipulation logic, database transactions, pagination, and status updates
for incoming visitor contact submissions, abstracting database operations from API routes.
"""

from sqlalchemy.orm import Session
from app.models.contact_message import ContactMessage
from app.schemas.contact import ContactCreate


class ContactService:
    """Service layer coordinating persistence and queries for visitor contact messages."""

    @staticmethod
    def create_message(db: Session, contact_data: ContactCreate) -> ContactMessage:
        """
        Creates and persists a new contact inquiry in the database.
        
        :param db: Active SQLAlchemy database session.
        :param contact_data: Validated contact inquiry data payload.
        :return: Persisted ContactMessage entity.
        """
        db_message = ContactMessage(
            name=contact_data.name,
            email=contact_data.email,
            message=contact_data.message,
        )
        db.add(db_message)
        db.commit()
        db.refresh(db_message)
        return db_message

    @staticmethod
    def get_all_messages(
        db: Session, skip: int = 0, limit: int = 100
    ) -> list[ContactMessage]:
        """
        Retrieves a paginated list of received messages ordered chronologically descending.
        
        :param db: Active database session.
        :param skip: Number of records to skip (offset).
        :param limit: Maximum number of records to return.
        """
        return (
            db.query(ContactMessage)
            .order_by(ContactMessage.created_at.desc())
            .offset(skip)
            .limit(limit)
            .all()
        )

    @staticmethod
    def mark_as_read(db: Session, message_id: int) -> ContactMessage | None:
        """
        Marks an existing contact message as read.
        
        :param db: Active database session.
        :param message_id: Primary key ID of the target message.
        :return: Updated ContactMessage record or None if not found.
        """
        message = db.query(ContactMessage).filter(ContactMessage.id == message_id).first()
        if message:
            message.is_read = True
            db.commit()
            db.refresh(message)
        return message
