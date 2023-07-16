const datos = require("../utils/users.js")



function logIn(req,res){
    let email = req.body.email
    let password = req.body.password
    try{
        console.log(email + ":" + datos.datos.email)
        if(email === datos.datos.email && password === datos.datos.password){
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

