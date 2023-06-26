export default function SearchBar({onSearch}) {
   return (
      <div>
         <input type='search' placeholder="Búsqueda"/>
         <button onClick={{onSearch}}>Buscar</button>
      </div>
   );
}
