let favorites = []

function postFav(req,res){
    if(!favorites.find(f=> f.id===req.body.id)){
        favorites.push(req.body)
        return res.send(favorites)
    }
}

function deleteFav(req,res){
    console.log(req.params.id)
    favorites = favorites.filter(f => {f.id !== Number(req.params.id.splice(1))})
    return res.send(favorites)
}

module.exports = {
    postFav,
    deleteFav,
}