import Card from './Card';


export default function Cards(props) {
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
