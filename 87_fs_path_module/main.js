const { error } = require("console")
const fs = require("fs")

// console.log(fs)

console.log("Starting")

// fs.writeFileSync("notes.txt", "Hello, how are you?? ")

fs.writeFile("notes2.txt", "Kaise ho aap?", ()=>{
    console.log("file writing completed")
    // fs.readFile("notes2.txt", (error, data)=>{
    //     console.log(error, data.toString())
    // })
})

fs.appendFile("notes.txt", "This note must be added", ()=>{
    console.log("appeding success !!")
})
console.log("Ending")

