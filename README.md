# FastAPI Backend

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
   git clone back-end-project
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

## Security Considerations

- Passwords are securely hashed using `bcrypt`.
- Includes form validation for username and password length.

## Screenshots

### Sign Up Page
![Sign Up](https://via.placeholder.com/800x400?text=Screenshot+of+Sign+Up+Page)

### Login Page
![Login](https://via.placeholder.com/800x400?text=Screenshot+of+Login+Page)

---

