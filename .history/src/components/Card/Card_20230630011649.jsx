import "./Card.modules.css"
import { NavLink } from "react-router-dom";
export default function Card({name,status,species,gender,image,origin,onClose,id}) {
  
   function Card(){
   
   return (
      <>
      
       <NavLink className={"link"} to={`/detail/${id}`} >
       <div className="card">
         <img src={image} alt=''/>
         <button className="closeButton" onClick={()=>onClose(name)}>X</button>
            <h2 className="nombre">{"#"+id+": " + name}</h2>
         <div className="description">
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Species:</strong> {species}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Origin:</strong> {origin.name}</p>
         </div>
         <div className="cover">
            <p><strong>Más información</strong></p>
         </div>
      </div>
         </NavLink>
     
      </>
   );
}
