db = db.getSiblingDB("todo_db");
db.todo_tb.drop();

db.todo_tb.insertMany([
    {
        "id": 1,
        "task": "Bring Fruits"
    },
]);