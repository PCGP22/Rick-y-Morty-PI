import { useState } from 'react'
import { CgDice5, CgSearch } from "react-icons/cg"; //iconos
import "./SearchBar.modules.css"

function SearchBar({onSearch}) {
  const [id, setId] = useState("")

  function random(){
    return Math.floor(1 + (Math.random() * (826-1)))
  }

  function handleKeyDown(e) {
    if(e.keyCode === 13) { //Detect enter
       onSearch(id)
       setId("")
    }
  }

  return (
    <div className="searchBar__container">
         <input className="searchBar__input" onKeyDown={handleKeyDown} type='search' value={id} onChange={(e)=>setId(e.target.value)} placeholder="Search by ID (1-826)" autoFocus/>
         <div className="searchBar__divButtons">
            <button id={id} className="searchBar__buttons searchBar__buttons__search" onClick={()=>{onSearch(id); setId("")}}><CgSearch className="searchBar__buttons__icon"/></button>
            <button className="searchBar__buttons searchBar__buttons__random" onClick={()=>{onSearch(random())}}><CgDice5 className="searchBar__buttons__icon"/></button>
         </div>
      </div>
  )
}

export default SearchBar