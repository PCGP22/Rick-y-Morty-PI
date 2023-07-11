const http = require("http")
const fs = require("fs")
const datos = require("./utils/default.js")

http
    .createServer((req,res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        if(req.url.includes("/rickandmorty/character")){
            let id = Number(req.url.split("/").at(-1));
            let characterFound = datos.find((c)=>c.id === id)
            res.writeHead(200,{
                "content-type": "application/json"
            })
            .end(JSON.stringify(characterFound))
            // fs.readFile(datos,(err,data) => {
            //     if(err){
            //         res.writeHead(404,{
            //             "content-type": "text/plain"
            //         })
            //         res.end("Not Found")
            //     } else {
            //         res.writeHead(200,{
            //             "content-type": "application/json"
            //         })
            //         res.end(data)
            //         return
            //     }
            // })
        } else{
            res.writeHead(404,{
                "content-type": "text/plain"
            })
            res.end("Not Found")
            return
        }
    })
    .listen(3001,"localhost")