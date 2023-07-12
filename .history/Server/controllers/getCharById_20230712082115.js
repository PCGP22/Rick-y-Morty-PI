const axios = require("axios")


const getCharById = (res,id) => {
    return new Promise((resolve,reject)=>{
        axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            if(response.data.name){resolve(response.data)}
            reject(response)
        })
        
    })
}

getCharById(200,15)
.then(data => console.log(data))
.catch(error => console.log(error))

module.exports = {
    getCharById
}