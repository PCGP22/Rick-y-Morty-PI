let favorites = []

function postFav(req,res){
    favorites.push(req.body)
    return res.send(favorites)
}

function deleteFav(req,res){
    if(req.body[0].id){
        favorites = favorites.filter(f=> f.id !== req.body[0].id)
    }
    if(req.body.id){
        favorites = favorites.filter(f=> f.id !== req.body.id)
    }
    return res.send(favorites)
}

module.exports = {
    postFav,
    deleteFav,
}