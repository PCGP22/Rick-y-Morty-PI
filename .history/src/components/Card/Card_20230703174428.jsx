import { NavLink } from "react-router-dom"
import "./Card.modules.css"

function Card({id, status, name,image,species,onClose,origin}) {
  
  return (
    <div className="card__container">
      <div className="card__top">
        <div className={`card__status ${status}`}/>
        <p className="card__id">{`#${id}`}</p>
        <button className="card__button" onClick={()=>onClose(name)}>X</button>
      </div>
      <img src={image} className="card__img" alt=''/>
      <p className="card__origin">{origin["name"]}</p>
      <div className="card__description">
        <h3 className="card__title">{name}</h3>
        <p>{species}</p>
      </div>
      <NavLink className={"card__link"} to={`/detail/${id}`} >
            <p><strong>More info</strong></p>
      </NavLink>
    </div>
  )
}

export default Card