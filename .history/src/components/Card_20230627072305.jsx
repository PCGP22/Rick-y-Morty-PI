import "./Card.modules.css"
export default function Card({name,status,species,gender,image,origin}) {
   function onClose(){
      window.alert('Emulamos que se cierra la card')
   }
   return (
      <div className="card">
         <button onClick={onClose}>X</button>
         <img src={image} alt='' />
         <div className="description">
            <dl>{name}</dl>
            <dd>{status}</dd>
            <dd>{species}</dd>
            <dd>{gender}</dd>
            <dd>{origin.name}</dd>
         </div>
      </div>
   );
}
