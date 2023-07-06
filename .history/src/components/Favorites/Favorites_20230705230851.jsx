import { connect, useDispatch } from "react-redux"
import { useState } from "react"
import { addFav, removeFav } from "../../Redux/actions.js"
import { order, filter } from '../../Redux/actions'
import Card from "../Card/Card"
import "../Container/Container.modules.css"


function Favorites({ myFavorites, onClose}) {
  const dispatch = useDispatch()
  const [aux, setAux] = useState(false)
  function handleOrder(e){
    dispatch(order(e.target.value))
    setAux(!aux)
  }
  function handleFilter(e){
    console.log(e.target.className)
    dispatch(filter(e.target.value))
  }
 
  return (
    <>
      <div className="container__container fav" >
    <div className="favorites__filterBar">
      <div>
        <label> Order: </label>
          <select onChange={handleOrder}>
            <option value="A">Ascending</option>
            <option value="D">Descending</option>
          </select>
      </div>
      <div>
        <label> Gender: </label>
        <select onChange={handleFilter}>
            <option className="gender" value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
        </select>
      </div>
      </div>
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