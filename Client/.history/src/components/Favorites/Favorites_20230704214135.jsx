import { connect } from "react-redux"
import Card from "../Card/Card"
import { addFav, removeFav } from "../../Redux/actions"
import "../Container/Container.modules.css"

function Favorites({ myFavorites }) {
  
function onClose (){
    setIsFav(false)
    removeFav(id)
}

  return (
    <div className="container__container" >
      <div className='container__cards'>
        {myFavorites?.map(({...c})=>{
        return <Card  {...c} key={c.id} onClose={onClose}/>
        })}
      </div>
    </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Favorites)