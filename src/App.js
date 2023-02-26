import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PokemonDetails from './components/PokemonDetails';
import ShowPagePokemon from './components/ShowPagePokemon';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<ShowPagePokemon/>}></Route>
          <Route path='/pokemon/:id' element={<PokemonDetails/>}></Route>
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
