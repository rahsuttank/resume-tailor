from pydantic import BaseModel
from typing import List

class Suggestions(BaseModel):
    summary: str
    experience_tweaks: List[str]
    skills_to_add: List[str]

class ResumeAnalysisResponse(BaseModel):
    match_percentage: int
    suggestions: Suggestions

class ResumeAnalysisRequest(BaseModel):
    resume_text: str
    jd_text: str
