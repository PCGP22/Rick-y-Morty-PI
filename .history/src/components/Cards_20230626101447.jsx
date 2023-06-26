import Card from './Card';


export default function Cards({characters}) {
   return <div>
      {{characters}.map((personaje)=>{
         return(
            <>
            <Card {...personaje}/>
            </>
         )
      })}
   </div>;
}
