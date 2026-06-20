from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "LLM Comparator Backend Running"}