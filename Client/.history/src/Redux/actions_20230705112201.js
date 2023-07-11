export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const ORDER = "ORDER"
export const ORDER_REVERSE = "ORDER_REVERSE"
export const FILTER = "FILTER"

export const addFav = (char) => {return {type: ADD_FAV, payload:char}}
export const removeFav = (charId) => {return {type: REMOVE_FAV, payload:charId}}
export const order = () => {return {type: ORDER}}
export const orderReverse = () => {return {type: ORDER_REVERSE}}
export const filter = (category,filter) => {return {type:FILTER,payload:{category:category, filter:filter}}}

