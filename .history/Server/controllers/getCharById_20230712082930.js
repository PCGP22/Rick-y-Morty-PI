const axios = require("axios")


const getCharById = (id) => {
    return new Promise((resolve,reject)=>{
        axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            if(response.data.name){resolve({res:200, data: data.JSON()})} 
        })
        .catch(error => reject({res: 500,error:error.message}))
    })
}


module.exports = {
    getCharById
}