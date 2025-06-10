
import google.generativeai as genai
import os
from dotenv import load_dotenv
import json
import re
from fastapi import HTTPException

load_dotenv()

# Configure your API key


api_key = os.getenv("GEMINI_API_KEY")


genai.configure(api_key=api_key)

# Get the Gemini model
model = genai.GenerativeModel(model_name='gemini-2.0-flash')

def analyze_resume_with_gemini(resume_text: str, jd_text: str) -> dict:
    prompt = f"""
You are a career coach AI. Compare the resume with the job description below and return only a JSON response in the following format:

{{
  "match_percentage": 75,
  "suggestions": {{
    "summary": "Update your summary to highlight your experience with cloud platforms and distributed systems.",
    "experience_tweaks": ["Include more about your hands-on experience in large-scale data processing projects.]",
    "skills_to_add": ["GCP", "Distributed Systems", "Machine Learning"]
  }}
}}

Respond ONLY with valid JSON. No explanation, no markdown formatting.

Resume:
```
{resume_text}
```

Job Description:
```
{jd_text}
```
"""

    try:
        response = model.generate_content(prompt)
        content = response.text

        # Extract the first JSON object from the response using regex
        match = re.search(r'\{.*\}', content, re.DOTALL)
        if match:
            cleaned_json = match.group(0)
            return json.loads(cleaned_json)
        else:
            return {"error": "No valid JSON object found in AI response."}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI service failed: {str(e)}")

