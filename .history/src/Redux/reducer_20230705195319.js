import { ADD_FAV, REMOVE_FAV, ORDER ,ORDER_REVERSE ,FILTER } from "./actions"

const initialState={
    myFavorites: [],
    allCharacters: [],
    filterCategories: [ "gender", "species", "origin", "status" ]
}

export const reducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_FAV:
            return{
                ...state, 
                myFavorites:[...state.myFavorites, action.payload],
                allCharacters:[...state.allCharacters, action.payload],
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((f)=>f.id !== Number(action.payload)),
                allCharacters: state.allCharacters.filter((f)=>f.id !== Number(action.payload))
            }
        case ORDER:
         
            return{
                ...state,
                myFavorites: state.allCharacters.sort((a, b) => a.id - b.id)
            }
        case ORDER_REVERSE:
            console.log("orderRev")
            return{
                ...state,
                myFavorites: state.myFavorites.sort((a, b) => b.id - a.id)
            }
        case FILTER:
            console.log(state.myFavorites)
            console.log(action.payload.category + action.payload.filter)
            return{
                ...state,
                myFavorites: state.allCharacters.filter((fav)=> fav[action.payload.category] === action.payload.filter)
            }
        default: return state;
    }
}