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
      const data = response.data[0]
      console.log(data)
      return dispatch({
         type: 'ADD_FAV',
         payload: data,
      });
   }
   catch(error){
      console.log(error.message)
   }
};
 
 
export async function removeFav (id) {
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
