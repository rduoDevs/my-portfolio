import { useState, useEffect } from 'react'
import ryanLogo from '../assets/RyanPFP.png'
import '../App.css'
import { loadParticles } from '../components/ParticleBackground'
import {configs} from '../components/ParticleBackground'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    loadParticles(configs);
  }, []);

  return (
    <>
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", paddingTop: "50px", color: "white" }}>
        <div>
          <img src={ryanLogo} className="profile-pic" alt="Pic of Ryan" />
        </div>
        <h1 style={{ marginBottom: "5px", marginTop: "15px" }}>Ryan Duong</h1>
        <p>indie game dev · cs + applied math @ brown</p>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            you clicked {count} times.
          </button>
        </div>

        <p className="read-the-docs">
          portfolio in progress... check back later!
        </p>
      </div>
    </>
  )
}

export default App
