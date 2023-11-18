const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

function loadTodos() {
  todos = JSON.parse(fs.readFileSync("./data/todos.json"));
  return todos;
}

function createTodo(todo) {
  const todos = loadTodos();
  todo.id = uuidv4();
  todos.push(todo);

  fs.writeFileSync("./data/todos.json", JSON.stringify(todos));
  return todo;
}

function getTodos() {
  return loadTodos();
}

function getTodoById(id) {
  const todos = loadTodos();
  return todos.find((todo) => todo.id === id);
}

function updateTodo(id, patch) {
  const todos = loadTodos();
  let todo = todos.find(function (todo) {
    return todo.id === id;
  });

  if (todo) {
    todo.title = patch.title;
    todo.description = patch.description;
    fs.writeFileSync("./data/todos.json", JSON.stringify(todos));
    return todo;
  } else {
    return undefined;
  }
}

function deleteTodoById(id) {
  const todos = loadTodos();
  const index = todos.findIndex((todo) => todo.id === id);

  if (index !== -1) {
    todos.splice(index, 1);
    fs.writeFileSync("./data/todos.json", JSON.stringify(todos));
    return true;
  } else {
    return false;
  }
}

module.exports = {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodoById,
};
