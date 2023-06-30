import { useState } from 'react';
import './App.modules.css';
import Cards from '../Cards/Cards';
import Nav from '../Nav/Nav';
import banner from "../../Banner/Banner.png"

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
          <Nav onSearch={onSearch}/>
          <img src={banner}/>
          <Cards characters={characters} onClose={onClose} />
       </div>
    );
}

export default Home