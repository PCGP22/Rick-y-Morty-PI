import { useState } from "react";
import "./SearchBar.components.css"
import { TiZoom } from "react-icons/ti";


export default function SearchBar(props) {
   const [cid, setCid] = useState("")
  

   return (
      <div className="searchBar">
         <input className="input" type='text' value={cid} onchange={(e)=>setCid(e.target.value)} placeholder="Búsqueda"/>
         <button className="botonBuscar" onClick={props.onSearch}>Buscar <TiZoom className="simboloBuscar"/></button>
      </div>
   );
}
