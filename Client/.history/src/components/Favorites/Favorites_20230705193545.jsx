import { connect } from "react-redux"
import Card from "../Card/Card"
import { addFav, removeFav } from "../../Redux/actions.js"
import "../Container/Container.modules.css"
import FilterBar from "../FilterBar/FilterBar"
import { useEffect } from "react"

function Favorites({ myFavorites, onClose }) {

  return (
    <>
      <FilterBar/>
      <div className="container__container fav" >
        <div className='container__cards'>
          {useEffect(() => {
            myFavorites?.map(({...c})=>{
              return <Card  {...c} key={c.id} onClose={onClose}/>
            })}, [myFavorites])}
          
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