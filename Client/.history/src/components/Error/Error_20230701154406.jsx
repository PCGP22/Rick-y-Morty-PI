import error from '../../img/Error.png'
import styles from "./Error.modules.css"

function Error() {
  return (
    <div className={styles.Container}>
      <img className={styles.Img} src={error} alt="Error 404"/>
      <div className={styles.Description}>
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