let favorites = []

function postFav(req,res){
    if(!favorites.find(f=> f.id===req.body.id)){
        favorites.push(req.body)
        return res.send(favorites)
    }
}

function deleteFav(req,res){
    favorites = favorites.filter(f=> f.id !== req.body)
    return res.send(favorites)
}

module.exports = {
    postFav,
    deleteFav,
}