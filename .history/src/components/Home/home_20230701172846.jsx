import { useState } from 'react'
import Container from "../Container/Container.jsx"
import NavBar from "../NavBar/NavBar.jsx"
import defaultCharacters from "../../Data/default.js"
import banner from "../../img/Banner.png"
import './Home.modules.css'

function Home() {
  const [characters, setCharacters] = useState([...defaultCharacters])
// Usar botón para resetear los personajes
// {function handleReset(){ setCharacters([]) }}
  function onSearch(id){
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {return res.json()})
      .then((data) => {if (data.name){
        if(!characters.find((char) => char.id === data.id)){
          setCharacters([...characters, data]);
        } else { window.alert('Character already loaded!') }
        } else { window.alert('No character match this ID!') }
      }
    );
  }

  function onClose(name){ 
    setCharacters(characters.filter((c)=> c.name !== name))
  }

  return (
    <div className="home__container">
      <div className="home__banner">
        <img className="home__banner__img" src={banner} alt="Rick and Morty Banner"/>
        <div className="home__banner__filter"></div>
      </div>
      <NavBar search="on" onSearch={onSearch}/>
      <Container characters={characters} onClose={onClose} />
    </div>
  )
}

export default Home