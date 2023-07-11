import { ADD_FAV,ORDER,ORDER_REVERSE,REMOVE_FAV } from "./actions"

const initialState={
    myFavorites: [],
    allCharacters: []
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
        default: return state;
    }
}