import React from 'react'
import SearchBar from './SearchBar'

function Nav() {
  return (
    <div>
        <SearchBar onSearch={onSearch}/>
    </div>
  )
}

export default Nav