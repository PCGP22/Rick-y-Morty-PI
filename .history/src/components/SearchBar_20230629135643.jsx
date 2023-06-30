import { useState } from "react";
import "./SearchBar.components.css"
import { CgDice5,CgSearch } from "react-icons/cg";


export default function SearchBar(props) {
   const [cid, setCid] = useState("")
   function random(){
      setCid(1 + (Math.random() * (826-1)))
   }

   return (
      <div className="searchBar">
         <input className="input" type='search' value={cid} onChange={(e)=>setCid(e.target.value)} placeholder="Búsqueda"/>
         <button id={cid} className="botonBuscar" onClick={()=>props.onSearch(cid)}>Buscar <CgSearch className="simboloBuscar"/></button>
         <button className="botonRandom" onClick={()=>{random(); props.onSearch(cid);}}><CgDice5 className="simboloDado"/></button>
      </div>
   );
}
