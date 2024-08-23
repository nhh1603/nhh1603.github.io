import React from 'react';
import { FaRegFolder } from 'react-icons/fa';
import { FiGithub, FiExternalLink } from "react-icons/fi";
import projectsData from '../../assets/descriptions/projects.json';

import './ProjectsPage.css';
import SectionDivider from '../../components/SectionDivider/SectionDivider';

const ProjectCard = ({ title, description, technologies, githubLink, externalLink }) => {
    return (
        <div className="project-card">
            <div className="project-header">
                <div className="project-icon">
                    <FaRegFolder className="folder-icon" />
                </div>
                <div className="project-links">
                    <a
                        href={githubLink ? githubLink : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`link-icon ${!githubLink ? 'hidden' : ''}`}
                    >
                        <FiGithub />
                    </a>
                    <a
                        href={externalLink ? externalLink : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`link-icon ${!externalLink ? 'hidden' : ''}`}
                    >
                        <FiExternalLink />
                    </a>
                </div>
            </div>
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <div className="project-technologies">
                {technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

const ProjectsPage = () => {

    return (
        <>
            <section className="project-section">
                <h2 className="section-title">Some of My Projects</h2>
                <div className="project-grid">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            githubLink={project.githubLink}
                            externalLink={project.externalLink}
                        />
                    ))}
                </div>
                <div className="view-archive">
                    <a href="#">view the archive</a>
                </div>
            </section>
            <SectionDivider />
        </>
    );
};

export default ProjectsPage;