const http = require("http")
const {getCharById} = require("./controllers/getCharById.js")

http
    .createServer((req,res)=>{
        if(req.url.includes("/rickandmorty/character")){
            let id = req.url.split("/").at(-1);
            getCharById(id)
            .then(data => res.end(data))
            .catch(error => alert(error))
    }})
    .listen(3001,"localhost")