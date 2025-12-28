import '../App.css';
import './home.css'

function Games() {
    return (
        <>


           <div style={{animation: "fadeIn2 1s", zIndex: 0, marginLeft: 'auto', marginRight: 'auto', marginTop: "20vh", marginBottom: '2vh' }}>
                <h1>games</h1>
            </div>

            <div style={{marginLeft: "20%", width: "60%", zIndex: 2, position: "relative"}}>
        <span className='homebody' >
            under the alias of <b>Lugical</b>, i've been a hobbyist indie game developer since I was 11, 
            garnering over <b>60,000,000+</b> plays and <b>250,000+</b> favorites. i've also written numerous game-dev tutorials, read by more than <b>60,000+</b> developers.
            <br></br><br></br>
            in addition to releasing titles such 
            as <i>lugical's besstt gaemes (25M+)</i>, <i>ROBLOX: Endurance (700K+)</i> and <i>Zombie Task Force (5M+)</i>,
            and being the recipient of Roblox's <b>🏅 Inspire Challenge Global Citizenship Award (2024)</b>, i hope to make a standalone website for my games in the future. 
            
            in the meantime, you can learn more at my 📜 <a href="https://devforum.roblox.com/t/lugicals-development-portfolio/488262/3" rel="noopener noreferrer">game-dev portfolio.</a>
        </span>
        </div>
        </>
    )}

export default Games;