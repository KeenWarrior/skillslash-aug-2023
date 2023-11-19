const express = require("express");
const todosService = require("./todos.service");

const app = express();

app.use(express.json());

app.get("/todos/", (req, res) => {
  res.json(todosService.getTodos());
});

app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  let todo = todosService.getTodoById(id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

app.post("/todos/", (req, res) => {
  const todo = req.body;
  const created = todosService.createTodo(todo);
  res.json(created);
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const updated = todosService.updateTodo(id, req.body);

  if (updated) {
    res.json(updated);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const deleted = todosService.deleteTodoById(id);

  if (deleted) {
    res.json({
      message: "Todo deleted with id " + id,
    });
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});

// app.get("/todos/", (req, res) => {
//     res.json(todos);
//   });

//   app.get("/todos/:id", (req, res) => {
//     const id = req.params.id;
//     let todo = todos.find(function (todo) {
//       return todo.id === id;
//     });

//     if (todo) {
//       res.json(todo);
//     } else {
//       res.status(404).json({ error: "Todo not found" });
//     }
//   });

//   app.post("/todos/", (req, res) => {
//     const todo = req.body;
//     todo.id = uuidv4();
//     console.log(todo);
//     todos.push(todo);
//     res.json(todo);
//   });

//   app.put("/todos/:id", (req, res) => {
//     const id = req.params.id;
//     let todo = todos.find(function (todo) {
//       return todo.id === id;
//     });
//     if (todo) {
//       todo.title = req.body.title;
//       todo.description = req.body.description;
//       res.json(todo);
//     } else {
//       res.status(404).json({ error: "Todo not found" });
//     }
//   });

//   app.delete("/todos/:id", (req, res) => {
//       const id = req.params.id;

//       todos = todos.filter(function (todo) {
//           return todo.id !== id;
//       });

//       res.json({
//           message: "Todo deleted with id " + id
//       });

//   });

//   app.listen(5000, () => {
//     console.log("Server is running on port 5000.");
//   });
