let favorites = []

function postFav(req,res){
    favorites.push(req.body)
    return res.send(JSON.stringify(favorites))
}

function deleteFav(req,res){
    favorites = favorites.filter(f=> f.id !== req.body.id)
    return res.send(JSON.stringify(favorites))
}

module.exports = {
    postFav,
    deleteFav,
}