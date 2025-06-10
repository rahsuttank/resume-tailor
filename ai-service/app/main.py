from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv
from app.routes import suggest

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(
    title="Resume Tailor AI Microservice",
    description="Handles match score + GPT-based suggestions",
    version="0.1.0"
)

# Optional CORS settings (for local frontend dev)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register route(s)
app.include_router(suggest.router, prefix="/suggest")

# Health check endpoint
@app.get("/")
def read_root():
    return {"message": "AI microservice is running"}
