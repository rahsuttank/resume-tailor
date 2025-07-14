# ResumeMatch AI – AI Service

This is the AI microservice for ResumeMatch AI, responsible for analyzing resumes and job descriptions using Google Gemini AI and returning match scores and suggestions.

---

## Overview
- Built with FastAPI (Python) for high performance
- Integrates with Google Gemini AI to analyze and compare resumes with job descriptions
- Returns structured JSON with match percentage and actionable suggestions

---

## Features
- Receives resume and job description via API
- Calls Gemini AI for analysis
- Returns match score and personalized suggestions
- Handles errors and ensures valid JSON responses

---

## Tech Stack
- **Framework:** FastAPI (Python)
- **AI Model:** Google Gemini 2.0 Flash
- **HTTP Client:** Google Generative AI SDK

---

## Setup Instructions

1. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

2. **Create a .env file** in the ai-service directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. **Start the service**
   ```bash
   uvicorn app.main:app --reload
   ```
   The AI service will run on `http://localhost:8000` by default.

---

## API Endpoint
- `POST /suggest` – Analyze resume and job description, return match score and suggestions

---

## Environment Variables
- `GEMINI_API_KEY` – Your Google Gemini API key

---

## Contact
For questions or support, please contact tushar.tank24@gmail.com
