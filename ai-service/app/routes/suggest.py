from fastapi import APIRouter
from app.schemas.suggest import ResumeAnalysisRequest, ResumeAnalysisResponse
from app.services.suggest import analyze_resume_with_gemini

router = APIRouter()

@router.post("/", response_model=ResumeAnalysisResponse)
async def suggest_resume_changes(payload: ResumeAnalysisRequest):
    result = analyze_resume_with_gemini(payload.resume_text, payload.jd_text)
    
    if "error" in result:
        raise HTTPException(status_code=500, detail=result["error"])
    
    return result
