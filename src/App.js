import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/game' exact element={<Game/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
