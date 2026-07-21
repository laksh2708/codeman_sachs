from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.auth import router as auth_router
from routes.code import router as code_router
from routes.migration import router as migration_router
from routes.zip_routes import router as zip_router

origins = [
    "http://localhost:5173",  # Vite development server
]

app = FastAPI(
    title="CodeMan Sachs Backend",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,      # Or ["*"] for development only
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(code_router)
app.include_router(migration_router)
app.include_router(zip_router)

@app.get("/")
def root():

    return {
        "message": "Backend is running successfully."
    }