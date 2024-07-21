from fastapi import FastAPI
import pymongo
from pymongo import MongoClient

app = FastAPI()

def get_db():
    client = MongoClient(host='todo_mongodb',
                        port=27017, 
                        username='root', 
                        password='pass',
                        authSource="admin")
    db = client["todo_db"]
    return db

@app.get("/hello")
async def root():
    return {"message": "Hello World!!"}

@app.get('/todos')
def get_stored_todos():
    db = get_db()
    _todos = db.todo_tb.find()
    return [{"id": todo["id"], "task": todo["task"]} for todo in _todos]