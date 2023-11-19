const mongoose = require('mongoose');

const CONNECTION_URL = "mongodb+srv://skillslash:skillslash@cluster0.sq7lkpn.mongodb.net/?retryWrites=true&w=majority";

const TodosSchema = mongoose.Schema({
    title: String,
    description: String
});

const Todos = mongoose.model('Todos', TodosSchema);

mongoose.connect(CONNECTION_URL).then(() => {
    console.log('Connected to database');
    deleteTodoById("655999c91f470d0f11d49b65");
}).catch((err) => {
    console.log('Failed to connect to database');
});


function deleteTodoById(id) {
    Todos.findByIdAndDelete(id).then(() => {
        console.log('Deleted todo');
    }).catch((err) => {
        console.log('Failed to delete todo');
    });

}

// function updateTodoById(id, updates) {
//     Todos.findByIdAndUpdate(id, {
//        ...updates
//     }).then(() => {
//         console.log('Updated todo');
//     }).catch((err) => {
//         console.log('Failed to update todo');
//     });
// }

// function getTodoById(id) {
//     Todos.findById(id)
// }

function getAllTodos() {
    Todos.find().then((todos) => {
        console.log(todos);
    }).catch((err) => {
        console.log('Failed to get todos');
    });
}

function createTodo() {
    const todo = new Todos({
        title: 'Second Todo',
        description: 'Second Todo Description'
    });

    todo.save().then(() => {
        console.log('Saved todo');
    }).catch((err) => {
        console.log('Failed to save todo');
    });
}