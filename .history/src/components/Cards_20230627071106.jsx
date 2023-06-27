import Card from './Card';
import styles from "./Cards.modules.css"


export default function Cards(props) {
   const characters = props.characters
   return <div className="container">
      {characters.map((personaje)=>{
         return(
            <>
            <Card {...personaje} key={personaje.id}/>
            </>
         )
      })}
   </div>;
}
