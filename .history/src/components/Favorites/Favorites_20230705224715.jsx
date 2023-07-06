import { connect, useDispatch } from "react-redux"
import Card from "../Card/Card"
import { addFav, removeFav } from "../../Redux/actions.js"
import "../Container/Container.modules.css"
import { order, filter } from '../../Redux/actions'
import { useState } from "react"



function Favorites({ myFavorites, onClose}) {
  const dispatch = useDispatch()
  const [aux, setAux] = useState(false)

  function handleOrder(e){
    dispatch(order(e.target.value))
    setAux(!aux)
  }
  function handleFilter(e){
    dispatch(filter(e.target.name,e.target.value))
  }
 
  return (
    <>
      <select onChange={handleOrder}>
        <option value="A">Ascending</option>
        <option value="D">Descending</option>
      </select>
      <select onChange={handleFilter}>
        <optgroup>
          <option value="All">All</option>
        </optgroup>
        <optgroup>
          <option name="gender" value="Male">Male</option>
          <option name="gender" value="Female">Female</option>
          <option name="gender" value="Genderless">Genderless</option>
          <option name="gender" value="unknown">Unknown</option>
        </optgroup>
        <optgroup>
          <option name="status" value="Alive">Alive</option>
          <option name="status" value="Dead">Dead</option>
          <option name="status" value="unknown">Unknown</option>
        </optgroup>
      </select>
      
      <div className="container__container fav" >
        <div className='container__cards'>
          {myFavorites?.map(({...c})=>{
            return <Card  {...c} key={c.id} onClose={onClose}/>
          })}
        </div>
      </div>
    </>
  )
}


const mapDispatchToProps = dispatch =>{
  return {
    addFav: (char)=>{dispatch(addFav(char))},
    removeFav: (id)=>{dispatch(removeFav(id))}
  }
} 

const mapStateToProps = state =>{
    return{
        myFavorites: state.myFavorites,
        filterGender: state.filterGender,
        filterSpecies: state.filterSpecies,
        filterStatus: state.filterStatus
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Favorites)