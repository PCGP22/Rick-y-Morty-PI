import Home from "./components/Home/Home";
import Details from "./components/Details/Details"
import About from "./components/About/About"
import Nav from "./components/Nav/Nav";
import { Route,Routes,Switch } from "react-router-dom";

function App() {
  return(
    <div>
    <Routes>
    </Routes>
    <Routes>
      <Switch>
      <Route path="/" element={<Home/>}/>
      <Route path="/*" element={<Nav/>} />
      </Switch>
      <Route path="/about" element={<About/>}/>
      <Route path="/detail/:id" element={<Details/>}/>
    </Routes>
    </div>
  )
}

export default App;
