import { useState } from 'react';
import './App.modules.css';
import Cards from '../Cards/Cards';
import banner from "../../Banner/Banner.png"
import SearchBar from '../SearchBar/SearchBar';

function Home() {
    const [characters, setCharacters] = useState([])

    function onSearch(id) {
       fetch(`https://rickandmortyapi.com/api/character/${id}`)
       .then((res) => {return res.json()})
       .then((data) => {if (data.name){
          if(!characters.find((char) => char.id === data.id)){
             setCharacters((oldChars) => [...oldChars, data]);
          } else {window.alert('¡Personaje repetido!');}
       } else {
          window.alert('¡No hay personajes con este ID!');
       }});
    }
 
    function onClose(name){
       setCharacters(characters.filter((c)=> c.name !== name))
    }
    
    return (
       <div className="App">
            <div>
            <img className="banner" src={banner} alt="Rick and Morty Banner"/>
            <div className='filter'></div>
            </div>
          {/* <Nav onSearch={onSearch}/> */}
          <SearchBar onSearch={onSearch}/>
          <Cards characters={characters} onClose={onClose} />
       </div>
    );
}

export default Home