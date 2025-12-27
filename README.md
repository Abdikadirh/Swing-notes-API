# Swing Notes API 📝

A professional, secure RESTful API for managing personal notes, built with **Node.js**, **Express**, and **PostgreSQL**.

## 🚀 Features

- **Security**: JWT-based authentication and Bcrypt password hashing.
- **Notes Management**: Full CRUD (Create, Read, Update, Delete) for personal notes.
- **Advanced Search**: Case-insensitive partial title search (VG Requirement).
- **Interactive Documentation**: Integrated Swagger UI.

## 📋 API Endpoints

| Endpoint            | Method | Description                  | Auth |
| ------------------- | ------ | ---------------------------- | ---- |
| `/api/user/signup`  | POST   | Create a new user account    | No   |
| `/api/user/login`   | POST   | Login and receive JWT        | No   |
| `/api/notes`        | GET    | Fetch all notes for the user | Yes  |
| `/api/notes`        | POST   | Create a new note            | Yes  |
| `/api/notes`        | PUT    | Update an existing note      | Yes  |
| `/api/notes`        | DELETE | Delete a specific note       | Yes  |
| `/api/notes/search` | GET    | Search notes by title        | Yes  |

## 🛠 Getting Started

### 1. Environment Details

Create a `.env` file

```env
PORT=3000
DB_HOST=localhost
DB_NAME=notes_db
DB_USER=postgres
DB_PASSWORD=my_password
JWT_SECRET=my_secure_random_string
```

````

### Generate JWT Secret (Important)
Fast ways to generate a strong `JWT_SECRET` for `.env` file.

**Node.js (Recommended)**
Run in terminal:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
````

### 2. Database Setup

1. Ensure PostgreSQL is running locally.
2. Create the database:
   ```sql
   CREATE DATABASE notes_db;
   ```

### 3. Installation & Usage

# Install dependencies

npm install

# Start the server

npm start

```

### 4. Testing

Once the server is running, visit:
👉 **[http://localhost:3000/api-docs](http://localhost:3000/api-docs)**

## 🧪 Submission Details

- **Assignment**: Swing notes API
- **Requirements**: I have done all G and VG requirements.
- **Tech Stack**: Node.js, Express, Sequelize, PostgreSQL, Swagger.
```
