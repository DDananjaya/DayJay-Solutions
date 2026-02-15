import React from 'react';
import './CSS/App.css';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
    return (
        <div className="landing-container">

            <nav className="navbar">
                <div className="logo-container">
                    <div className="logo-text">
                        <span className="brand-top">DayJay</span>
                        <span className="brand-bottom">Solutions</span>
                    </div>
                </div>

                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#AboutMe">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
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