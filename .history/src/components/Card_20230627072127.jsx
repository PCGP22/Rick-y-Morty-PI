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
            <h2>{name}</h2>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origin.name}</h2>
         </div>
      </div>
   );
}
