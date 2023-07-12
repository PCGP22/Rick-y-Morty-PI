const axios = require("axios")


const getCharById = (res,id) => {
    return new Promise((resolve,reject)=>{
        axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            if(response.data.name){
                char = {
                    id: id,
                    status: response.data.id,
                    species: response.data.species,
                    gender: response.data.gender,
                    origin: response.data.origin,
                    image: response.data.image,
                    episode: response.data.episode
                }
                resolve(JSON.stringify(char))} 
        })
        .catch(error => reject({res: 500, data: error.message}))
    })
}

module.exports = {
    getCharById
}