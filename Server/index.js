const express = require("express")
const {router} = require("./routes/index.js")
const { conn } = require('./DB_connection');
// const cors = require('cors');
// server.use("*",cors({origin:true,credentials: true}));

const server = express()

const PORT = 3001
 
async function connect(){
   await conn.sync({force:false})
} 

server.listen(PORT,() => {
   connect()
   console.log(`Server functioning on port ${PORT}`)
});

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

server.use(express.json());
server.use("/rickandmorty",router);