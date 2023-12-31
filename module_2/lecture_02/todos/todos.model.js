const mongoose  = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,  
    },
    description: String,

});

TodoSchema.methods.toJSON = function() {
    return {
        id: this._id,
        title: this.title,
        description: this.description
    }
}

const Todos = mongoose.model('Todos', TodoSchema);

module.exports = Todos;