import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from main import app, User, Base  # Import the Base from main.py

# Database URL for testing
DATABASE_URL = "postgresql://postgres:anand18271827@localhost/user_db"

# Set up the database connection using SQLAlchemy
engine = create_engine(DATABASE_URL, pool_pre_ping=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create all tables in the database
Base.metadata.create_all(bind=engine)

# Test client setup
@pytest.fixture(scope="module")
def client():
    return TestClient(app)

# Setup and teardown the database session for testing
@pytest.fixture(scope="module")
def db():
    db_session = SessionLocal()
    yield db_session
    db_session.close()

# Test for user registration
def test_register_user(client, db):
    user_data = {"username": "testuser", "password": "testpassword"}
    
    # Remove user if exists before creating a new one
    db.query(User).filter(User.username == user_data["username"]).delete()
    db.commit()

    # Register the user and check response
    response = client.post("/register/", json=user_data)
    assert response.status_code == 200
    data = response.json()
    assert data["username"] == user_data["username"]
    assert "id" in data

    # Check if user is added to the database
    db_user = db.query(User).filter(User.username == user_data["username"]).first()
    assert db_user is not None
