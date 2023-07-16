let favorites = []

function postFav(req,res){
    if(!favorites.includes(req.body)){
        favorites.push(req.body)
        return res.send(favorites)
    }
}

function deleteFav(req,res){
    favorites = favorites.filter(f=> f.id !== req.body.id)
    return res.send(favorites)
}

module.exports = {
    postFav,
    deleteFav,
}