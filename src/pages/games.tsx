import '../App.css';
import { Navbar } from '../components/Navbar';

function Games() {
    let tabs = ["home", "about", "experience", "projects", "games"]   

    return (
        <>
        <div style={{zIndex: 1, position: "absolute", top: "2.5vh", left: "50%", transform: "translateX(-50%)", width: "50%"}}>
            <Navbar
                navItems={tabs}>
            </Navbar>
        </div>

           <div style={{animation: "fadeIn2 1s", zIndex: 0, marginTop: "2vh" }}>
                <h1>games</h1>
            </div>

            
        <p style={{zIndex: 2, position: "relative", marginLeft: "15%", marginRight: "15%"}}>
            Under the alias of <b>Lugical</b>, I've been a hobbyist indie game developer since I was 11, 
            garnering over <b>60,000,000+</b> plays and <b>250,000+</b> favorites. Releasing titles such 
            as <i>lugical's besstt gaemes (15M+)</i>, <i>ROBLOX: Endurance (700K+)</i>, and <i>Zombie Task Force (5M+)</i>,
            and being the recipient of Roblox's <b>Inspire Challenge Global Citizenship Award (2024)</b>, I always am on the prowl
            to draft the next grand story.
        </p>

        <i style={{zIndex: 2, position: "relative", marginLeft: "15%", marginRight: "15%"}}>
            For more information, please see my <a href="https://devforum.roblox.com/t/lugicals-development-portfolio/488262/3" rel="noopener noreferrer">game-dev portfolio.</a>
        </i>
        </>
    )}

export default Games;