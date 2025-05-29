FROM python:3.10    

WORKDIR /clock

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
EXPOSE 1500
COPY . .
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "1500"]