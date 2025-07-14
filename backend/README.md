# ResumeMatch AI – Backend Service

This is the backend API for ResumeMatch AI, responsible for user authentication, resume/job description submission, and communication with the AI service.

---

## Overview
- Handles user registration and login with JWT authentication
- Receives resume and job description data from the frontend
- Forwards data to the AI service and returns AI suggestions to the frontend
- Built with Node.js, Express, and MongoDB

---

## Features
- User registration and login (JWT-based)
- Secure password hashing with bcrypt
- Protected API routes
- Forwards resume/job description to AI service for analysis

---

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT
- **Password Hashing:** bcrypt

---

## Setup Instructions

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Create a .env file** in the backend directory:
   ```env
   JWT_SECRET=your_jwt_secret_here
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

3. **Start the server**
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:5000` by default.

---

## API Endpoints

### Authentication
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login and receive a JWT

### Resume Analysis
- `POST /api/match` – Submit resume and job description for AI analysis (protected route)

---

## Environment Variables
- `JWT_SECRET` – Secret key for JWT signing
- `MONGODB_URI` – MongoDB connection string
- `PORT` – Port for the backend server (default: 5000)

---

## Contact
For questions or support, please contact tushar.tank24@gmail.com
