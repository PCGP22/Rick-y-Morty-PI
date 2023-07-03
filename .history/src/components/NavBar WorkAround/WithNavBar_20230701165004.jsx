import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar.jsx'

function WithNavBar({logout}) {
  return (
    <>
      <NavBar logout={logout}/>
      <Outlet/>
    </>
  )
}

export default WithNavBar