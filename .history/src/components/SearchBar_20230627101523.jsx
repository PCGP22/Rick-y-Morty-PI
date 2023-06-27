import "./SearchBar.components.css"
import { TiZoom } from "react-icons/ti";

export default function SearchBar(props) {
   return (
      <div className="searchBar">
         <input pattern="[\W]{20}" className="input" type='search' placeholder="Búsqueda"/>
         <button className="botonBuscar" onClick={props.onSearch}>Buscar <TiZoom className="simboloBuscar"/></button>
      </div>
   );
}
