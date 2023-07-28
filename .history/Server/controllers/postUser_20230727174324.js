const User = require("../DB_connection.js")

module.exports = {async function(req,res){
    try{

        const {email, password} = req.body;
        if(email && password){
            const user = await User.create({ email:email, password:password })
            return res.send(user)
        }
        return res.status(400).send("Faltan datos")
    } catch(error){
        res.status(500).send(error.message)
    }
}}