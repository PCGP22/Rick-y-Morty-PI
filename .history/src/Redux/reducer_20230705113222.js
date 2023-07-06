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
                myFavorites: state.myFavorites.sort()
            }
        case ORDER_REVERSE:
            return{
                ...state,
                myFavorites: state.myFavorites.sort().reverse()
            }
        case FILTER:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((fav)=> fav[action.payload.category] === action.payload-filter)
            }
        default: return state;
    }
}