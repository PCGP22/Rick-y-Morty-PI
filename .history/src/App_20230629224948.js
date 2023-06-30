import Home from "./components/Home/Home";
import Details from "./components/Details/Details"
import About from "./components/About/About"
import Nav from "./components/Nav/Nav";
import { Route,Router } from "react-router-dom";

function App() {
  return(
    <>
    
   

    <Router>
      <Route path="/" element={<Nav/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/:name" element={<Details/>}/>
      <Route path="/about" element={<About/>}/>
      
    </Router>
    </>
  )
}

export default App;
