from fastapi.testclient import TestClient
from main import app


Client = TestClient(app)

def test_register_user():
    response = Client.post("/register/",data={"username":"testuser","password":"testpassword"})
    #sent a POSt request to /register/endpoint
    assert response.status_code == 200
    assert response.json() == {"message": "User registered successfully"}
    #we assert that the responce is given by giving a message
