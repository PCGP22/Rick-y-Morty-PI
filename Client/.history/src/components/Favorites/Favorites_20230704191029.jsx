import { connect } from "react-redux"
import "../Container/Container.modules.css"

function Favorites() {
  return (
    <div>Favorites</div>
  )
}

const mapStateToProps = state =>{
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites)