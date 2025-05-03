import '../App.css';
import { Navbar } from '../components/Navbar';

function About() {
    let tabs = ["home","about", "experience", "projects", "games"]
   

    return (
        <>
            <div style={{position: "relative", top: "0vh"}}>
            <Navbar
                navItems={tabs}>
            </Navbar>
            <div style={{zIndex: 0, marginTop: "-7vh"}}>
                <h1>about</h1>
            </div>
            </div>
            <div style={{zIndex: 4,  maxWidth: "60vw", justifyContent: "center"}}>
                <p>
                    Hi! I'm Ryan, a first-generation college student, forever fan of <i>Survivor</i>, and a loyal listener to The Lumineers & Lord Huron. I also go by <i>Lugical</i> online. When I'm not watching Formula 1 or competing in collegiate Model UN, I build <i>tech that inspires</i>,
                    from digital wellness apps recognized by Connecticut's Lieutenant Governor and the Department of Education, to harrowing game-narratives acclaimed by the world's largest gaming platforms.
                </p>
                <p>
                    My journey into tech coincides with my love for video games, cinema, & the outdoors, motivating me to center around one question at the core of my work: <i>"What would it take to build a new world?"</i>
                </p>
                <p>
                    Every book takes you to a new, fictional world. Every movie takes your mind to a new, cinematic universe. 
                    Every game takes your eyes and ears to listen in on the hymns and chimes of a brand-new story, and a brand-new you.
                    With technology in the palm of our hands, today is a time like no other, as <i>world-building is no longer stuck in our minds</i>. The tools to build what we envision exists. It's just a matter of how.
                </p>
                <p>
                    From the emerging innovations in AR/VR/XR, to the intersection of math & art in computer graphics, & even the low-level systems that build it from the ground up, I'm interested in anything and everything that
                    touches upon this idea of world-building. For right now, I'm particularly excited by the realms of visual, systems, & quantum computing.
                </p>
            </div>
        </>
    )}

export default About;