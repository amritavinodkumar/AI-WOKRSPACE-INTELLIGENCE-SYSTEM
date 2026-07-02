from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import upload
from routers import documents
from routers import analytics
from routers import insights

app = FastAPI(
    title="AI Workspace Intelligence System",
    version="1.0"
)

# Allow React Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(upload.router)
app.include_router(documents.router)
app.include_router(analytics.router)
app.include_router(insights.router)


@app.get("/")
def home():
    return {
        "message": "AI Workspace Intelligence System Backend Running!"
    }