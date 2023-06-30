import Home from "./components/Home/Home";
import Details from "./components/Details/Details"
import About from "./components/About/About"
import Nav from "./components/Nav/Nav";
import { Route,Routes } from "react-router-dom";

function App() {
  return(
    <div>
    <Routes>
      <Route path="/[\w]*" element={<Nav/>} />
    </Routes>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/detail/:id" element={<Details/>}/>
    </Routes>
    </div>
  )
}

export default App;
