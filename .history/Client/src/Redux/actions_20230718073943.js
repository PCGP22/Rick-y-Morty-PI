export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const ORDER = "ORDER"
export const FILTER = "FILTER"
import axios from "axios"

export const order = (ordering) => {return {type: ORDER, payload: ordering}}
export const filter = (filter) => {return {type:FILTER,payload:{filter}}}

export async function addFav (character)  {
   const endpoint = 'http://localhost:3001/rickandmorty/favorites';
   const {data} = await axios.post(endpoint, character)
   return dispatch({
      type: 'ADD_FAV',
      payload: data,
   });
};
 
 
 export const removeFav = (id) => {
   const endpoint = `http://localhost:3001/rickandmorty/favorites/${id}`;
   return (dispatch) => {
      axios.delete(endpoint).then(({ data }) => {
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
      });
      });
   };
};

