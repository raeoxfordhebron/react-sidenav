import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidenav from './components/Sidenav' 
import Explore from './pages/Explore'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Statistics from './pages/Statistics'

function App() {
  return (
    <div className="App">
      <Sidenav/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/statistics" element={<Statistics/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
