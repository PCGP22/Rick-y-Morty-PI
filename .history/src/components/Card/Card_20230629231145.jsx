import "./Card.modules.css"
import { Link } from "react-router-dom";
export default function Card({name,status,species,gender,image,origin,onClose,id}) {
  
   return (
      <>
      
       <div className="card">
       <Link to={`/detail/${id}`} >
         <img src={image} alt=''/>
         </Link>
         <button className="closeButton" onClick={()=>onClose(name)}>X</button>
            <h2 className="nombre">{"#"+id+": " + name}</h2>
         <div className="description">
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Species:</strong> {species}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Origin:</strong> {origin.name}</p>
         </div>
      </div>
     
      </>
   );
}
