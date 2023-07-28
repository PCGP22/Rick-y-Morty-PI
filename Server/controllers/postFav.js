const Favorite = require("../DB_connection.js")

module.exports = {
    async function(req,res) {
        const { name, origin, status, image, species, gender } = req.body
        if( name && origin && status && image && species && gender ){
            Favorite.create({ name, origin, status, image, species, gender })
            return Favorite.findAll()
        }
    }
}