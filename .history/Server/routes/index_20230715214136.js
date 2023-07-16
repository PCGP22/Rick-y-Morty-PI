const express = require("express")
const getCharById = require("../controllers/getCharById.js")
const logIn = require ("../controllers/login.js")
const fav = require("../controllers/handleFavorites.js")

const router = express.Router()

router.get("/character/:id",getCharById)
router.get("/login",logIn)
router.post("/fav",fav.postFav)
router.delete("/fav/:id",fav.deleteFav)

module.exports={
    router
}