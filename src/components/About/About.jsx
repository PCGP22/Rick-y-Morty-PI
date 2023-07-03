import { aboutInfo } from '../../Data/default'
import logo from "../../img/Logo.png"
import "../Details/Details.modules.css"

function About() {
  const pj = aboutInfo
  return (
    <div className="details__background">
    <div className="details__container">
      <img className="details__img" src={pj.image?pj.image:logo} alt="character profile"/>
        <div className="details__description">
          <p className="details__title">
            {pj.name? pj.name:"Undefined"}
          </p>
          <p><strong>Species: </strong>{pj.species? pj.species:"Undefined"}</p>
          <p><strong>Gender: </strong>{pj.gender? pj.gender:"Undefined"}</p>
          <p><strong>Status: </strong>{pj.status? pj.status:"Undefined"}</p>
          <p><strong>Location: </strong>{pj.location? pj.location.name:"Undefined"}</p>
          <p><strong>Origin: </strong>{pj.origin? pj.origin.name:"Undefined"}</p> 
          <p><strong>Extra: </strong>{pj.extra? pj.extra:"Undefined"}</p> 
        </div>  
    </div>
    </div>
  )
}

export default About