const User = require("../DB_connection.js")

module.exports = {
    async function(req,res){
        try{
            const { email, password } =req.body
            if(email && password){
                if(email === User.findOne({ where: { email: email }})){
                    if(password === User.findOne({ where: { email: email, password: password }})){
                        res.send({ access: true })
                    } 
                    return res.status(401).send("")
                }
                return res.status(404).send("Usuario no encontrado")
            }   
            return res.status(400).send("Faltan datos")

        } catch(error) {
            res.status(500).send(error.message)
        }
    }
}