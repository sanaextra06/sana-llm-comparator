from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root route
@app.get("/")
def home():
    return {"message": "LLM Comparator Backend Running"}

# Request schema
class PromptRequest(BaseModel):
    prompt: str

# Compare route
@app.post("/compare")
def compare(req: PromptRequest):
    return {
        "gemini": f"Gemini received: {req.prompt}",
        "qwen": f"Qwen received: {req.prompt}",
        "llama": f"Llama received: {req.prompt}",
        "mistral": f"Mistral received: {req.prompt}"
    }