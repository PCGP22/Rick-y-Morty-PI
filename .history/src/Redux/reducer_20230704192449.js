import { ADD_FAV,REMOVE_FAV } from "./actions"

const initialState={
    _myFavorites_: []
}

export default reducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_FAV:
            return{
                ...state, 
                _myFavorites_:[..._myFavorites_, action.payload]
            }
        case REMOVE_FAV:
            return{
                ...state,
                _myFavorites_: _myFavorites_.filter((f)=>f.id !== Number(action.payload))
            }
        default: return state;
    }
}