
//Creating a file
const fs = require("fs")
const path = require("path")
const fileName = "updated2.txt"
const filePath = path.join(__dirname, fileName)
const writeFile = fs.writeFile(fileName,"This is data", "utf-8"
    ,(err)=>{
        if(err) console.log(err)
            else console.log("file has been saved")
    }
)
console.log(writeFile)



//read file
const readFile= fs.readFileSync(filePath, 'utf-8',(err,data) =>{
    if(err) console.error(err);
    else console.log("File have been saved ")
})
console.log(readFile)

// update file
const appendFile = fs.appendFile(filePath, "\nThis is new data",
    "utf-8", (err,data)=>{
        if(err) console.error(err);
    else console.log("File have been saved ")
    })


// delete fil
const deleteFile = fs.unlink(filePath,(err)=>{
    if(err) console.error(err);
    else console.log("File has been deleted")
})
console.log(deleteFile)

//renaming a file

// const updatedName = "updated2.txt"
// const newFilePath = path.join(__dirname, updatedName);
// const renameFile = fs.rename(filePath, newFilePath,(err,data)=>{
//     if(err) console.log(err);
//     else console.log("File name updated ")
// })
// console.log(renameFile);
