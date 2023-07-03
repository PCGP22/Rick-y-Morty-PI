import { useState, useEffect } from 'react'
import { useNavigate, Routes, Route } from "react-router-dom"


function App() {

  const navigate = useNavigate()
  const [access, setAccess] = useState(false)
  const email = "ejemplo@gmail.com"
  const password = ""

  function login (userData){
    if(userData.email === email && userData.password === password){
      setAccess(true)
      navigate("/home")
    }
  }

  useEffect(()=>{
      (!access && navigate("/"))
    },
      [access,navigate]
  )

  function logout(){
    setAccess(false)
    navigate("/")
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Sign-Up logIn={login}/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route element={<WithNavBar logout={logout}/>}>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<Error/>}/>

        </Route>
      </Routes>
    </>
  )
}

export default App
