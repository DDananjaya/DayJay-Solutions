import React, { useEffect, useState } from 'react';
import '../CSS/App.css';
import '../CSS/Intro.css';
import logo from '../assets/logo.png';

const Hero = () => {
    const [introVisible, setIntroVisible] = useState(true);
    const [introFading, setIntroFading] = useState(false);

    useEffect(() => {
        // Start fade-out after 2.6s, remove from DOM after 3.4s
        const fadeTimer = setTimeout(() => setIntroFading(true), 2600);
        const removeTimer = setTimeout(() => setIntroVisible(false), 3400);
        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    return (
        <>
            {/* ── Intro Splash ── */}
            {introVisible && (
                <div className={`intro-overlay ${introFading ? 'intro-fade-out' : ''}`}>
                    <div className="intro-content">
                        <img src={logo} alt="DayJay Solutions" className="intro-logo" />
                        <div className="intro-text">
                            <span className="intro-welcome">Welcome to</span>
                            <span className="intro-brand">DayJay-Solutions</span>
                        </div>
                        <div className="intro-bar">
                            <div className="intro-bar-fill" />
                        </div>
                    </div>
                </div>
            )}

            {/* ── Hero Section ── */}
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
        </>
    );
};

export default Hero;