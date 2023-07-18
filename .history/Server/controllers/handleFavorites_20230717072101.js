let favorites = []

function postFav(req,res){
    if(!favorites.find(f=> f.id===req.body.id)){
        favorites.push(req.body)
        return res.json(favorites)
    }
}

function deleteFav(req,res){
    id = req.params.id
    favorites = favorites.filter(f => f.id !== Number(id))
    return res.json(favorites)
}

module.exports = {
    postFav,
    deleteFav,
}