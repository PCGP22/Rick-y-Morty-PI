import {useState} from 'react'
import { CgDice5,CgSearch } from "react-icons/cg"; //iconos
import styles from "./SearchBar.modules.css"

function SearchBar() {
  const [id, setId] = useState("")

  function random(){
    return Math.floor(1 + (Math.random() * (826-1)))
  }
  function handleKeyDown(e) {
    if(e.keyCode === 13) { 
       props.onSearch(cid)
       setCid("")
    }
  }

  return (
    <div>SearchBar</div>
  )
}

export default SearchBar