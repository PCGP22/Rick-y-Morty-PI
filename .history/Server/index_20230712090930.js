const http = require("http")
const {getCharById} = require("./controllers/getCharById.js")

http
    .createServer((req,res)=>{
        if(req.url.includes("/rickandmorty/character")){
            let id = req.url.split("/").at(-1);
            let characterFound = {};
            getCharById(id)
            .then(data => {
                characterFound = data
                res.writeHead(200,{
                    "content-type": "application/json"
                })
                res.end(characterFound)
            })
            .catch(error => console.log(error))
            
    }})
    .listen(3001,"localhost")