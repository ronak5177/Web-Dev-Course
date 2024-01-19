const express = require("express")
const app = express()
const blog = require('./routes/blog')
const shop = require('./routes/shop')

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

// app.use(express.static("templates"))

app.get("/", (req, res)=>{
    res.send("Hello ronak")
})
app.post("/", (req, res)=>{
    console.log("Post request")
    res.send("This is from post request")
})
app.put("/", (req, res)=>{
    console.log("put request")
    res.send("This is from Put request")
})
app.delete("/", (req, res)=>{
    console.log("delete request")
    res.send("This is from delete request")
})
app.get("/about", (req, res)=>{  
    res.sendFile("/templates/about.html", {root: __dirname})
})
app.get("/api", (req, res)=>{    
    res.json({a:123, b:343, name: "Ronak"})
})

app.listen(3000, ()=>{
    console.log(`server is running on http://localhost:3000`)
})