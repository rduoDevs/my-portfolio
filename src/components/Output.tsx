import {useState} from "react";
import caret from "../assets/caret.png";
import './Output.css'
interface OutputInfo {
    imgs: string[];
    vids: string[];
}



export function Output(items: OutputInfo) {
    const [visible, setIsVisible] = useState(false);
    return (
        <>
            <div>
                <button className='outputButton' 
                onClick={() => setIsVisible(!visible)}
                >
                    <span className='outputText'>{!visible ? "See Results" : "Hide Results"}</span>
                    <img style={{height: 15, marginTop: -5}} src={caret}></img>
                </button>

    {visible && 
        <div>
            {items.vids.map((src, i) => (
            <video
              key={`vid-${i}`}
              controls
              playsInline
              preload="metadata"
              style={{ width: "98%", marginTop: 10, borderRadius: 8 }}
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        {items.imgs.map((imgSrc, index) => (
            <img key={index} src={imgSrc} style={{width: "100%", marginTop: "10px", borderRadius: "8px"}}></img>
        ))}
        
        </div>
    }
            </div>
        </>
    )

}