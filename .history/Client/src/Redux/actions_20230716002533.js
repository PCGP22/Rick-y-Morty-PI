export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const ORDER = "ORDER"
export const FILTER = "FILTER"
import axios from "axios"

export const order = (ordering) => {return {type: ORDER, payload: ordering}}
export const filter = (filter) => {return {type:FILTER,payload:{filter}}}

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: 'ADD_FAV',
             payload: data,
          });
       });
    };
 };
 
 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/';
    return (dispatch) => {
       axios.delete(endpoint, id).then(({ data }) => {
         console.log(data);
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data.id,
       });
       });
    };
};

