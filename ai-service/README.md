# 🧠 Resume AI Microservice

This is a FastAPI-based microservice designed to enhance resumes by:
- Scoring how well a resume matches a job description.
- Providing AI-powered suggestions to improve the resume for a given JD.

It is part of the **AI-Powered Resume Tailor** project.

---

## 🚀 Features

- `/suggest/resume` — Return resume improvement suggestions (stub for now)
- `/match-score` — Compute a match score between resume and job description (to be implemented)
- Clean, containerized architecture using Docker
- Live development via hot-reloading (`uvicorn --reload`)

---

## 🧱 Folder Structure

```
ai-service/
├── app/
│   ├── main.py            # FastAPI app setup
│   ├── routes/
│   │   └── suggest.py     # Stub route for AI suggestion
│   ├── services/          # Future: Logic for scoring, AI calls
│   ├── utils/             # Future: Helpers for text preprocessing, parsing
│   └── schemas/           # Future: Pydantic models
├── requirements.txt
├── Dockerfile
├── docker-compose.yml
└── .env
```

---

## ⚙️ Setup (Local Dev)

### 1. Install dependencies

Make sure Python 3.11+ is installed, then:

```bash
pip install -r requirements.txt
```

### 2. Run the server

```bash
uvicorn app.main:app --reload --port 5001
```

Then open:
```
http://localhost:5001/docs
```

---

## 🐳 Docker Setup (Recommended)

### 1. Build and Run using Docker Compose

```bash
docker-compose up --build
```

### 2. Access the API

Swagger UI:  
[http://localhost:5001/docs](http://localhost:5001/docs)

---

## 🔌 API Endpoints

### POST `/suggest/resume`

> Returns stubbed AI suggestions (replace with OpenAI/Gemma later)

**Request**:
```json
{
  "resume": "Experienced software engineer skilled in Node.js, React...",
  "job_description": "Looking for a backend engineer with Node.js and MongoDB skills..."
}
```

**Response (stub)**:
```json
{
  "message": "Stub response for suggestions"
}
```

---

## 🛠️ Next Up

- Add `/match-score` route using TF-IDF or OpenAI
- Implement real AI suggestion logic using LLM
- Add token limit checks and resume/JD parsing

---

## 📜 License

MIT — you are free to use, modify, and distribute this microservice.
