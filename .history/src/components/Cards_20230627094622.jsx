import Card from './Card';
import style from "./Cards.modules.css"


export default function Cards(props) {
   const characters = props.characters
   return <div className={style..container}>
      {characters.map((personaje)=>{
         return(
            <>
            <Card {...personaje} key={personaje.id}/>
            </>
         )
      })}
   </div>;
}
