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
    console.log(e.target.className)
    dispatch(filter("gender",e.target.value))
  }
 
  return (
    <>
      <select onChange={handleOrder}>
        <option value="A">Ascending</option>
        <option value="D">Descending</option>
      </select>
      <select onChange={handleFilter}>
        <optgroup>
          <option className="gender" value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </optgroup>
        <optgroup>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
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