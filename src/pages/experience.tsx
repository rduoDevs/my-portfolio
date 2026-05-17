import { useState, useEffect } from 'react';
import '../App.css';
import { Placard } from '../components/Placard';
import robloxImg from '../assets/roblox.jpg';
import bvc2Img from '../assets/BVC2.jpg';
import hyaxiomImg from '../assets/HyAxiom.png';
import icodeImg from '../assets/iCode.png';
import busunImg from '../assets/busun.png';
import bseImg from '../assets/BSE.png';
import lugicalImg from '../assets/Lugical.png';
import comparchImg from '../assets/comparch.png';
import dsaImg from '../assets/dsa.png';

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

           <div style={{animation: "fadeIn2 1s", zIndex: 0, marginLeft: 'auto', marginRight: 'auto', marginTop: "20vh", marginBottom: "5vh"}} className="title">
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
                            header="Software Engineer Intern"
                            img={robloxImg}
                            description={["Roblox · San Mateo, CA", "Summer 2026"]}
                            width={330}
                            height={55}
                        ></Placard>
                        <Placard
                            header="Research Assistant"
                            img={bvc2Img}
                            description={["Brown IVL · Providence, RI", "January 2026 - Present"]}
                            width={330}
                            height={55}
                        ></Placard>

                        <Placard
                            header="Software Engineer Intern"
                            img={hyaxiomImg}
                            description={["HyAxiom · East Hartford, CT", "Summer 2025"]}
                            width={330}
                            height={55}
                        ></Placard>


                        <Placard
                            header="Technical Instructor"
                            img={icodeImg}
                            description={["iCode · Manchester, CT", "August 2023 - June 2024"]}
                            width={330}
                            height={55}
                        ></Placard>

                        
                    </div>
                    <div style={{ marginLeft: isMobile ? "0vw" : "0vw" }}>
                        <h2 style={{ display: "flex", alignItems: "left", marginLeft: ".5vw", marginBottom: "0vh"  }}>extracurriculars</h2>
                        <Placard
                            header="Secretary-General"
                            img={busunImg}
                            description={["Brown Model United Nations"]}
                            width={330}
                            height={55}
                        ></Placard>
                        <Placard
                            header="Attitude Control Engineer"
                            img={bseImg}
                            description={["Brown Space Engineering"]}
                            width={330}
                            height={55}
                        ></Placard>
                        <Placard
                            header="Indie Game Developer"
                            img={lugicalImg}
                            description={["60M+ plays & counting."]}
                            width={330}
                            height={55}
                        ></Placard>
                        
                        <h2 style={{ display: "flex", alignItems: "left", marginLeft: ".5vw", marginBottom: "0vh" }}>teaching</h2>
                        <Placard
                            header="Computer Architecture"
                            img={comparchImg}
                            description={["CSCI1952Y: UTA", "Spring 2026 @ Brown"]}
                            width={330}
                            height={55}
                        ></Placard>
                        <Placard
                            header="Accelerated Intro to CS"
                            img={dsaImg}
                            description={["CSCI0190: UTA-STA", "Fall 2025 @ Brown"]}
                            width={330}
                            height={55}
                        ></Placard>
                        
                    </div>
                </div>
        </>
    )}

export default Experience;