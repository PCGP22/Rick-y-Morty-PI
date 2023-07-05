import { useState } from 'react'
import Container from "../Container/Container.jsx"
import NavBar from "../NavBar/NavBar.jsx"
import defaultCharacters from "../../Data/default.js"


function Home({logout}) {
  const [characters, setCharacters] = useState([...defaultCharacters])

  function handleReset(){ setCharacters([]) }

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
      <NavBar search="on" onSearch={onSearch} logout={logout}/>
      <Container characters={characters} handleReset={handleReset} onClose={onClose} />
    </div>
  )
}

export default Home