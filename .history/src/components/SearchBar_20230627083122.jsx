import "./SearchBar.components.css"

export default function SearchBar(props) {
   return (
      <div>
         <input className="input" type='search' placeholder="Búsqueda"/>
         <button onClick={props.onSearch}>Buscar</button>
      </div>
   );
}
