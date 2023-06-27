import "./SearchBar.components.css"
import { TiZoom } from "react-icons/ti";

export default function SearchBar(props) {
   return (
      <div className="searchBar">
         <input className="input" type='search' placeholder="Búsqueda"/>
         <button className="botonBuscar" onClick={props.onSearch}><TiZoom/> Buscar</button>
      </div>
   );
}
