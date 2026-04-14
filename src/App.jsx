import React, { useState } from 'react';
import './CSS/App.css';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { FaBars, FaTimes } from 'react-icons/fa';


function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="landing-container">

            <nav className="navbar">
                <div className="logo-container">
                    <div className="logo-text">
                        <span className="brand-top">DayJay</span>
                        <span className="brand-bottom">Solutions</span>
                    </div>
                </div>

                <div className="mobile-menu-icon" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#AboutMe" onClick={closeMenu}>About</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
            </nav>
            <Hero />
            <AboutMe />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;