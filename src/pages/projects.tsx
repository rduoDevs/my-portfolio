import '../App.css';
import "./projects.css"
import { ProjectButton } from '../components/ProjectButton';
import dexterVid from "../assets/DexterJuice.mp4";
import dexterJuice from "../assets/DexterPlate.mp4";
import dexterPerson from "../assets/DexterPerson.mp4";
import cam1 from "../assets/CamSer2.mp4";
import cam2 from "../assets/CamSer3.mp4";
import cam3 from "../assets/CamSer1.mp4";
import weensy from '../assets/weens.mp4';
import snake from '../assets/Snake.mp4';
import ray1 from '../assets/raypp1.png';
import ray2 from '../assets/raypp2.png';
import ray3 from '../assets/raypp0.png';
import ray4 from '../assets/raypp3.png';
import ray5 from '../assets/raypp4.png';
import ray6 from '../assets/raypp5.png';
import crystal1 from '../assets/crystal1.mp4';
import crystal2 from '../assets/crystal2.mp4';
import crystal3 from '../assets/crystal3.png';
import crystal4 from '../assets/crystal4.png';
import crystal5 from '../assets/crystal5.png';
import hm1 from '../assets/hailmary1.jpg';
import hm2 from '../assets/HailMary3.jpg';
import hm3 from '../assets/reportpic1.png';
import { Output } from '../components/Output';

function Projects() {
    return (
        <>
        

           <div style={{animation: "fadeIn2 1s", zIndex: 0, marginLeft: 'auto', marginRight: 'auto', marginTop: "20vh", marginBottom: "5vh", position: "relative"}}>
                <h1>projects</h1>
                
            </div>

            <div  className='projectcard'>
                <span style={{color: "black"}}>
                <h2 style={{marginBottom: "-7px"}}>The Hail Mary Protocol</h2>
                <i style={{fontSize: 14}}>Node.js · React · Pixi.js · Socket.io · Matplotlib · Cerebras · Llama 3.1</i>
                <p>
                    Space survival game that's also a <b>high-pressure simulation environment for LLM agents</b>, testing AI safety. Studied the psychology of the agent, got misalignment to tank success, & wrote it up in a 4-person report.
                </p>
                </span>
                <div className='projectdetails'>
                    <ProjectButton label='Read Report' url='src/assets/report.pdf'/>
                    <ProjectButton label='Code' url='https://github.com/rduoDevs/hail-mary-protocol'/>
                    <ProjectButton label='Read Devpost' url='https://devpost.com/software/hail-mary-protocol?ref_content=user-portfolio&ref_feature=in_progress'/>
                    
                </div>
           <Output imgs={[hm1,hm2,hm3]} vids={[]}></Output>
            </div>

            <div className='projectcard'>
                <span style={{color: "black"}}>
                <h2 style={{marginBottom: "-7px"}}>DEXTER</h2>
                <i style={{fontSize: 14}}>TypeScript · MentraOS · NumPy · PyTorch · Supabase · Railway</i>
                
                
                <p>
                    High-fidelity <b>3D environmental reconstruction</b> software. Feeds image scans from <b>voice-activated</b> camera capture on smart glasses into fine-tuned VGGT & Segment Anything <b>neural networks</b>.
                    <h4 style={{marginBottom: "-10px"}}>🏆 HackMIT 2025 2nd Place Winner (Mentra Challenge)</h4>
                </p>
                </span>
                <div className='projectdetails'>
                    <ProjectButton label='Read More' url='https://plume.hackmit.org/project/ugfun-gvyux-bbxmw-kdmvi'/>
                    <ProjectButton label='Code' url='https://github.com/Timothy2105/dexter/'/>
                </div>
                <Output imgs={[]} vids={[dexterVid, dexterJuice, dexterPerson]}></Output>
                
            </div>

            <div  className='projectcard'>
                <span style={{color: "black"}}>
                <h2 style={{marginBottom: "-7px"}}>CameraService</h2>
                <i style={{fontSize: 14}}>Lua · Rojo</i>
                <p>
                    The most popular <b>open-sourced</b> library for customizable, smooth camera motion not natively supported ipushn Roblox video games. Trusted by <b>1000+ developers</b> across GitHub & Roblox Marketplace.
                </p>
                </span>
                <div className='projectdetails'>
                    <ProjectButton label='Demo' url='https://devforum.roblox.com/t/cameraservice-a-new-camera-for-a-new-roblox/1988655'/>
                    <ProjectButton label='Code' url='https://github.com/rduoDevs/CameraService'/>
                </div>
                <Output imgs={[]} vids={[cam1, cam2, cam3]}></Output>
            </div>

            <div  className='projectcard'>
                <span style={{color: "black"}}>
                <h2 style={{marginBottom: "-7px"}}>Crystals</h2>
                <i style={{fontSize: 14}}>C++ · GLM</i>
                <p>
                    CPU-based <b>pathtracing</b> pipeline built on <b>spectral rendering</b>, combined with volume raymarching, object-bounded volumetrics, area lighting, and procedural scene generation for renders.
                </p>
                </span>
                <div className='projectdetails'>
                    <ProjectButton label='Demo' url='https://www.youtube.com/watch?v=lgO3lt5_VoU'/>
                    <ProjectButton label='Code' url='https://github.com/JHeflinger/Crystals'/>
                </div>
                <Output imgs={[crystal5, crystal3, crystal4]} vids={[crystal2, crystal1]}></Output>
            </div>

            <div  className='projectcard'>
                <span style={{color: "black"}}>
                <h2 style={{marginBottom: "-7px"}}>Ray++</h2>
                <i style={{fontSize: 14}}>C++ · GLM · Qt</i>
                <p>
                    My toy <b>raytracer</b> written from scratch in C++. Features include multithreading, volume rendering, soft shadows, reflections, antialiasing, mipmap filters, UV textures, & more.
                </p>
                </span>
                <Output imgs={[ray1, ray2, ray3, ray6, ray4, ray5]} vids={[]}></Output>
            </div>

            

            <div className='projectcard'>
                <span style={{color: "black"}}>
                    <h2 style={{marginBottom: "-7px"}}>WeensyOS</h2>
                    <i style={{fontSize: 14}}>C++ · QEMU · Docker</i>
                    <p>
                        OS kernel programming emulating <b>3MB of virtual memory</b> on top of 2MB of physical memory, with <b>process isolation</b>, shared read-only memory access, alongside <b>custom syscalls</b> for fork() & exit().
                    </p>
                </span>
                <Output imgs={[]} vids={[weensy]}></Output>
            </div>

            <div className="projectcard">
                <span style={{color: "black"}}>
                    <h2 style={{marginBottom: "-7px"}}>Command Line Snake</h2>
                    <i style={{fontSize: 14}}>C · Makefile</i>
                    <p>
                        Your favorite game to time-waste in class, now on the <b>terminal</b>.
                    </p>
                </span>
                <Output imgs={[]} vids={[snake]}></Output>
            </div>

        </>
    )}

export default Projects;