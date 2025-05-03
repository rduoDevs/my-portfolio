import React, {useState} from 'react';

interface CarouselProps {
    images: string[];
    descs: string[];
    headers: string[];
    techStack: string[];
}

const CarouselStyles: { [key: string]: React.CSSProperties} = {
    carousel: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        zIndex: 3,
    },
    imageContainer: {
        width: "50%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0.5rem",
        boxShadow: "0 0px 30px hsl(13, 81.80%, 23.70%)",
    },
    textContainer: {
        animation: "fadeIn .5s",
    },
    button: {
        animation: "fadeIn .5s",
        backgroundColor: "transparent",
        border: "none",
        color: "#ffffff",
        fontSize: "2.5rem",
        cursor: "pointer",
        zIndex: 1,
        transition: "color .25s",
        outline: "none",
        WebkitTapHighlightColor: "transparent",
    }
};

const fadeIn = `
@keyframes fadeIn {
    from {
        opacity: 0.01;
    }
    to {
        opacity: 1;
    }
}
`;

if (typeof document !== "undefined") {
    const style = document.createElement("style");
    style.textContent = fadeIn;
    document.head.appendChild(style);
}


export function Carousel({ images, descs, headers, techStack }: CarouselProps) {
    const [index, setIndex] = useState(1);
    
    const goBack = () => {
        setIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    };

    const goForward = () => {
        setIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    };

    let imgSrc = new URL(`../assets/${images[index]}`, import.meta.url).href;
    return (
        <>
        <div style={{display: "flex", flexDirection: "column", position: "relative", top: "0vh", zIndex: 3, marginTop: "5vh"}}>
        <div style={CarouselStyles.carousel}>
            <button
            onMouseEnter={(e) => (e.currentTarget.style.color = "#a75a27")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                onClick={() => {
                    goBack();
                    const imgElement = document.querySelector("img");
                    if (imgElement) {
                        imgElement.style.animation = "none";
                        void imgElement.offsetWidth; // Trigger reflow
                        imgElement.style.animation = "fadeIn .5s";
                    }
                }}
                style={CarouselStyles.button}
            >
                <b>⟨</b>
            </button>
            <img
                src={imgSrc}
                style={{
                    maxWidth: "35%",
                    maxHeight: "20%",
                    animation: "fadeIn .5s",
                    ...CarouselStyles.imageContainer,
                }}
            />

            <button
                onMouseEnter={(e) => (e.currentTarget.style.color = "#a75a27")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                onClick={() => {
                    goForward();
                    const imgElement = document.querySelector("img");
                    if (imgElement) {
                        imgElement.style.animation = "none";
                        void imgElement.offsetWidth; // Trigger reflow
                        imgElement.style.animation = "fadeIn .5s";
                    }
                }}
                style={CarouselStyles.button}
            >
                <b>⟩</b>
            </button>
        </div>
        <div style={{
            marginTop: "-2vh", 
            width: "70%", 
            height: "100%", 
            marginLeft: "15%", 
            marginRight: "15%", 
            textAlign: "center", 
            marginBottom: "-4vh",
            animation: "fadeIn .5s"
        }}>
            <h2 style={{marginBottom: "-.8vh", animation: "fadeIn .5s"}}>{headers[index]}</h2>
            <i style={{fontSize: ".8em", marginBottom: "8vh", animation: "fadeIn .5s"}}>{techStack[index]}</i>
            <p style={{marginTop: "0.8vh", animation: "fadeIn .5s"}}>{descs[index]}</p>
        </div>
        </div>
        </>
    )

}