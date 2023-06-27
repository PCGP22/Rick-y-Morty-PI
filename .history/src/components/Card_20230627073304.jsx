import "./Card.modules.css"
export default function Card({name,status,species,gender,image,origin}) {
   function onClose(){
      window.alert('Emulamos que se cierra la card')
   }
   return (
      <div className="card">
         
         <img src={image} alt=''><button onClick={onClose}>X</button></img>
            <h2 className="nombre">{name}</h2>
         <div className="description">
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Species:</strong> {species}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Origin:</strong> {origin.name}</p>
         </div>
      </div>
   );
}
