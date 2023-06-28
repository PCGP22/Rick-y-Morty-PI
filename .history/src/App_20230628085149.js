import { useState } from 'react';
import './App.modules.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';


function App() {
   const [characters, setCharacters] = useState([])

   const example = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   };

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   return (
      <div className="App">
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} />
      </div>
   );
}

export default App;
