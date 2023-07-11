import { ADD_FAV, REMOVE_FAV, ORDER ,FILTER } from "./actions"

const initialState={
    myFavorites: [],
    allCharacters: [],
    currentFilter:[]
}

export const reducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_FAV:
            return{
                ...state, 
                myFavorites:[...state.myFavorites, action.payload],
                allCharacters:[...state.allCharacters, action.payload],
                currentFilter:[...state.currentFilter, action.payload],
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((f)=>f.id !== Number(action.payload)),
                allCharacters: state.allCharacters.filter((f)=>f.id !== Number(action.payload)),
                currentFilter: state.currentFilter.filter((f)=>f.id !== Number(action.payload))
            }
        case ORDER:
            if(action.payload === "D"){
                return{
                    ...state,
                    myFavorites: state.allCharacters.sort((a, b) => a.id - b.id),
                    currentFilter: state.allCharacters.sort((a, b) => a.id - b.id)
                }
            } else {
                return{
                    ...state,
                    myFavorites: state.allCharacters.sort((a, b) => b.id - a.id),
                    currentFilter: state.allCharacters.sort((a, b) => b.id - a.id)
                }
            }
        case FILTER:
            if(action.payload.filter === "All"){
                return{
                    ...state,
                    myFavorites: state.allCharacters,
                }
            } else{
            return{
                ...state,
                myFavorites: state.currentFilter.filter((fav)=> fav[action.payload.category] === action.payload.filter),
            }}
        default: return state;
    }
}