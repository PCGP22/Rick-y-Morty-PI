const axios = require("axios")


const getCharById = (res,id) => {
        axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response=>response.data)
        .then(data => {
            if(data.name){
                char = {
                    id: id,
                    name:data.name,
                    status: data.status,
                    species: data.species,
                    gender: data.gender,
                    origin: data.origin,
                    image: data.image,
                    episode: data.episode
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
        })
    }

module.exports = {
    getCharById
}