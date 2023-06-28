import "./Card.modules.css"
export default function Card({name,status,species,gender,image,origin,onClose}) {
  
   return (
      <div className="card">
         
         <img src={image} alt=''/>
         <button className="closeButton" onClick={onClose}>X</button>
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
