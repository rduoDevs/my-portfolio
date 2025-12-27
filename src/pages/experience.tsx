import { useState, useEffect } from 'react';
import '../App.css';
import { Placard } from '../components/Placard';

function Experience() {
    
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

           <div style={{animation: "fadeIn2 1s", zIndex: 0, marginTop: "20vh", marginBottom: "5vh"}} className="title">
                <h1>experience</h1>
                
            </div>
            

                <div
                    style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        justifyContent: "center",
                        marginTop: "-3.5vh",
                    }}
                >
                    <div style={{ marginLeft: isMobile ? "0vw" : "3vw" }}>
                        <h2 style={{ display: "flex", alignItems: "left", marginLeft: ".5vw", marginBottom: "0vh" }}>work</h2>
                        <Placard
                            header="Incoming Research Assistant"
                            img="BVC2.jpg"
                            description={["Brown IVL · Providence, RI", "December 2025 - Present"]}
                            width={330}
                            height={55}
                        ></Placard>
                        
                        <Placard
                            header="Software Engineer Intern"
                            img="HyAxiom.png"
                            description={["HyAxiom · East Hartford, CT", "June 2025 - August 2025"]}
                            width={330}
                            height={55}
                        ></Placard>

                        
                        <Placard
                            header="Technical Instructor"
                            img="iCode.png"
                            description={["iCode · Manchester, CT", "August 2023 - June 2024"]}
                            width={330}
                            height={55}
                        ></Placard>

                        <Placard
                            header="Indie Game Developer"
                            img="Lugical.png"
                            description={["Alias: Lugical · Remote", "August 2017 - Present"]}
                            width={330}
                            height={55}
                        ></Placard>
                    </div>
                    <div style={{ marginLeft: isMobile ? "0vw" : "0vw" }}>
                        <h2 style={{ display: "flex", alignItems: "left", marginLeft: ".5vw", marginBottom: "0vh"  }}>extracurriculars</h2>
                        <Placard
                            header="Secretary-General"
                            img="busun.png"
                            description={["Brown Model United Nations"]}
                            width={330}
                            height={55}
                        ></Placard>
                        <Placard
                            header="Attitude Control Engineer"
                            img="BSE.png"
                            description={["Brown Space Engineering"]}
                            width={330}
                            height={55}
                        ></Placard>
                        <Placard
                            header="Community Feedback Program"
                            img="roblox.png"
                            description={["Roblox Developer Relations"]}
                            width={330}
                            height={55}
                        ></Placard>
                        
                        <h2 style={{ display: "flex", alignItems: "left", marginLeft: ".5vw", marginBottom: "0vh" }}>teaching</h2>
                        <Placard
                            header="Computer Architecture"
                            img="comparch.png"
                            description={["CSCI1952Y: UTA", "Spring 2026 @ Brown"]}
                            width={330}
                            height={55}
                        ></Placard>
                        <Placard
                            header="Accelerated Intro to CS"
                            img="dsa.png"
                            description={["CSCI0190: UTA-STA", "Fall 2025 @ Brown"]}
                            width={330}
                            height={55}
                        ></Placard>
                        
                    </div>
                </div>
        </>
    )}

export default Experience;