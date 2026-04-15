import '../App.css';

function About() {
   

    return (
        <>

            <div style={{position: "relative", zIndex: 1,  
                maxWidth: "100%", 
                paddingLeft: (window.innerWidth < 600) ? "1%": "20%", 
                marginTop: "3.5vh",
                paddingRight: (window.innerWidth < 600) ? "1%": "20%", justifyContent: "center"}}>
                <p className="homebody">
                    thanks for stopping by! i'm a first-gen college kid & hobbyist game dev,
                   where my <b>🧠 big interests</b> lie in computer graphics, systems, & quantum computing. recently, i've begun researching <b>👀 world models + robotic manipulation</b> at brown & started work on my <b>🎮 next game</b>, <i>Gloryborn</i>. 
                    
                    
                </p>
              
            </div>
        </>
    )}

export default About;