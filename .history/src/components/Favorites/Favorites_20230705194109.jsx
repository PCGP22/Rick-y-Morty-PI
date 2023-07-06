import { connect } from "react-redux"
import Card from "../Card/Card"
import { addFav, removeFav } from "../../Redux/actions.js"
import "../Container/Container.modules.css"
import FilterBar from "../FilterBar/FilterBar"
import { useDispatch } from 'react-redux'
import { order, orderReverse, filter } from '../../Redux/actions'
import { useState } from 'react'


function Favorites({ myFavorites, onClose }) {
  const [category, setCategory] = useState("gender")
    const [filtro, setFiltro] = useState("Male")
    const dispatch = useDispatch()

    function handleOrder(e){
        if(e.target.value === "Ascending"){
            dispatch(orderReverse())
        } else {
            dispatch(order())
        }
    }
    
    function handleSelectCategory(e){
        setCategory(e.target.value)
        console.log(e.target.value)
    }

    function handleFilter(e){
        setFiltro(e.target.value)
        console.log(filtro + category)
        dispatch(filter(category,filtro))
    }

  return (
    <>
      <FilterBar handleFilter={handleFilter} handleSelectCategory={handleSelectCategory} handleOrder={handleOrder}/>
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