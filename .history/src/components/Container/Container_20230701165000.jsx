import Card from '../Card/Card.jsx'
import styles from "./Container.modules.css"

function Container({characters,onClose}) {
  return (
    <div className={styles.Container}>
      {characters.map((c)=>{
        return <Card {...c} key={c.id} onClose={onClose}/>
      })}
    </div>
  )
}

export default Container