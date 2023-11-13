import React, {useState} from 'react';
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return  (
        <nav className="navbar">
            <a className="navbar--title" href="/">Portfolio</a>
            <div className="menu">
                <img className="menuBtn" src={
                                                menuOpen 
                                                    ? getImageUrl("nav/closeIcon.png")
                                                    : getImageUrl("nav/menuIcon.png")
                                                } 
                                                    alt="menu-button" 
                                                    onClick={() => setMenuOpen(!menuOpen)}
                                                    />
                {/* <ul className={`menuItems ${menuOpen && menu-Open}` } */}
                <ul className={`menuItems ${menuOpen ? "menu-Open" : ""}`}

                onClick={() => setMenuOpen(false)}>

                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        
    );
};