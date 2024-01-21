import fs from 'fs/promises'
import fsn from "fs"
import path from "path"

const basepath = "C:\\web development 2023\\Sigma Web\\91_Exercise_15_Clear_the_clutter"
let files = await fs.readdir(basepath)

for (const file of files) {
    console.log(file)
    let extension = file.split('.')[file.split('.').length-1]

    if (extension != "js" && extension != "json" && file.split('.').length > 1){
        if(fsn.existsSync(path.join(basepath, extension))){
            // move the file to the folder named extension
            fs.rename(path.join(basepath, file), path.join(basepath, extension, file))
        } else{
            fs.mkdir(extension)
            fs.rename(path.join(basepath, file), path.join(basepath, extension, file))
        }
    }
    
}