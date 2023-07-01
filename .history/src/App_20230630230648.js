import Home from "./components/Home/Home";
import Details from "./components/Details/Details"
import About from "./components/About/About"
import Form from "./components/Form/Form";
import Error from "./components/Error/Error"
import {Route,Routes,useNavigate } from "react-router-dom";
import ConNav from "./components/NavBar Workaround/ConNav";
import {useState,useEffect} from "react"

function App() {

  const navigate = useNavigate();
  const [access, setAccess] = useState("false");
  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = '';

  function login(userData) {
    if (userData.password === PASSWORD && userData.correo === EMAIL) {
        setAccess("true");
        navigate('/home');
    }
  }

  useEffect(() => {
    access ==="false" && navigate('/');
 }, [access,navigate]);

 function logOut(){
  setAccess(false)
 }

  return(
    <div>
    <Routes >
    <Route path="/" element={<Form funcion={login} />}/>
    <Route path="/home" element={<Home/>}/>
    <Route element={<ConNav logout={logOut}/>}>
      <Route path="/about" element={<About/>}/>
      <Route path="/detail/:id" element={<Details/>}/>
      <Route path="*" element={<Error/>}/>
    </Route>
    </Routes>
    </div>
  )
}

export default App;
