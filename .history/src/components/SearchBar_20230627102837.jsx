import "./SearchBar.components.css"
import { TiZoom } from "react-icons/ti";

export default function SearchBar(props) {
   return (
      <div className="searchBar">
         <input pattern="[a-z,A-Z,\S]{1,}" className="input" type='search' placeholder="Búsqueda"/>
         <button className="botonBuscar" onClick={props.onSearch}>Buscar <TiZoom className="simboloBuscar"/></button>
      </div>
   );
}
