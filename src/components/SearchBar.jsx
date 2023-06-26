export default function SearchBar(props) {
   return (
      <div>
         <input type='search' placeholder="Búsqueda"/>
         <button onClick={props.onSearch}>Buscar</button>
      </div>
   );
}
