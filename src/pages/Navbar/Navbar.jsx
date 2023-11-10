import React, {useState} from 'react';
// import styles from './Navbar.module.css';
import {getImageUrl} from "../../utils";
import { Link } from "react-router-dom";

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
                <ul className={`menuItems ${menuOpen && styles.menuOpen}` }
                onClick={() => setMenuOpen(false)}>
                {/* <ul className={`menuItems ${menuOpen ? styles.menuOpen : ''}`} onClick={() => setMenuOpen(false)}> */}

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