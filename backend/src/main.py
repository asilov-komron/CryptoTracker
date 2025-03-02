from fastapi import FastAPI
from src.router import router as router_crypto
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.include_router(router_crypto)


origins = [
        # Add your allowed origins here 
        # domain and port where you run your frontend application

]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)