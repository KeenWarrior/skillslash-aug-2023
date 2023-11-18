const express = require("express");
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

const todos = [
  {
    id: "1",
    title: "Todo 1",
    description: "This is the first todo",
  },
  {
    id: "2",
    title: "Todo 2",
    description: "This is the second todo",
  },
];

app.get("/todos/", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  let todo = todos.find(function (todo) {
    return todo.id === id;
  });

  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

app.post("/todos/", (req, res) => {
    const todo = req.body;
    todo.id = uuidv4();
    console.log(todo);
    todos.push(todo);
    res.json(todo);
});

app.put("/todos/:id", (req, res) => {});

app.delete("/todos/:id", (req, res) => {});

app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
