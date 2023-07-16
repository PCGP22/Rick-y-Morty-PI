let favorites = []

function postFav(req,res){
    if(!favorites.find(f=> f.id===req.body.id)){
        favorites.push(req.body)
        return res.send(favorites)
    }
}

function deleteFav(req,res){
    id = req.params.id.toString().slice(1)
    favorites = favorites.filter(f => f.id !== Number(id))
    return res.send(favorites)
}

module.exports = {
    postFav,
    deleteFav,
}