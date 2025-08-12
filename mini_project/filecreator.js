import readline from "readline";
import fs from"fs";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const fileCreation = () =>{
 rl.question("Enter the name of file ",(filename)=>{
    rl.question("Enter the content of your file:",(content)=>{
        fs.writeFile(`${filename}.txt`, content, (err)=>{
            if(err){
                console.error(`Error while writing the file`);
            }else{
                console.log(`File "${filename}.txt created sucessfully!`)
            }
        })
    })
 } )
}

fileCreation()