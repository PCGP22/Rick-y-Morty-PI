import Card from './Card';


export default function Cards(props) {
   const characters = {characters}
   return <div>
      {characters.map((personaje)=>{
         return(
            <>
            <Card {...personaje}/>
            </>
         )
      })}
   </div>;
}
