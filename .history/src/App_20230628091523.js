import { useEffect, useState } from 'react';
import './App.modules.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';



function App() {
   const [characters, setCharacters] = useState([])
   const axios = require('axios');
   
   useEffect(() => {
     fetch(`https://rickandmortyapi.com/api/character/${id}`)
     .then((data)=> if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         })
      .catch((error)=>console.log(error))
   
     return () => {
       
     }
   }, [])
   
   return (
      <div className="App">
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
