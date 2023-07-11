import { useState } from 'react'
import Container from "../Container/Container.jsx"
import NavBar from "../NavBar/NavBar.jsx"
import defaultCharacters from "../../Data/default.js"


function Home({logout, characters, handleReset, onClose, onSearch}) {

  return (
    <div className="home__container">
      <NavBar search="on" onSearch={onSearch} logout={logout}/>
      <Container characters={characters} handleReset={handleReset} onClose={onClose} />
    </div>
  )
}

export default Home