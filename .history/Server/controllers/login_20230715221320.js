const datos = require("../utils/users.js")

const comparacion = datos[0]

function logIn(req,res){
    let email = req.body.email
    let password = req.body.password
    try{
        if(email === comparacion.email && password === comparacion.password){
            return res.send({
                "access": true
            })
        } else {
            return res.send({
                "access": false
            })
        }
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

module.exports = {
    logIn,
}

