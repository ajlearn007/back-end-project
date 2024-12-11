from fastapi.testclient import TestClient

client = TestClient(app)

def test_register_user():
    response = client.post("/register/", data={"username": "testuser", "password": "password123"})
    assert response.status_code == 200
    assert response.json()["message"] == "User registered successfully"
