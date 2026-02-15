
import React from 'react';
import '../CSS/Projects.css';
import { FaDumbbell, FaChair, FaNetworkWired, FaHospital, FaPlus, FaGithub } from 'react-icons/fa';

const projectData = [
    { title: "Gym PR System", icon: <FaDumbbell />, link: "https://github.com/DDananjaya/gym-pr-system", color: "#a3b8d7" },
    { title: "PK Furniture EAD", icon: <FaChair />, link: "https://github.com/DDananjaya/PK-Furniture-EAD-", color: "#bce3d4" },
    { title: "Euro Call Redesign", icon: <FaNetworkWired />, link: "https://github.com/DDananjaya/Euro-call-Network-Redesign", color: "#f3b9bd" },
    { title: "Hospital Management", icon: <FaHospital />, link: "https://github.com/DDananjaya/HospitalManagementSystem", color: "#ebd0db" },
    { title: "Next Big Idea", icon: <FaPlus />, link: "#", color: "transparent", isEmpty: true },
    { title: "Future Project", icon: <FaPlus />, link: "#", color: "transparent", isEmpty: true }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <div className="projects-header">
                    <span className="section-tag">Portfolio</span>
                    <h2 className="projects-title">Selected Projects</h2>
                </div>

                <div className="projects-grid">
                    {projectData.map((project, index) => (
                        <div className={`project-glass-card ${project.isEmpty ? 'empty-card' : ''}`} key={index} style={{ '--accent': project.color }}>
                            <div className="project-icon-wrapper">{project.icon}</div>
                            <h3 className="project-name">{project.title}</h3>
                            {!project.isEmpty && (
                                <a href={project.link} target="_blank" rel="noreferrer" className="github-btn">
                                    <FaGithub /> View Code
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Projects;