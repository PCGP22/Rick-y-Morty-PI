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
  const [access, setAccess] = useState(false)

  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
 }

  useEffect(()=>{
      (!access && navigate("/login"))
    },
      [access]
  )

  function logout(){
    setAccess(false)
    navigate("/login")
  }

  function onSearch(id){
    navigate(`/detail/${id}`)
  }

  function handleReset(){ setCharacters([]) }

  function onSearchHome(id){
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
    <>
      <Routes>
          <Route path='/login' element={<SignUp login={login}/>}/>
          <Route path='/home' element={<Home onSearch={onSearchHome} onClose={onClose} handleReset={handleReset} logout={logout} characters={characters}/>}/>
          <Route path='/detail/:id' element={<Details onSearch={onSearch} logout={logout}/>}/>
        <Route element={<WithNavBar search={false} logout={logout}/>}>
          <Route path="/fav" element={<Favorites onClose={onClose}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
