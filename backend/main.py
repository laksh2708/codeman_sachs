from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.auth import router as auth_router
from routes.code import router as code_router

origins = [
    "http://localhost:5173",  # Vite development server
]

app = FastAPI(
    title="CodeMan Sachs Backend",
    version="1.0.0"
)
app.include_router(auth_router)
app.include_router(code_router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,      # Or ["*"] for development only
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():

    return {
        "message": "Backend is running successfully."
    }