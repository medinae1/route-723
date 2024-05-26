import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import WalkCycle from './components/WalkCycle'; // Import the WalkCycle component
import Comics from './components/Comics';
import Artwork from './components/Artwork';
import Games from './components/Games'
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <div className="App">
      <nav>
      <WalkCycle /> {/* Add WalkCycle component here */}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/games">Games</Link></li>
          <li><Link to="/comics">Comics</Link></li>
          <li><Link to="/artwork">Artwork</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/games" element={<Games />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/artwork" element={<Artwork />} />
        <Route path="/" element={<h1>Welcome to Route 723</h1>} />
      </Routes>
    </div>
  );
}

export default App;
