const http = require("http")
const fs = require("fs")

http
    .createServer((req,res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        if(req.url.toString().includes("/rickandmorty/character")){
            let id = req.url.toString().split("/").at(-1);
            fs.readFile("../Client/src/Data/default.js",(err,data) => {
                if(err){
                    res.writeHead(404,{
                        "content-type": "text/plain"
                    })
                    res.end("Not Found")
                } else {
                    res.writeHead(200,{
                        "content-type": "application/json"
                    })
                    res.end(data)
                    return
                }
            })
        } else{
            res.writeHead(404,{
                "content-type": "text/plain"
            })
            res.end("Not Found")
            return
        }
    })
    .listen(3001,"localhost")