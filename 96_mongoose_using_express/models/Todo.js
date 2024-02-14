const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: String,
    desc: String,
    days: Number
})

const Todo = mongoose.model("Todo", todoSchema)
module.exports = Todo;