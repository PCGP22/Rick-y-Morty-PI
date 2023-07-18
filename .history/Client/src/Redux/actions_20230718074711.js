export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const ORDER = "ORDER"
export const FILTER = "FILTER"
import axios from "axios"

export const order = (ordering) => {return {type: ORDER, payload: ordering}}
export const filter = (filter) => {return {type:FILTER,payload:{filter}}}

export async function addFav (character)  {
   try{
      const endpoint = 'http://localhost:3001/rickandmorty/favorites';
      const response = await axios.post(endpoint, character);
      const data = response.data
      return dispatch({
         type: 'ADD_FAV',
         payload: data,
      });
   }
   catch(error){
      console.log(error)
   }
};
 
 
export async function removeFav (id) {
   try{
      const endpoint = `http://localhost:3001/rickandmorty/favorites/${id}`;
      const {data} = await axios.delete(endpoint);
      return dispatch({
         type: 'REMOVE_FAV',
         payload: data,
      });
   }
   catch(error){
      console.log(error)
   }
}
