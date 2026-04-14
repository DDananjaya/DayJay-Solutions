import React from 'react';
import '../CSS/AboutMe.css';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';

/* Social icons defined OUTSIDE the rotating orbit div.
   Each one gets its own CSS animation that moves it around
   the circle — so the click area always matches what you see. */
const socialLinks = [
    {
        icon: <FaGithub />,
        href: 'https://github.com/DDananjaya',
        label: 'GitHub',
        cls: 'orbit-icon orbit-icon--1',
    },
    {
        icon: <FaLinkedin />,
        href: 'https://www.linkedin.com/in/dileeshapa-dananjaya-869747363/',
        label: 'LinkedIn',
        cls: 'orbit-icon orbit-icon--2',
    },
    {
        icon: <FaWhatsapp />,
        href: 'https://api.whatsapp.com/send/?phone=94769054008&text&type=phone_number&app_absent=0',
        label: 'WhatsApp',
        cls: 'orbit-icon orbit-icon--3',
    },
    {
        icon: <FaInstagram />,
        href: 'https://www.instagram.com/',
        label: 'Instagram',
        cls: 'orbit-icon orbit-icon--4',
    },
];

const AboutMe = () => {
    return (
        <section id="AboutMe" className="about-section">
            <div className="about-container">
                {/* ── Text Side ── */}
                <div className="about-text-content">
                    <span className="section-tag">About Me</span>
                    <h2 className="about-title">I Build Digital Experiences</h2>
                    <p className="about-bio">
                        I'm Dananjaya a software engineering student currently following the
                        Higher National Diploma in Software Engineering at NIBM. I'm passionate
                        about technology, software development, and building practical digital
                        solutions. I enjoy working on real projects, improving my technical
                        skills, and creating systems that are simple, useful, and effective.
                        Through this website, I share my work, services, and ideas while
                        continuing to grow as a developer.
                    </p>
                    <div className="skills-tags">
                        <span>React</span>
                        <span>C# &amp; C &amp; JavaScript</span>
                        <span>HTML / CSS / React</span>
                        <span>Node.js · MySQL · Oracle</span>
                    </div>
                </div>

                {/* ── Orbit Visual Side ── */}
                <div className="about-visual-orbit">
                    {/* Static dashed ring (no rotation — purely decorative) */}
                    <div className="orbit-ring" />

                    {/* Center Profile */}
                    <div className="center-profile">
                        <img src={profileImg} alt="Dananjaya Profile" className="profile-img" />
                    </div>

                    {/* Social icons — each one has its own circular path animation.
                        Click area always matches visual position. */}
                    {socialLinks.map(({ icon, href, label, cls }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cls}
                            title={label}
                            aria-label={label}
                        >
                            {icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutMe;