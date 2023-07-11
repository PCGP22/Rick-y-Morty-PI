import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

function WithNavBar({logout}) {
  return (
    <>
      <NavBar logout={logout}/>
      <Outlet/>
    </>
  )
}

export default WithNavBar