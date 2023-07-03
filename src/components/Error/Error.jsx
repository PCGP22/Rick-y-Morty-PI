import error from '../../img/Error.png'
import '../Details/Details.modules.css'

function Error() {
  return (
    <div className="details__background">
      <div className="details__container">
        <img className="details__img" src={error} alt="Error 404"/>
        <div className="details__description">
          <p>
            <strong>Id: #</strong>404
            <strong> - Name: </strong> Not Found
          </p>
          <p><strong>Extra: </strong>This page doesn't exist</p> 
        </div>  
      </div>
    </div>
  )
}

export default Error