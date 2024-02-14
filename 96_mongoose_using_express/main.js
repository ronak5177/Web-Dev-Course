const mongoose = require('mongoose')
const express = require('express');
const Todo = require('./models/Todo');
const path = require('path')

const app = express()
const PORT = 3000;


app.use(express.static("public"))
app.use(express.urlencoded({extended: false}))

mongoose.connect('mongodb://127.0.0.1:27017/mytodo').then(()=> console.log("mongodb connected !!"))

app.get('/', async (req, res)=>{
    return res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get('/find', async(req, res)=>{
    const todo = await Todo.findOne({})
    return res.json({todo})
})
app.post('/create', async (req, res)=>{
    console.log(req)
    const {title, desc, days} = req.body;
    console.log(title)
    const todo = new Todo({title: title, desc: desc, days: days})
    await todo.save()

    return res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.listen(PORT, ()=>{
    console.log(`Example is listening on the http://localhost:${PORT}`)
})