import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from main import app, get_db
from main import Base, User

# Define the PostgreSQL database URL for testing
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:anand18271827@localhost/test_db"

# Create the SQLAlchemy engine for the test database
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create the test database
Base.metadata.create_all(bind=engine)

@pytest.fixture(scope="module")
def client():
    # Dependency override for TestClient
    def override_get_db():
        db = SessionLocal()
        try:
            yield db
        finally:
            db.close()

    app.dependency_overrides[get_db] = override_get_db
    client = TestClient(app)
    yield client
    # Cleanup the test database after tests
    Base.metadata.drop_all(bind=engine)

def test_signup(client):
    # Test successful signup
    response = client.post("/register/", data={"username": "testuser", "password": "testpassword"})
    assert response.status_code == 200
    assert response.json() == {"message": "User registered successfully"}

    # Test signup with existing username
    response = client.post("/register/", data={"username": "testuser", "password": "newpassword"})
    assert response.status_code == 400
    assert response.json() == {"detail": "Username already registered"}

def test_login(client):
    # Test successful login
    client.post("/register/", data={"username": "testuser", "password": "testpassword"})
    response = client.post("/login/", data={"username": "testuser", "password": "testpassword"})
    assert response.status_code == 200
    assert response.json() == {"message": "Login successful"}

    # Test login with incorrect credentials
    response = client.post("/login/", data={"username": "testuser", "password": "wrongpassword"})
    assert response.status_code == 400
    assert response.json() == {"detail": "Invalid username or password"}

def test_password_hashing(client):
    # Test password is hashed during registration
    response = client.post("/register/", data={"username": "testuser2", "password": "testpassword"})
    assert response.status_code == 200
    db = SessionLocal()
    user = db.query(User).filter(User.username == "testuser2").first()
    assert user is not None
    assert user.password != "testpassword"  # Ensure password is hashed
    db.close()

def test_input_validation(client):
    # Test that the input validation for username and password works
    response = client.post("/register/", data={"username": "ab", "password": "testpassword"})
    assert response.status_code == 400
    assert response.json() == {"detail": "Username must be at least 3 characters and password at least 6 characters."}

    response = client.post("/register/", data={"username": "testuser", "password": "short"})
    assert response.status_code == 400
    assert response.json() == {"detail": "Username must be at least 3 characters and password at least 6 characters."}
