const axios = require("axios")


const getCharById = (res,id) => {
    return new Promise((resolve,reject)=>{
        axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {resolve(response.data)})
        .catch(reject(error));
    })
}

getCharById(200,15)
.then(data => console.log(data))
.catch(error => console.log(error))

module.exports = {
    getCharById
}