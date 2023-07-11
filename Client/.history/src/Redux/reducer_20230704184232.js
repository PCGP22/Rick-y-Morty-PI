import {state} from "redux"

initialState={
    myFavorites: []
}

export default reducer = (state=initialState,action) =>{
    switch(action.type){
        case "ADD_FAV":
            return{
                ...state, 
                myFavorites:[...myFavorites, action.payload]
            }
        case "REMOVE_FAV":
            return{
                ...state,
                myFavorites: myFavorites.filter((f)=>f.id !== action.payload)
            }
        default: return state;
    }
}