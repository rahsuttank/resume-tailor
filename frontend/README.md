# ResumeMatch AI – Frontend

This is the frontend application for ResumeMatch AI, providing a modern, minimal, and responsive user interface for resume optimization.

---

## Overview
- Built with React and Tailwind CSS for a sleek, user-friendly experience
- Allows users to register, log in, upload/paste resumes and job descriptions, and view AI-powered suggestions
- Visualizes match scores and suggestions in a clear, accessible format

---

## Features
- User authentication (register/login)
- Upload/paste resume and job description
- View match score and personalized AI suggestions
- Responsive, accessible, and modern UI
- Protected routes for authenticated users

---

## Tech Stack
- **Framework:** React 18
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **State Management:** React Context API
- **HTTP Client:** Axios
- **Build Tool:** Vite

---

## Setup Instructions

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure API base URL**
   Edit `src/config.js`:
   ```js
   export const API_BASE_URL = 'http://localhost:5000';
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` by default.

---

## Environment Variables
- API base URL is set in `src/config.js`

---

## Contact
For questions or support, please contact tushar.tank24@gmail.com
