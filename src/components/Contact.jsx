import React from 'react';
import '../CSS/Contact.css';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    const email = "dileeshapadananjaya@gmail.com";

    const subject = "Inquiry from website";

    const body =
        "Hi Dileesha,\n\n" +
        "I'd like to get in touch about your services.\n\n" +
        "Name: \n" +
        "Phone: \n" +
        "Message: \n\n" +
        "Thanks!";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const phoneLocal = "0769054008";
    const phoneIntl = "+94769054008";
    const whatsappLink = "https://wa.me/94769054008";

    const linkedin = "https://www.linkedin.com/in/dileeshapa-dananjaya-869747363/";
    const instagram = "https://www.instagram.com/itzzdana_68?igsh=aDFoc3lheTNxcm9j&utm_source=qr";
    const github = "https://github.com/DDananjaya";

    return (
        <footer id="contact" className="contact-section">
            <div className="contact-header">
                <div className="contact-brand">
                    <span>DAYJAY</span> <span className="brand-thin">SOLUTIONS</span>
                </div>

                <div className="header-line"></div>

                <div className="social-icons">
                    <a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                        <FaTwitter />
                    </a>
                    <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                </div>
            </div>

            <div className="contact-grid">
                <div className="footer-col">
                    <h4>QUICK LINKS</h4>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#AboutMe">About Me</a></li>
                        <li><a href="#projects">Portfolio</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>CONTACT INFO</h4>
                    <ul className="footer-links">
                        {/* ✅ Correct: opens mail app */}
                        <li>
                            <a href={`mailto:${email}`} aria-label={`Email ${email}`}>
                                {email}
                            </a>
                        </li>

                        <li>
                            <a href={linkedin} target="_blank" rel="noreferrer">
                                LinkedIn Profile
                            </a>
                        </li>

                        <li>
                            <a href={github} target="_blank" rel="noreferrer">
                                GitHub Repos
                            </a>
                        </li>

                        <li>
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                Chat on WhatsApp
                            </a>
                        </li>

                        {/* ✅ Optional: also show clickable phone */}
                        <li>
                            <a href={`tel:${phoneIntl}`}>
                                Call: {phoneLocal}
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-col cta-col">
                    <h4 className="serif-title">LET&apos;S COLLABORATE</h4>
                    <p>
                        Have a project in mind or just want to chat about tech?
                        I&apos;m currently open to new opportunities and freelance work.
                        Contact me{" "}
                        <a href={`tel:${phoneIntl}`} className="phone-link">
                            {phoneLocal}
                        </a>
                    </p>

                    {/* ✅ Your GET IN TOUCH button with prefilled message */}
                    <a
                        href={mailtoLink}
                        className="footer-btn"
                        aria-label={`Email Dileeshapa at ${email}`}
                    >
                        GET IN TOUCH
                    </a>
                </div>
            </div>

            <div className="copyright">
                <p>&copy; 2026 DayJay-Solutions. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Contact;
