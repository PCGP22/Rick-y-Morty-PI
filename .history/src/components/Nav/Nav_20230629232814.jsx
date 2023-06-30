import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { NavLink } from 'react-router-dom'
import "./Nav.modules.css"

function Nav(props) {
  return (
    <div className='navDiv'>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/about">
        <button>Créditos</button>
      </NavLink>
        <SearchBar onSearch={props.onSearch}/>
    </div>
  )
}

export default Nav