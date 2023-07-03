import { NavLink } from "react-router-dom"
import "./Card.modules.css"

function Card({id,name,image,status}) {
  return (
    <div className="card__container">
      <h2 className="card__title">{`#${id}: ${name}`}</h2>
      <img src={image} alt=''/>
      <button className="card__button" onClick={()=>onClose(name)}>X</button>
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