import { useState } from 'react';
import './App.modules.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import "axios"



function App() {
   const [characters, setCharacters] = useState([])
   // const axios = require('axios');
   

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   function onClose(id){
      let idn = Number(id)
      setCharacters(characters.filter((c)=> c.id !== idn))
   }
   
   return (
      <div className="App">
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
