import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

interface NavbarProps {
    navItems: string[];
}

export function Navbar({navItems}: NavbarProps) {
    const [i, seti] = useState(-1);

    return (
        <nav>
            {/* Navbar sandwich button */}

                
                        {/* Tabs on the Navbar */}
                        <div style={{ 
                            position: "relative", 
                            display: "flex", 
                            justifyContent: "flex-end", 
                            left: "0", 
                            bottom: "2vh", 
                            zIndex: 4, 
                            flexWrap: "nowrap", /* Ensure items stay on one row */
                            padding: "10px" 
                        }}>

                            <ul className="navbar-nav" style={{ 
                                display: "flex", 
                                listStyle: "none", 
                                padding: 0, 
                                flexDirection: "row", 
                                flexWrap: "nowrap", /* Ensure items stay on one row */
                                justifyContent: "center", 
                                width: "100%" 
                            }}>
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className="nav-item"
                            style={{ 
                                margin: "0px 6px", 
                                cursor: "pointer", 
                                textAlign: "center", 
                                animation: (navItems.length == 4) ? "fadeIn2 4s" : "",
                            }}
                            onClick={() => seti(index)}
                        >
                            <Link
                                className={`nav-link ${i === index ? "active" : ""}`}
                                to={item === "home" ? "/" : `/${item}`}
                                style={{
                                    color: "#ff986b",
                                    transition: "color .25s",
                                    fontSize: "1rem",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#a75a27")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "#ff986b")}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
                            
        </nav>
    )
}