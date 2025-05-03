import '../App.css';
import { Navbar } from '../components/Navbar';
import { Carousel } from '../components/Carousel';

const projectImgs: string[] = [
    "bridgeCard.png",
    "CameraServiceCard.png",
    "ClockInCard.png",
    "NeohexCard.png",
    "FluidImagesCard.png",
    "cs300Card.png",
];
const projectDescs: string[] = [
    "An AI-powered, patient-first medical assistant translating patient concerns into clinically-structured, LaTeX-formatted reports. The middleman to alleviate nerves, and mitigate medical bias. Crafted by a team of 4.",
    "One of the most popular open-source libraries enhancing camera motion in Roblox video games, through vector algebra, interpolation, & raycasting. Downloaded by 800+ developers across GitHub & Roblox Marketplace.",
    "A mobile scheduling app for mental wellness, intentionally designed through its UI/UX to have users focus on the day-to-day, rather than worrying over the far future. Natively stores userdata via a custom serializer.",
    "A philosophical, story-driven 3D platformer where players must navigate their way to safety after testing a time-freezing serum...but can time ever be beaten? What happens when time is the enemy? Crafted by a team of 4.",
    "A smart, content-aware image resizer I coded 2 ways (recursive memoization & iterative dynamic programming). It uses seam-carving by analyzing the energy (importance) of various seams (clusters of pixels).",
    "Low-level systems programming, including: Snake in the terminal, dynamic memory allocators, custom I/O caching comparable to stdio's runtime, emulating virtual memory, parallelism, & sharding databases.",
];
const projectHeaders: string[] = [
    "bridge",
    "CameraService",
    "ClockIn!",
    "Neohex",
    "Fluid Images",
    "CS300 Systems Programming",
];
const projectStack: string[] = [
    "Flask · Next.js · LaTeX · Mistral · Python · JavaScript",
    "Lua · Git · Roblox Studio · Rojo",
    "Android API · Java · XML · Android Studio",
    "Lua · Roblox Studio",
    "Pyret (Functional Programming)",
    "C · C++ · Makefile · Git · Docker",
];

{/*
const projectLinks: string[] = [

];
const projectAwards: {[key: number]: string[]} = [
    [],
    [],
    [
        "🥇 1st Place @ CT-01 Congressional App Challenge (2024)",
        "🥇 Winner @ Connecticut Lt. Governor's Computing Challenge (2023)",
        "🥇 National STEM Champion @ EXPLR & Dept. of Education's National STEM Festival (2024)"
    ],
    ["🥇 1st Place for Global Citizenship @ Roblox Inspire Challenge (2024)"],
    [],
    []
];
*/}



function Projects() {
    let tabs = ["home", "about", "experience", "projects", "games"]
   

    return (
        <>
        <div style={{position: "relative", top: "0vh"}}>
            <Navbar
                navItems={tabs}>
            </Navbar>
            <div style={{zIndex: 0, marginTop: "-7vh" }}>
                <h1>projects</h1>
            </div>
        </div>


            
                <div style={{ marginTop: "0vw" }}>
                    <Carousel
                        images={projectImgs}
                        descs={projectDescs}
                        headers={projectHeaders}
                        techStack={projectStack}
                    />

{/*}
                    <div style={{ marginLeft: "3vw" }}>
                        
                        <Card
                            header="bridge"
                            img="bridgeCard.png"
                            description={["AI-powered medical translator.", "February 2025"]}
                            width={500}
                            height={250}>
                        </Card>
                        <Card
                            header="CameraService"
                            img="CameraServiceCard.png"
                            description={["Open-sourced Roblox camera enhancer.", "August 2022 - Present"]}
                            width={500}
                            height={250}>
                        </Card>
                        
                        <Card
                            header="Neohex"
                            img="NeohexCard.png"
                            description={["iCode · Manchester, CT", "August 2024"]}
                            width={500}
                            height={250}>
                        </Card>
                        <Card
                            header="ClockIn!"
                            img="ClockInCard.png"
                            description={["Wellness-based scheduling app.", "April 2023"]}
                            width={500}
                            height={250}>
                        </Card>
                        
                        <Card
                            header="Fluid Images"
                            img="FluidImagesCard.png"
                            description={["Smart image cropping w/seam-carving", "November 2024"]}
                            width={500}
                            height={250}>
                        </Card>
                         
                        <Card
                            header="CS300 Systems Projects"
                            img="cs300Card.png"
                            description={["Alias: Lugical · Remote", "May 2025"]}
                            width={500}
                            height={250}>
                        </Card>
                       
                       
                    </div> */}
                </div>
        </>
    )}

export default Projects;