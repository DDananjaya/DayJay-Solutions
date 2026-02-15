import React from 'react';
import '../CSS/AboutMe.css';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';

const AboutMe = () => {
    return (
        <section id="AboutMe" className="about-section">
            <div className="about-container">
                <div className="about-text-content">
                    <span className="section-tag">About Me</span>
                    <h2 className="about-title">I Build Digital Experiences</h2>
                    <p className="about-bio">
                        I’m Dananjaya a software engineering student currently following the Higher National Diploma in Software Engineering at NIBM. I’m passionate about technology, software development, and building practical digital solutions. I enjoy working on real projects, improving my technical skills, and creating systems that are simple, useful, and effective. Through this website, I share my work, services, and ideas while continuing to grow as a developer.
                    </p>
                    <div className="skills-tags">
                        <span>React</span>
                        <span>Language & core (C#, C, Javascript</span>
                        <span>Front-End Development(HTML, CSS, React)</span>
                        <span>Backend & Database( Node.js, MYSQL, Apache Tomcat,Oracle</span>

                    </div>
                </div>

                <div className="about-visual-orbit">
                    <div className="center-profile">
                        <img src={profileImg} alt="DayJay Profile" className="profile-img" />
                    </div>

                    <div className="orbit">
                        <a href="https://github.com/DDananjaya" className="social-icon icon-1" title="GitHub"><FaGithub /></a>
                        <a href="https://linkedin.com" className="social-icon icon-2" title="LinkedIn"><FaLinkedin /></a>
                        <a href="https://whatsapp.com" className="social-icon icon-3" title="WhatsApp"><FaWhatsapp /></a>
                        <a href="https://instagram.com" className="social-icon icon-4" title="Instagram"><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AboutMe;