import './ProjectButton.css'
import link from '../assets/link.png'
import github from '../assets/github.png'
interface ProjectButtonProps {
    label: string;
    url: string;
}


export function ProjectButton(props: ProjectButtonProps) {
    const isCode = props.label === "Code";

    return (
        <button
            className={`ProjectButton ${isCode ? "Code" : "Read"}`}
            onClick={() => window.open(props.url)}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0px 0px 6px rgba(0, 0, 0, 0.3)"}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 0px 6px rgba(0, 0, 0, 0.2)"}
        >
            <span className="buttonText">{props.label}</span>
            <img
                className="icon"
                src={isCode ? github : link}
                alt=""
            />
        </button>
    );
}
