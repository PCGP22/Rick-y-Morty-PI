import error from '../../img/Error.png'
import "./Error.modules.css"

function Error() {
  return (
    <div className="error__container">
      <img className="error__img" src={error} alt="Error 404"/>
      <div className="error__description">
        <p>
          <strong>Id: #</strong>404
          <strong> - Name: </strong> Not Found
        </p>
        <p><strong>Extra: </strong>This page doesn't exist</p> 
      </div>  
    </div>
  )
}

export default Error