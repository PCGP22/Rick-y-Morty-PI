import styles from "./Card.modules.css"
import { NavLink } from "react-router-dom"

function Card({id,name,image,status}) {
  return (
    <div className={styles.Container}>
      <h2 className={styles.Title}>{`#${id}: ${name}`}</h2>
      <img src={image} alt=''/>
      <button className={styles.button} onClick={()=>onClose(name)}>X</button>
      <div className={styles.Description}>
        <p><strong>Status:</strong> {status}</p>
      </div>
      <NavLink className={styles.Link} to={`/detail/${id}`} >
         <div className={styles.Cover}>
            <p><strong>More info</strong></p>
         </div>
      </NavLink>
    </div>
  )
}

export default Card