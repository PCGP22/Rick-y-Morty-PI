import "./SearchBar.components.css"
import { TiZoom } from "react-icons/ti";
import { IoAccessibilitySharp } from "react-icons/io5";

export default function SearchBar(props) {
   return (
      <div className="searchBar">
         <input className="input" type='search' placeholder="Búsqueda"/>
         <button className="botonBuscar" onClick={props.onSearch}>Buscar <TiZoom className="simboloBuscar"/></button>
      </div>
   );
}
