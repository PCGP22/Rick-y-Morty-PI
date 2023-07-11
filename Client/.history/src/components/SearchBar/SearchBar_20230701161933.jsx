import {useState} from 'react'
import { CgDice5,CgSearch } from "react-icons/cg"; //iconos
import styles from "./SearchBar.modules.css"

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
    <div className={styles.Container}>
         <input onKeyDown={handleKeyDown} className={styles.Input} type='search' value={cid} onChange={(e)=>setCid(e.target.value)} placeholder="Search by ID [1-826]"/>
         <div className={styles.Buttons}>
            <button id={cid} className={styles.Search} onClick={()=>{props.onSearch(cid); setCid("")}}><CgSearch className="simboloBuscar"/></button>
            <button className={styles.Random} onClick={()=>{props.onSearch(random())}}><CgDice5 className="simboloDado"/></button>
         </div>
      </div>
  )
}

export default SearchBar