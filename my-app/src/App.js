import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx'
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Music from './pages/Music';
import Cover from './pages/Cover';
import { Routes, Route } from 'react-router-dom';


function App() {
    
  return (
    <div className="App">
        <NavBar></NavBar>
          <Routes>
              <Route path="/" element={<Cover/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/portfolio" element={<Portfolio/>} />
              <Route path="/music" element={<Music/>} />
          </Routes>
    </div>
  );
}

export default App;
