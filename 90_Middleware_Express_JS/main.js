const express = require("express")
const app = express()
const fs = require("fs")
const blog = require("./routes/blog")

// An Express application can use the following types of middleware:
// Application-level middleware
// Router-level middleware
// Error-handling middleware
// Built-in middleware
// Third-party middleware

app.use((req, res, next)=>{
    console.log(`${Date.now()} is the ${req.method}`)
    req.name = "Ronak"
    fs.appendFileSync("log.txt", `${Date.now()} is the ${req.method}\n`)
    next()
})

app.use("/blog", blog)
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

// middleware 1
app.use((req, res, next)=>{
    console.log("middleware 1")
    next()
})

// middleware 2
app.use((req, res, next)=>{
    console.log("middleware 2")
    next()
})

app.get("/", (req, res)=>{
    console.log("Home page loaded")
    res.send("Hello world")
})
app.get("/about", (req, res)=>{
    res.send(`Hello, I am ${req.name}`)
})
app.get("/contact", (req, res)=>{
    res.send("Hello contact")
})

app.listen(3000, ()=>{
    console.log(`Example listening on the port http://localhost:3000`)
})