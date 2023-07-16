import { useState, useEffect } from 'react'
import { useNavigate, Routes, Route } from "react-router-dom"
import axios from 'axios'
import About from "./components/About/About.jsx"
import Details from "./components/Details/Details.jsx"
import Error from "./components/Error/Error.jsx"
import Favorites from './components/Favorites/Favorites.jsx'
import Home from "./components/Home/Home.jsx"
import SignUp from './components/Sign-Up/SignUp.jsx'
import WithNavBar from "./components/NavBar WorkAround/WithNavBar.jsx"
import defaultCharacters from "./Data/default.js"
import "./App.modules.css" //tipografías


function App() {
  const [characters, setCharacters] = useState([...defaultCharacters])
  const navigate = useNavigate()
  const [access, setAccess] = useState(true)

  function login(inputs) {
    axios.post('http://localhost:3001/rickandmorty/login/',inputs)
      .then(({ data }) => {
        const { access } = data;
        setAccess(data);
        console.log(data + access)
        access && navigate('/rickandmorty/home');
    });
 }

  useEffect(()=>{
      (!access && navigate("/rickandmorty/login"))
    },
      [access]
  )

  function logout(){
    setAccess(false)
    navigate("/rickandmorty/login")
  }

  function onSearch(id){
    navigate(`/rickandmorty/detail/${id}`)
  }

  function handleReset(){ setCharacters([]) }

  function onSearchHome(id){
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
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
    <>
      <Routes>
          <Route path='/rickandmorty/login' element={<SignUp login={login}/>}/>
          <Route path='/rickandmorty/home' element={<Home onSearch={onSearchHome} onClose={onClose} handleReset={handleReset} logout={logout} characters={characters}/>}/>
          <Route path='/rickandmorty/detail/:id' element={<Details onSearch={onSearch} logout={logout}/>}/>
        <Route element={<WithNavBar search={false} logout={logout}/>}>
          <Route path="/rickandmorty/favorites" element={<Favorites onClose={onClose}/>}/>
          <Route path='/rickandmorty/about' element={<About/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
