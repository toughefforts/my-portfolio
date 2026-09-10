from sqlalchemy.orm import Session
from app.models.contact_message import ContactMessage
from app.schemas.contact import ContactCreate


class ContactService:
    """Service layer for contact message operations."""

    @staticmethod
    def create_message(db: Session, contact_data: ContactCreate) -> ContactMessage:
        """Create and save a new contact message."""
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
        """Retrieve all contact messages (for future admin use)."""
        return (
            db.query(ContactMessage)
            .order_by(ContactMessage.created_at.desc())
            .offset(skip)
            .limit(limit)
            .all()
        )

    @staticmethod
    def mark_as_read(db: Session, message_id: int) -> ContactMessage | None:
        """Mark a contact message as read (for future admin use)."""
        message = db.query(ContactMessage).filter(ContactMessage.id == message_id).first()
        if message:
            message.is_read = True
            db.commit()
            db.refresh(message)
        return message
