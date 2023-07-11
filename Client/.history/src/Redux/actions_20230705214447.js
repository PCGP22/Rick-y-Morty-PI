export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const ORDER = "ORDER"
export const FILTER = "FILTER"

export const addFav = (char) => {return {type: ADD_FAV, payload:char}}
export const removeFav = (charId) => {return {type: REMOVE_FAV, payload:charId}}
export const order = (ordering) => {return {type: ORDER, payload: ordering}}
export const filter = (category,filter) => {return {type:FILTER,payload:{category:category, filter:filter}}}

