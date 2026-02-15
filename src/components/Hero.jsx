import React from 'react';
import '../CSS/App.css';
import logo from '../assets/logo.png';

const Hero = () => {
    return (
        <main id="home" className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    Welcome to <br />
                    <span className="brand-text">DayJay-Solutions</span>
                </h1>
                <h2 className="hero-subtitle">Innovating Your Future</h2>
                <p className="hero-description">
                    Transforming ideas into cutting-edge digital solutions with
                    expertise, creativity, and innovation.
                </p>

                <div className="cta-group">
                    <a href="#contact" className="btn btn-primary">Contact</a>
                    <a href="#projects" className="btn btn-secondary">Portfolio</a>
                </div>
            </div>

            <div className="hero-visual">
                <div className="glass-card">
                    <img src={logo} alt="Branding" className="hero-logo-img" />
                </div>
            </div>
        </main>
    );
};

export default Hero;