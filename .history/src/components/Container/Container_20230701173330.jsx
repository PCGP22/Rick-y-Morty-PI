import Card from '../Card/Card.jsx'
import "./Container.modules.css"

function Container({characters,onClose}) {
  return (
    <div className="container__container">
      {characters.map((c)=>{
        return <Card {...c} key={c.id} onClose={onClose}/>
      })}
    </div>
  )
}

export default Container