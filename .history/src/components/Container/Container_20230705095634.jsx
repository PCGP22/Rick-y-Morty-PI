import Card from '../Card/Card.jsx'
import "./Container.modules.css"

function Container({ characters, onClose, handleReset }) {
  return (
    <div className="container__container" >
      {characters.length?<button onClick={handleReset} className='container__reset'>Clear</button>:""}
      <div className='container__cards'>
        {characters.map((c)=>{
        return <Card {...c} key={c.id} onClose={onClose}/>
        })}
      </div>
    </div>
  )
}

export default Container