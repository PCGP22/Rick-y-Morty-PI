import { connect, useDispatch } from "react-redux"
import Card from "../Card/Card"
import { addFav, removeFav } from "../../Redux/actions.js"
import "../Container/Container.modules.css"
import { order, filter } from '../../Redux/actions'
import { useState } from "react"



function Favorites({ myFavorites, onClose }) {
  const dispatch = useDispatch()
  const [aux, setAux] = useState(false)
  function handleOrder(e){
    dispatch(order(e.target.value))
    setAux(!aux)
  }
  function handleFilterGender(e){
    dispatch(filter("gender",e.target.value))
  }
  function handleFilterSpecies(e){
    dispatch(filter("species",e.target.value))
  }
  function handleFilterStatus(e){
    dispatch(filter("status",e.target.value))
  }
  return (
    <>
      <select onChange={handleOrder}>
        <option value="A">Ascending</option>
        <option value="D">Descending</option>
      </select>
      <select onChange={handleFilterGender}>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <select onChange={handleFilterSpecies}>
        <option value="All">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="Humanoid">Humanoid</option>
        <option value="Robot">Robot</option>
        <option value="unknown">Unknown</option>
      </select>
      <select onChange={handleFilterStatus}>
        <option value="All">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
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
        myFavorites: state.myFavorites
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Favorites)