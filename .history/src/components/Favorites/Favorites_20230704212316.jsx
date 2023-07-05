import { connect } from "react-redux"
import Card from "../Card/Card"
import "../Container/Container.modules.css"

function Favorites({onClose, myFavorites}) {
  return (
    <div className="container__container" >
      <div className='container__cards'>
        {myFavorites?.map((c)=>{
        return <Card {...c} key={c.id} onClose={onClose}/>
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state =>{
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites)