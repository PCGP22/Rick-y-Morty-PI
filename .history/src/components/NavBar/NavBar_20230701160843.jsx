import { NavLink } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import logo from "../../img/Logo.png"
import styles from './NavBar.modules.css'

function NavBar({ search, onSearch, logout }) {
  return (
    <div className={styles.Container}>
      <div className={styles.Navlinks}>
        <NavLink to="/home">
          <button className={styles.Home}>
            <img src={logo} className={styles.Logo} alt="logo"/>
          </button>
        </NavLink>
        <NavLink to="/about">
          <button className={styles.About}>About</button>
        </NavLink>
      </div>
      <div>
        {search?<SearchBar onSearch={onSearch}/>:""}
      </div>
      <div className={styles.Navlinks}>
        <NavLink to="/">
          <button className={styles.Logout} onClick={logout}>Log Out</button>
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar