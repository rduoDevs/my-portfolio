import "../App.css";

interface placardInfo {
    header: string;
    img: string;
    description: string[];
    width: number;
    height: number;
}

export function Card(items: placardInfo) {
    let imgSrc = new URL(`../assets/${items.img}`, import.meta.url).href;
    return (
        <div style={{ width: items.width, height: items.height, 
        zIndex: 4, position: "relative", 
        padding: "1vh", display: "flex", alignItems: "center" }}>
            <img src={imgSrc} className="rounded-card" style={{ width: items.width, height: items.height, marginRight: "10px" }} />
            <div >
                <h4 style={{marginBottom: "-2.2vh", 
                    display: "flex", alignItems: "center", position: "relative",
                    marginTop: "-3vh"}}>{items.header}</h4>
                {items.description.map((str, _) => (
                    <p style={{display: "flex", alignItems: "center", fontSize: "0.75rem", marginBottom: "-2.3vh"}}>
                        {str}
                    </p>
                ))}
            </div>
        </div>
    )
}