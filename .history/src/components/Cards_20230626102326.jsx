import Card from './Card';


export default function Cards(props) {
   const characters = {characters}
   return <div>
      {props.map((personaje)=>{
         return(
            <>
            <Card {...personaje}/>
            </>
         )
      })}
   </div>;
}
