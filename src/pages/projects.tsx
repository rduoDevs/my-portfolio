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
         <div style={{zIndex: 1, position: "absolute", top: "2.5vh", left: "50%", transform: "translateX(-50%)", width: "50%"}}>
            <Navbar
                navItems={tabs}>
            </Navbar>
        </div>

           <div style={{animation: "fadeIn2 1s", zIndex: 0, marginTop: "-12vh", position: "relative"}}>
                <h1>projects</h1>
            </div>


            
                <div style={{ display: "flex", marginTop: "-3.5vh", justifyContent: "center"}}>
                    <Carousel
                        images={projectImgs}
                        descs={projectDescs}
                        headers={projectHeaders}
                        techStack={projectStack}
                    />
                </div>
        </>
    )}

export default Projects;