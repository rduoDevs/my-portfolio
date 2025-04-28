import { useState } from 'react'
import ryanLogo from './assets/RyanPFP.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={ryanLogo} className="profile-pic" alt="Pic of Ryan" />
      </div>
      <h1 style={{ marginBottom: "5px", marginTop: "15px"}}>Ryan Duong</h1>
      <text>indie game dev · cs + applied math @ brown</text>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <p className="read-the-docs">
        portfolio in progress... check back later!
      </p>
    </>
  )
}

export default App
