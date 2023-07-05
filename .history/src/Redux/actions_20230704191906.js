export const ADD_FAV = "ADD_FAV"
export REMOVE_FAV = "REMOVE_FAV"

export const addFav = (charId) => {return {"type": ADD_FAV, "payload":charId}}
export const removeFav = (char) => {return {"type": REMOVE_FAV, "payload":char}}

Id