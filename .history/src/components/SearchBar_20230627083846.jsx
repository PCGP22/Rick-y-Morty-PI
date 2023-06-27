import "./SearchBar.components.css"

export default function SearchBar(props) {
   return (
      <div className="searchBar">
         <input className="input" type='search' placeholder="Búsqueda"/>
         <button className="botonBuscar" onClick={props.onSearch}>Buscar</button>
      </div>
   );
}
