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
            <h2 className="nombre">{name}</h2>
            <p><strong>Status:</strong> {status}</p>
            <p>Species: {species}</p>
            <p>Gender: {gender}</p>
            <p>Origin: {origin.name}</p>
         </div>
      </div>
   );
}
