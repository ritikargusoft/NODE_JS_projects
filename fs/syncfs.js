//Creating a file
const fs = require("fs")
const path = require("path")
// console.log(__dirname)
const fileName = "text.txt"
const filePath = path.join(__dirname, fileName)
// const writeFile = fs.writeFileSync(fileName,"This is data", "utf-8")
// console.log(writeFile)


//read file
// const readFile= fs.readFileSync(filePath, 'utf-8')
// console.log(readFile)

// update file
// const appendFile = fs.appendFileSync(filePath, "\nThis is new data","utf-8")


// delete fil
// const deleteFile = fs.unlinkSync(filePath)
// console.log(deleteFile)

//renaming a file

const updatedName = "updated.txt"
const newFilePath = path.join(__dirname, updatedName);
const renameFile = fs.renameSync(filePath, newFilePath)
console.log(renameFile);
