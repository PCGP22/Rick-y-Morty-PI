const axios = require("axios")


const getCharById = (res,id) => {
        axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            if(response.data.name){
                char = {
                    id: id,
                    name:response.data.name,
                    status: response.data.status,
                    species: response.data.species,
                    gender: response.data.gender,
                    origin: response.data.origin,
                    image: response.data.image,
                    episode: response.data.episode
                }
                return res
                    .writeHead(200,{"content-type":"application/json"})
                    .end(JSON.stringify(char))    
            } 
        })
        .catch(error=>{
            return res
                .writeHead(500,{"content-type":"text/plain"})
                .end(error.message)
        }
            
        )
    }

module.exports = {
    getCharById
}