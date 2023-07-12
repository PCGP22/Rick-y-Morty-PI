const http = require("http")
const getCharById = require("./controllers/getCharById.js")

http
    .createServer((req,res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        if(req.url.includes("/rickandmorty/character")){
            let id = req.url.split("/").at(-1);
            let characterFound = getCharById(+id)
            res.writeHead(200,{
                "content-type": "application/json"
            })
            .end(JSON.stringify(characterFound))
            
        } else{
            res.writeHead(404,{
                "content-type": "text/plain"
            })
            res.end("Not Found")
            return
        }
    })
    .listen(3001,"localhost")