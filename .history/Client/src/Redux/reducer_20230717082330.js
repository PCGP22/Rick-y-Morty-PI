import { ADD_FAV, REMOVE_FAV, ORDER ,FILTER } from "./actions"

const initialState={
    myFavorites: [],
    allFavorites: [],
    allCharacters: [],
    filterCategories: [ "gender", "species", "origin", "status" ]
}

export const reducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_FAV:
            return{
                ...state, 
                myFavorites:action.payload,
                allFavorites:action.payload,
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: action.payload,
                allFavorites:action.payload,
            }
        case ORDER:
            if(action.payload === "D"){
                return{
                    ...state,
                    myFavorites: state.allFavorites.sort((a, b) => a.id - b.id)
                }
            } else {
                return{
                    ...state,
                    myFavorites: state.allFavorites.sort((a, b) => b.id - a.id)
                }
            }
        case FILTER:
            if(action.payload.filter === "All"){
                return{
                    ...state,
                    myFavorites: state.allFavorites,
                }
            } else{
            return{
                ...state,
                myFavorites: state.allFavorites.filter((fav)=> fav.gender.trim() === action.payload.filter),
            }}
        default: return state;
    }
}