import ryanLogo from '../assets/RyanPFP.png'
import github from '../assets/github.png'
import mail from '../assets/mail.png'
import linkedin from '../assets/linkedin.png'
import ximg from '../assets/x.png'
import resume from '../assets/resume.png'
import pdf from '../assets/Ryan_Duong_2026_Resume.pdf'
import '../App.css'
import './home.css'
import { Navbar } from '../components/Navbar'
import Experience from './experience'
import Games from './games'
import About from './about'
import Projects from './projects'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Home() {
  let tabs = ["about", "experience", "projects", "games"]
  const location = useLocation();

  useEffect(() => {
    // "/experience" -> "experience"
    const section = location.pathname.replace("/", "") || "home";
    const el = document.getElementById(section == "about" ? "home" : section);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY -25
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>

<div style={{zIndex: 1, position: "absolute", top: "2.5vh", left: "50%", transform: "translateX(-50%)", width: "50%"}}>
            <Navbar
                navItems={tabs}>
            </Navbar>
        </div>

    <div className = "mainbox">
      <section id="home">
        {/* Layout for the headline text */}
        <div className="namebox">
          <img src={ryanLogo} className='profile-pic'></img>
       </div>
       <div className="textbox">
        <h1 className='homehead'>Ryan Duong</h1>
        <text className='homebody'>applied math + cs @ brown</text>
        </div>
        <div style={{marginTop: "10px"}}>
          <button className='contact' onClick={() => window.open('https://github.com/rduoDevs/')}>
            <img style={{width: "25px", height: "25px"}} src={github}></img>
          </button>
          <button className='contact' onClick={() => window.open('mailto:rduong314@gmail.com')}>
            <img style={{width: "25px", height: "25px"}} src={mail}></img>
          </button>
          <button className='contact' onClick={() => window.open('https://www.linkedin.com/in/ryanduongct')}>
            <img style={{width: "25px", height: "25px"}} src={linkedin}></img>
          </button>
          <button className='contact' onClick={() => window.open('https://x.com/LugicalDev')}>
            <img style={{width: "25px", height: "25px"}} src={ximg}></img>
          </button>
          <button className='contact' onClick={() => window.open(pdf)}>
            <img style={{objectFit: 'contain', width: "25px", height: "25px"}} src={resume}></img>
          </button>
        </div>
      </section>

        <section id="about">
        <About />
        </section>
    </div>
      
      <div className="Experience" style={{marginTop: "15vh"}}>
      
    </div>

        

      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="games"><Games /></section>
        
      

      <div style= {{marginTop: "15vh", fontSize: "12px"}}>
          <p style={{opacity: .65}}>Built with React & TypeScript ☕</p>
        </div> 
    </>
  )
}

export default Home
