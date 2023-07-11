import { useState } from 'react'
import Container from "../Container/Container"
import NavBar from "../NavBar/NavBar"
import defaultCharacters from "../../Data/default"
import banner from "../../img/Banner.png"
import styles from './Home.modules.css'

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
    <div className={styles.Container}>
      <div className={styles.Banner}>
        <img className={styles.Img} src={banner} alt="Rick and Morty Banner"/>
        <div className={styles.Filter}></div>
      </div>
      <NavBar search="on" onSearch={onSearch}/>
      <Container characters={characters} onClose={onClose} />
    </div>
  )
}

export default Home