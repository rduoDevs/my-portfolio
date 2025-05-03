import { useState, useEffect } from 'react';
import '../App.css';
import { loadParticles } from '../components/ParticleBackground'
import {configs} from '../components/ParticleBackground'
import { Navbar } from '../components/Navbar';
import { Placard } from '../components/Placard';

function Experience() {
    let tabs = ["home", "about", "experience", "projects", "games"]
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
        <div style={{position: "relative", top: "0vh"}}>
            <Navbar
                navItems={tabs}>
            </Navbar>
            <div style={{zIndex: 0, marginTop: "-7vh"}}>
                <h1>experience</h1>
            </div>
            </div>
            

                <div
                    style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        justifyContent: "center",
                        marginTop: "5vh",
                    }}
                >
                    <div style={{ marginLeft: isMobile ? "0vw" : "3vw" }}>
                        <h2 style={{ display: "flex", alignItems: "left", marginLeft: ".5vw", marginBottom: "0vh" }}>work</h2>
                        <Placard
                            header="Incoming SWE Intern"
                            img="HyAxiom.png"
                            description={["HyAxiom · South Windsor, CT", "June 2025 - Present"]}
                            width={300}
                            height={50}
                        ></Placard>

                        
                        <Placard
                            header="Software Engineer"
                            img="vastro.png"
                            description={["VASTRO (startup) · Providence, RI", "April 2025 - Present"]}
                            width={300}
                            height={50}
                        ></Placard>
                        <Placard
                            header="Technical Instructor"
                            img="iCode.png"
                            description={["iCode · Manchester, CT", "August 2023 - June 2024"]}
                            width={300}
                            height={50}
                        ></Placard>

                        <Placard
                            header="Indie Game Developer"
                            img="Lugical.png"
                            description={["Alias: Lugical · Remote", "August 2017 - Present"]}
                            width={300}
                            height={50}
                        ></Placard>
                    </div>
                    <div style={{ marginLeft: isMobile ? "0vw" : "0vw" }}>
                        <h2 style={{ display: "flex", alignItems: "left", marginLeft: ".5vw", marginBottom: "0vh"  }}>extracurriculars</h2>
                        <Placard
                            header="Director of Tech & Operations"
                            img="busun.png"
                            description={["Brown University Simulation of the UN"]}
                            width={300}
                            height={50}
                        ></Placard>
                        <Placard
                            header="Attitude Control Engineer"
                            img="BSE.png"
                            description={["Brown Space Engineering"]}
                            width={300}
                            height={50}
                        ></Placard>
                        <Placard
                            header="Community Feedback Program"
                            img="roblox.png"
                            description={["Roblox Developer Relations"]}
                            width={300}
                            height={50}
                        ></Placard>
                        {/*}
                        <h2 style={{ display: "flex", alignItems: "left", marginLeft: ".5vw", marginBottom: "0vh" }}>teaching</h2>
                        <Placard
                            header="Teaching Assistant"
                            img="Brown.png"
                            description={["CSCI0190: Accelerated Intro to CS", "May 2025 - Present"]}
                            width={300}
                            height={50}
                        ></Placard>*/}
                    </div>
                </div>
        </>
    )}

export default Experience;