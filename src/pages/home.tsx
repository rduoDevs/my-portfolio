import ryanLogo from '../assets/RyanWarm.png'
import whiteCircle from '../assets/WhiteCircle.png'
import '../App.css'
import { Navbar } from '../components/Navbar'

function Home() {
  let tabs = ["about", "experience", "projects", "games"]
 

  return (
    <>
        {/* Positioning for picture of myself */}
        <div style={{ position: "absolute", zIndex: 3, top: "45%", left: "50%", transform: "translate(-50%, -78%)" }}>
          <img src={ryanLogo} className="profile-pic" alt="Pic of Ryan" />
        </div>

        <div style={{ position: "absolute", zIndex: 2, top: "45%", left: "50%", transform: "translate(-50%, -77.4%)" }}>
            <img src={whiteCircle} className="profile-pic-border" />
        </div>

        {/* Layout for the headline text */}
        <div style={{position: "relative", zIndex: 2}}>
        <h1 style={{ marginBottom: "1px", marginTop: "45vh" }}>Ryan Duong</h1>
        <text>
          {'indie game dev · cs + applied math @ brown'}
        </text>
        <Navbar
            navItems={tabs} />
       
        {/* Bottom placard */}
        <div style= {{marginTop: "15vh", fontSize: "12px"}}>
          <p style={{opacity: .65}}>Built with React & TypeScript ☕</p>
        </div> 
        </div>
    </>
  )
}

export default Home
