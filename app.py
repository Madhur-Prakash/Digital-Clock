from fastapi import FastAPI, status, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
import os
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

app = FastAPI()

app.mount("/static", StaticFiles(directory=os.path.join(BASE_DIR, "static")), name="static")
templates = Jinja2Templates(directory=os.path.join(BASE_DIR, "templates"))

@app.get("/", status_code=status.HTTP_200_OK)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})