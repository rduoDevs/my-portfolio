import "../App.css";

interface placardInfo {
    header: string;
    img: string;
    description: string[];
    width: number;
    height: number;
}

export function Placard(items: placardInfo) {
    let imgSrc = new URL(`../assets/${items.img}`, import.meta.url).href;
    return (
        <div style={{ width: items.width, height: items.height, 
        zIndex: 4, position: "relative", 
        padding: "1vh", display: "flex", alignItems: "center" }}>
            <img src={imgSrc} className="rounded" style={{ width: items.height, height: items.height, marginRight: "10px" }} />
            <div >
                <h4 style={{marginBottom: "-2.2vh", 
                    display: "flex", alignItems: "center", position: "relative",
                    marginTop: "-3vh"}}>{items.header}</h4>
                {items.description.map((str, _) => (
                    <p style={{display: "flex", alignItems: "left", fontSize: "12px", marginBottom: "-16px"}}>
                        {str}
                    </p>
                ))}
            </div>
        </div>
    )
}