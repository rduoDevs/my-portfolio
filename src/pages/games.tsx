import '../App.css';
import { Navbar } from '../components/Navbar';

function Games() {
    let tabs = ["home", "about", "experience", "projects", "games"]   

    return (
        <>
        <div style={{position: "relative", top: "0vh"}}>
            <Navbar
                navItems={tabs}>
            </Navbar>
            <div style={{zIndex: 0, marginTop: "-7vh" }}>
                <h1>games</h1>
            </div>
        </div>
        <p style={{marginLeft: "15%", marginRight: "15%"}}>I learned to code through my time on Roblox, and through that, making video games! I go by the alias <b>Lugical</b>, and have worked on numerous projects, ranging from comedic simulators, to party games, MMORPGs, and more. More info about my past projects and endeavors as a game-dev are coming soon!</p>
        </>
    )}

export default Games;