const express = require("express")
const {getCharById} = require("../controllers/getCharById.js")
const {logIn} = require("../controllers/login.js")
const {postFav,deleteFav} = require("../controllers/handleFavorites.js")

const router = express.Router()

router.get("/character/:id",getCharById)
router.get("/login",logIn)
router.post("/fav",postFav)
router.delete("/fav/:id",deleteFav)

module.exports={
    router
}