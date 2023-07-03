import { NavLink } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar.jsx"
import logo from "../../img/Logo.png"
import './NavBar.modules.css'

function NavBar({ search, onSearch, logout }) {
  return (
    <div className="navBar__container">
      <div className="navBar__divButtons">
        <NavLink to="/home">
          <button className="navBar__buttons">
            <img src={logo} className="navBar__buttons__logo" alt="logo"/>
          </button>
        </NavLink>
        
      </div>
      <div>
        {search?<SearchBar onSearch={onSearch}/>:""}
      </div>
      <div className="navBar__divButtons">
      <NavLink to="/about">
          <button className="navBar__buttons">About</button>
        </NavLink>
        <NavLink to="/">
          <button className="navBar__buttons" onClick={logout}>Log Out</button>
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar