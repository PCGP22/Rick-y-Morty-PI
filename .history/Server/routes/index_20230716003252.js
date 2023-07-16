const express = require("express")
const {getCharById} = require("../controllers/getCharById.js")
const {logIn} = require("../controllers/login.js")
const {postFav,deleteFav} = require("../controllers/handleFavorites.js")

const router = express.Router()

router.get("/rickandmorty/character/:id",getCharById)
router.post("/rickandmorty/login",logIn)
router.post("/rickandmorty/fav",postFav)
router.delete("/rickandmorty/fav/",deleteFav)

module.exports={
    router
}