import style from "./SearchBar.components.css"
import { TiZoom } from "react-icons/ti";

export default function SearchBar(props) {
   return (
      <div className={style.searchBar}>
         <input className={style.input} type='search' placeholder="Búsqueda"/>
         <button className="botonBuscar" onClick={props.onSearch}>Buscar <TiZoom className="simboloBuscar"/></button>
      </div>
   );
}
