const express = require("express")
const {router} = require("./routes/index.js")
// const cors = require('cors');

const server = express()

const PORT = 3001
 
// server.use("*",cors({origin:true,credentials: true}));

server.listen(PORT,() => {
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

         server.use(function(req, res, next) {
            if (req.url.slice(-1) === '/') {
              req.url = req.url + "/rickandmorty/";
            }
            next();
          });
         
         server.use(express.json());
         server.use(router);