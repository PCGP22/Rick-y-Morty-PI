let favorites = []

function postFav(req,res){
    favorites.push(req.body)
    return res.send(favorites)
}

function deleteFav(req,res){
    if(typeof req.body[0].id !== "undefined"){
        favorites = favorites.filter(f=> f.id !== req.body[0].id)
    }
    if(typeof req.body.id !== "undefined"){
        favorites = favorites.filter(f=> f.id !== req.body.id)
    }
    return res.send(favorites)
}

module.exports = {
    postFav,
    deleteFav,
}