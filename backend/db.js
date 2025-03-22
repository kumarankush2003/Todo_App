const mongoose =require("mongoose")
// mongodb://localhost:27017/todo
mongoose.connect("mongodb://localhost:27017/todo");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const Todo = mongoose.model("Todo", todoSchema);
module.exports = {Todo
    };//exporting the model