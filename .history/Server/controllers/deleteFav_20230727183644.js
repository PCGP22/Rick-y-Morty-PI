const Favorite = require("../DB_connection.js")

module.exports = {
    async function (req,res) {
        const id = req.body.id
        Favorite.destroy({
            where:{
                id: id
            }
        })
    }
}