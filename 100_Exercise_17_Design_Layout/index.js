const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs');

app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "src")))

app.get("/", (req, res)=>{
    return res.render("index")
})


app.listen(3000, ()=>console.log(`Server is running on http://localhost:3000`))