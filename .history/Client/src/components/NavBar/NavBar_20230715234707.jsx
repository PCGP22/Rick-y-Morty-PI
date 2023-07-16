import { useState } from "react"
import { NavLink } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar.jsx"
import { CgMenu} from "react-icons/cg"; //iconos
import logo from "../../img/Logo.png"
import './NavBar.modules.css'
import "./Aside.modules.css"

function NavBar({ search, onSearch, logout }) {
  const [show, setShow] = useState(false)
  
  function handleClick(){
    setShow(!show)
    
    if(!show){
      document.body.classList.add('stop')
    } else {
      document.body.classList.remove('stop')
    }
  } 
  document.getElementById

  return (
    <>
      <div className="navBar__container">
        <div className="navBar__divButtons">
          <NavLink to="/rickandmorty/home">
              <img src={logo} className="navBar__buttons__logo" alt="logo"/>
          </NavLink>
        </div>
        <div>
          {search?<SearchBar onSearch={onSearch}/>:""}
        </div>
        <div className="navBar__divButtons">
          <button className="navBar__buttons navBar__buttons__burger" onClick={handleClick}><CgMenu className="navBar__buttons__icon"/></button>
          <div className="navBar__buttons--hidden">
          <NavLink to="/rickandmorty/fav">
                <button className="navBar__buttons">Favorites</button>
            </NavLink>
            <NavLink to="/rickandmorty/about">
                <button className="navBar__buttons">About</button>
            </NavLink>
            <button className="navBar__buttons" onClick={logout}>Log Out</button>
          </div>
        </div>
      </div>
      {show?
        <div className='navBar__aside'>
          <NavLink to="/rickandmorty/home">
              <img src={logo} className="aside__logo" alt="logo" onClick={handleClick}/>
          </NavLink>
          <NavLink to="/rickandmorty/fav">
              <button className="aside__buttons" onClick={handleClick}>Favorites</button>
          </NavLink>
          <NavLink to="/rickandmorty/about">
              <button className="aside__buttons" onClick={handleClick}>About</button>
          </NavLink>
          <button className="aside__buttons" onClick={()=>{{logout(); handleClick()}}}>Log Out</button>
          <button className="aside__buttons x" onClick={handleClick}>X</button>
        </div>:""
        }
    </>
  )
}

export default NavBar