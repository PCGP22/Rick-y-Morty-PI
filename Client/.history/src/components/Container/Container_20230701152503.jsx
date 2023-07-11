import styles from "./Container.modules.css"
import Card from '../Card/Card'

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