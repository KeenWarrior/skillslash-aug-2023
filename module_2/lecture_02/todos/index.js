const express = require("express");
const todosService = require("./todos.service");
const mongoose = require("mongoose");
const cors = require("cors");

const CONNECTION_URL =
  "mongodb+srv://skillslash:skillslash@cluster0.sq7lkpn.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/todos/", async (req, res) => {
  const todos = await todosService.getAllTodos();
  res.json(todos);
});

app.get("/todos/:id", async (req, res) => {
  const id = req.params.id;
  let todo = await todosService.getTodoById(id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

app.post("/todos/", async (req, res) => {
  const todo = req.body;
  try {
    const created = await todosService.createTodo(todo);
    res.json(created);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put("/todos/:id", async (req, res) => {
  const id = req.params.id;
  const updated = await todosService.updateTodo(id, req.body);

  if (updated) {
    res.json(updated);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

app.delete("/todos/:id", async (req, res) => {
  const id = req.params.id;
  const deleted = await todosService.deleteTodoById(id);

  if (deleted) {
    res.json({
      message: "Todo deleted with id " + id,
    });
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("Connected to database!");
    app.listen(5000, () => {
      console.log("Server is running on port 5000.");
    });
  })
  .catch((error) => {
    console.log("Connection failed!");
    console.log(error);
  });
