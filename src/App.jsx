import { useState, useEffect } from 'react'
import { useNavigate, Routes, Route } from "react-router-dom"
import About from "./components/About/About"
import Details from "./components/Details/Details"
import Error from "./components/Error/Error"
import Home from "./components/Home/Home"
import SignUp from './components/Sign-Up/SignUp'
import WithNavBar from "./components/NavBar WorkAround/WithNavBar"
import "./App.modules.css" //tipografías


function App() {

  const navigate = useNavigate()
  const [access, setAccess] = useState(false)
  const email = "ejemplo@gmail.com"
  const password = "123456"

  function login (userData){
    if(userData.email === email && userData.password === password){
      setAccess(true)
      navigate("/home")
    }
  }

  useEffect(()=>{
      (!access && navigate("/"))
    },
      [access]
  )

  function logout(){
    setAccess(false)
    navigate("/")
  }

  function onSearch(id){
    navigate(`/detail/${id}`)
  }

  return (
    <>
      <Routes>
          <Route path='/' element={<SignUp login={login}/>}/>
          <Route path='/home' element={<Home logout={logout}/>}/>
          <Route path='/detail/:id' element={<Details onSearch={onSearch} logout={logout}/>}/>
        <Route element={<WithNavBar search={false} logout={logout}/>}>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
