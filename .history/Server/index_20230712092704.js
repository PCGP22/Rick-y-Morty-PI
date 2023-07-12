const http = require("http")
const {getCharById} = require("./controllers/getCharById.js")

http
    .createServer((req,res)=>{
        res.setHeader("Access-Control-Allow-Origin","*")
        if(req.url.includes("/rickandmorty/character")){
            let id = req.url.split("/").at(-1);
            let characterFound = {};
            getCharById(res,+id)
    }})
    .listen(3001,"localhost")