import {useState} from 'react'
import { CgDice5,CgSearch } from "react-icons/cg"; //iconos
import "./SearchBar.modules.css"

function SearchBar() {
  const [id, setId] = useState("")

  function random(){
    return Math.floor(1 + (Math.random() * (826-1)))
  }

  function handleKeyDown(e) {
    if(e.keyCode === 13) { //Detect enter
       props.onSearch(cid)
       setCid("")
    }
  }

  return (
    <div className="searchBar__container">
         <input className="searchBar__input" onKeyDown={handleKeyDown} type='search' value={id} onChange={(e)=>setId(e.target.value)} placeholder="Search by ID (1-826)"/>
         <div className="searchBar__buttons">
            <button id={cid} className="searchBar__buttons__search" onClick={()=>{props.onSearch(id); setId("")}}><CgSearch className="searchBar__buttons__icon"/></button>
            <button className="searchBar__buttons__random" onClick={()=>{props.onSearch(random())}}><CgDice5 className="searchBar__buttons__icon"/></button>
         </div>
      </div>
  )
}

export default SearchBar