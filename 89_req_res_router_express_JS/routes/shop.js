const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    res.send("This is the home page of shop")
})
router.get("/about", (req, res)=>{
    res.send("This is the about page of shop")
})

module.exports = router