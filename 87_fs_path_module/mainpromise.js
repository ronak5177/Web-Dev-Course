// const fs = require("fs/promises")
import fs from "fs/promises"

let a = await fs.readFile("notes2.txt")   // doesn't work with common js

let b = await fs.appendFile("notes2.txt", "\nThis data is appending from main promise file")

console.log(a.toString(), b)