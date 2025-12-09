import '../App.css';
import { Navbar } from '../components/Navbar';

function About() {
    let tabs = ["home","about", "experience", "projects", "games"]
   

    return (
        <>
            <div style={{zIndex: 1, position: "absolute", top: "2.5vh", left: "50%", transform: "translateX(-50%)", width: "50%"}}>
            <Navbar
                navItems={tabs}>
            </Navbar>
        </div>

        <div style={{animation: "fadeIn2 1s", zIndex: 0, marginTop: "2vh" }}>
                <h1>about</h1>
            </div>
            <div style={{position: "relative", zIndex: 1,  
                maxWidth: "100%", 
                paddingLeft: (window.innerWidth < 600) ? "1%": "15%", 
                marginTop: "-3.5vh",
                paddingRight: (window.innerWidth < 600) ? "1%": "15%", justifyContent: "center"}}>
                <p>
                    Hi! I'm Ryan, a first-generation college student. I build <i>tech that inspires</i>,
                    from digital wellness apps recognized by Connecticut's Lieutenant Governor & the Department of Education, to harrowing game-narratives acclaimed by the world's largest gaming platforms.
                </p>
                <p>
                    My journey into tech coincides with my love for video games, cinema, & the outdoors, motivating me to center my work around one question: <i>"What would it take to build a new world?"</i>
                </p>
              
                <p>
                    From the emerging innovations in extended reality (XR), to computer graphics, & the low-level systems behind-the-scenes, I'm interested in anything that
                    touches upon the idea of world-building. Currently, I'm particularly excited by the realms of visual, systems, & quantum computing.
                </p>
            </div>
        </>
    )}

export default About;