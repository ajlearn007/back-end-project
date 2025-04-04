# FastAPI User Authentication System

A simple user authentication system built with **FastAPI** that includes sign-up, login, and user management features. This project demonstrates full-stack capabilities by integrating a **PostgreSQL database** for user storage, **HTML templates** for front-end views, and secure password handling using **bcrypt**.

## Features

- **User Registration**: Allows new users to sign up with username and password.
- **User Login**: Validates user credentials to provide secure access.
- **Password Security**: Passwords are hashed using `bcrypt` for added security.
- **Responsive Frontend**: Clean and modern interface with forms for sign-up and login.
- **Database Management**: Uses SQLAlchemy to manage and query a PostgreSQL database.
- **Dynamic Templating**: Frontend powered by Jinja2 templates.

## Project Structure

```plaintext
📁 static/         # Contains static files (CSS, JS)
📁 templates/      # Contains HTML templates
📄 main.py         # FastAPI backend application
📄 styles.css      # Styling for the front-end
📄 scripts.js      # JavaScript for form submission
```

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone user_registration_fastapi
   cd user_registration_fastapi
   ```

2. **Install Dependencies**:
   Ensure you have Python 3.10+ installed. Install the required libraries:
   ```bash
   pip install fastapi uvicorn sqlalchemy passlib python-decouple jinja2
   ```

3. **Configure Database**:
   - Set up a PostgreSQL database and update the `DATABASE_URL` in a `.env` file:
     ```env
     DATABASE_URL=postgresql://<username>:<password>@<host>/<database_name>
     ```

4. **Run the Application**:
   Start the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```

5. **Access the Application**:
   - Sign-up page: [http://127.0.0.1:8000/signup](http://127.0.0.1:8000/signup)
   - Login page: [http://127.0.0.1:8000/login](http://127.0.0.1:8000/login)

## How to Use

- **Sign Up**:
  1. Go to the Sign-Up page.
  2. Enter a username and password.
  3. Click the "Sign Up" button.

- **Login**:
  1. Go to the Login page.
  2. Enter your username and password.
  3. Click the "Login" button.

- **View Users** (Development Only):
  Visit `/users/` endpoint to see all registered users.

## Front-End Details

- **signup.html** and **login.html**:
  - HTML forms for user registration and login.
- **styles.css**:
  - A modern and responsive design for the forms and pages.
- **scripts.js**:
  - Handles form submissions using Fetch API.

## Security Considerations

- Passwords are securely hashed using `bcrypt`.
- Includes form validation for username and password length.

## Screenshots

### Sign Up Page
![Sign Up](https://via.placeholder.com/800x400?text=Screenshot+of+Sign+Up+Page)

### Login Page
![Login](https://via.placeholder.com/800x400?text=Screenshot+of+Login+Page)

## Future Enhancements

- Add JWT-based authentication for tokenized sessions.
- Implement email verification for new users.
- Enhance the UI with more interactivity and responsiveness.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute.

---

