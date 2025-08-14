import { createServer } from "http";
import { readFile } from "fs/promises";
import path from "path";
import { writeFile } from "fs";
import { json } from "stream/consumers";
const PORT = 3002
const DATA_FILE = path.join("data", "links.json")

const serverFile = async ( res,filePath, contentType)=>{
  
            try{
                const data = await readFile(filePath);
                res.writeHead(200,{"Content-Type": contentType});
                res.end(data);
            }
            catch(error){
                res.writeHead(404,{"Content-Type":contentType});
                res.end("404 page not found")
            }
};

const loadLinks = async() =>{
    try{
        const data = await readFile(DATA_FILE, 'utf-8');
        return JSON.parse(data);

    } catch(error){
if(error.code === "ENOENT"){
    await writeFile(DATA_FILE, JSON.stringify({}))
    return{}
}
throw error
    }
}

const saveLinks = async (links) =>{
    await writeFile(DATA_FILE, JSON.stringify(links))
}

const server = createServer(async (req, res)=>{

    if(req.method === "GET"){
        if(req.url === "/"){
          return serverFile(
        res,path.join("public", "index.html"), "text/html")
        } 
          else if(req.url === "/style.css"){
return serverFile(res, path.join("public","style.css"),"text/css")
            }
        }

        if(req.method === "POST" && req.url === "/shorten"){

            const links = await loadLinks();
            let body = "";

            req.on("data", (chunk)=>(body+= chunk));
        req.on("end", async () =>{
            console.log(body);
            const {url, shortCode} = JSON.parse(body);

            if(!url){
                res.writeHead(400, {
                    "Content-Type" : "text/plain"
                });
                return res.end ("URL is required")
            }

            const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");
if(links[finalShortCode]){
    res.writeHead(404,{"Content-Type":"text/plain"});
    return res.end("Short code already exisits. Please choose another")
}
links[finalShortCode] = url;

await saveLinks(links);
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end (JSON.stringify({sucess: true, shortCode: finalShortCode}))

        })
        }
});

server.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})