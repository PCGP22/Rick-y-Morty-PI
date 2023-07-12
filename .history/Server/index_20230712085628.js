const http = require("http")
const {getCharById} = require("./controllers/getCharById.js")

http
    .createServer((req,res)=>{
        if(req.url.includes("/rickandmorty/character")){
            let id = req.url.split("/").at(-1);
            getCharById(id)
            .then(data=>console.log(data))
            .catch(error => console.log(error))
            res.writeHead(200,{
                "content-type": "application/json"
            })
            .end("characterFound")
            
        } else{
            res.writeHead(404,{
                "content-type": "text/plain"
            })
            res.end("Not Found")
            return
        }
    })
    .listen(3001,"localhost")