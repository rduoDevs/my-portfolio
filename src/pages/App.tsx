import { useEffect } from 'react'
import ryanLogo from '../assets/RyanWarm.png'
import whiteCircle from '../assets/WhiteCircle.png'
import '../App.css'
import { loadParticles } from '../components/ParticleBackground'
import {configs} from '../components/ParticleBackground'
import { Navbar } from '../components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './home.tsx'
import About from './about.tsx'
import Experience from './experience.tsx'
import Projects from './projects.tsx'
import Games from './games.tsx'

function App() {
  useEffect(() => {
    loadParticles(configs);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
