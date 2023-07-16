const express = require("express")
const {router} = require("./routes/index.js")
var cors=require('cors');

app.use(cors({origin:true,credentials: true}));

const server = express()

const PORT = 3001

server.listen(PORT,() => {
    console.log(`Server functioning on port ${PORT}`)
});

server.use((req, res, next) => {
   app.options('*', cors());
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
   if (req.method === "OPTIONS") {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
    }
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