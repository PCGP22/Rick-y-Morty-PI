import React from 'react'
import logo from "../../Banner/Logo.png"
import SearchBar from '../SearchBar/SearchBar'
import { NavLink } from 'react-router-dom'
import "./Nav.modules.css"

function Nav(props) {
  return (
    <div className='navDiv'>
      <div className='botones'>
      <NavLink to="/home">
        <button className='home'><img src={logo} className='logo' alt="logo"/></button>
      </NavLink>
      <NavLink to="/about">
        <button className='about'>About</button>
      </NavLink>
      </div>
      <div>
        {props.search?<SearchBar onSearch={props.onSearch}/>:""}
      </div>
      <div className='botones'>
      <NavLink to="/">
        <button className='logOut' onClick={props.logout}>Log Out</button>
      </NavLink>
      </div>
    </div>
  )
}

export default Nav