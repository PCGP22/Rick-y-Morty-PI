let favorites = []

function postFav(req,res){
    favorites.push(req.body)
    return res.send(favorites)
}

function deleteFav(req,res){
    favorites = favorites.filter(f=> f.id !== req.body[0].id)
    return res.send(favorites)
}

module.exports = {
    postFav,
    deleteFav,
}