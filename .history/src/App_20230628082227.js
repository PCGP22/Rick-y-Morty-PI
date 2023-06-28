import './App.modules.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import characters from './data.js';

function App() {
   return (
      <div className="App">
         <Nav />
         <Cards characters={characters} />
      </div>
   );
}

export default App;