import { useEffect } from 'react'
import '../App.css'
import { loadParticles } from '../components/ParticleBackground'
import {configs} from '../components/ParticleBackground'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './home.tsx'

function App() {
  useEffect(() => {
    loadParticles(configs);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/experience" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/games" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
