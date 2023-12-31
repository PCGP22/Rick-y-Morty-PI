const express = require("express")
const routing = require("./routes/index.js")

const server = express()

const PORT = 3001

server.listen(PORT,() => {
    console.log(`Server functioning on port ${PORT}`)
})


 server.use((req,res,next)=>{
    req.url = `https://${req.headers.host}/rickandmorty/`
    next()
 })
 
server.use("/*",routing)

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json())