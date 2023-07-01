import React from 'react'
import logo from "../../Banner/Logo.png"
import SearchBar from '../SearchBar/SearchBar'
import { NavLink } from 'react-router-dom'
import "./Nav.modules.css"

function Nav(props) {
  return (
    <div className='navDiv'>
      <div className='botones'>
      <NavLink to="/">
        <button className='home'><img src={logo} className='logo' alt="logo"/></button>
      </NavLink>
      <NavLink to="/about">
        <button>About</button>
      </NavLink>
      </div>
      <div>
        {props.search?<SearchBar onSearch={props.onSearch}/>:""}
      </div>
      <div>
        <button>Log Out</button>
      </div>
    </div>
  )
}

export default Nav