export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const ORDER = "ORDER"
export const FILTER = "FILTER"
import axios from "axios"

export const order = (ordering) => {return {type: ORDER, payload: ordering}}
export const filter = (filter) => {return {type:FILTER,payload:{filter}}}

export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/favorites';
   return async (dispatch) =>{
      try{
         const {data} = await axios.post(endpoint, character);
         return dispatch({
            type: 'ADD_FAV',
            payload: data,
         });
      }
      catch(error){
         console.log(error.message)
      }
   };
}
 
 
export const removeFav = (id) => {
   return async (dispatch) => {
      try{
         const endpoint = `http://localhost:3001/rickandmorty/favorites/${id}`;
         const response = await axios.delete(endpoint);
         const data = response.data
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
         });
      }
      catch(error){
         console.log(error)
      }
   }
}
