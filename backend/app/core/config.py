"""
Application Configuration and Environment Settings.

This module defines typed application configuration parameters loaded from environment
variables via Pydantic BaseSettings, utilizing LRU memoization to avoid redundant disk I/O.
"""

from functools import lru_cache
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """
    Centralized application configuration schema.
    Reads variables from local .env files with sensible defaults for local development.
    """

    DATABASE_URL: str = "mysql+pymysql://root:@localhost:3306/portfolio_db"
    CORS_ORIGINS: str = "http://localhost:3000"
    APP_NAME: str = "Portfolio API"
    DEBUG: bool = True

    @property
    def cors_origins_list(self) -> list[str]:
        """
        Parses comma-delimited CORS_ORIGINS string into a sanitized list of allowed origin URLs.
        """
        return [origin.strip() for origin in self.CORS_ORIGINS.split(",") if origin.strip()]

    model_config = {
        "env_file": ".env",
        "env_file_encoding": "utf-8",
        "extra": "ignore",
    }


@lru_cache
def get_settings() -> Settings:
    """
    Factory function returning a cached singleton instance of application Settings.
    """
    return Settings()
