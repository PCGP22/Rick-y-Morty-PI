let favorites = []

function postFav(req,res){
    if(!favorites.find(f=> f.id===req.body.id)){
        favorites.push(req.body)
        return res.send(favorites)
    }
}

function deleteFav(req,res){
    console.log(req.body[0] + req.body.id)
    favorites = favorites.filter(f=> f.id === req.body.id)
    return res.send(favorites)
}

module.exports = {
    postFav,
    deleteFav,
}