const http = require("http")
const {getCharById} = require("./controllers/getCharById.js")

http
    .createServer((req,res)=>{
        if(req.url.includes("/rickandmorty/character")){
            let id = req.url.split("/").at(-1);
            getCharById(id)
            .then(data => characterFound = data)
            .catch(error => console.log(error))
            res.end(characterFound)
    }})
    .listen(3001,"localhost")