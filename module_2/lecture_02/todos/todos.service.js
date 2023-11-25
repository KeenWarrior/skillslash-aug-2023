const Todos = require("./todos.model");

async function createTodo(todo) {
    const created = await new Todos({
      title: todo.title,
      description: todo.description,
    }).save();
    return created;
}

async function getAllTodos() {
  return await Todos.find().exec();
}

async function getTodoById(id) {
  return await Todos.findById(id).exec();
}

async function updateTodo(id, patch) {
  const updated = await Todos.findByIdAndUpdate(id, patch, { new: true }).exec();
  return updated;
}

async function deleteTodoById(id) {
  return await Todos.findByIdAndDelete(id).exec();
}

module.exports = {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodoById,
};
