import React from 'react';
import { FaRegFolder, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import './ProjectsPage.css';
import SectionDivider from '../../components/SectionDivider/SectionDivider';

const ProjectCard = ({ title, description, technologies, githubLink, externalLink }) => {
    return (
        <div className="project-card">
            <div className="project-header">
                <div className="project-icon">
                    <FaRegFolder className="folder-icon"/>
                </div>
                <div className="project-links">
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    )}
                    {externalLink && (
                        <a href={externalLink} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt />
                        </a>
                    )}
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
    const projects = [
        {
            title: 'Integrating Algolia Search with WordPress Multisite',
            description:
                'Building a custom multisite compatible WordPress plugin to build global search with Algolia',
            technologies: ['Algolia', 'WordPress', 'PHP'],
            githubLink: 'https://github.com/example/algolia-wordpress-plugin',
            externalLink: 'https://example.com/algolia-wordpress-plugin',
        },
        {
            title: 'Time to Have More Fun',
            description:
                'A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS',
            technologies: ['Next.js', 'Tailwind CSS', 'Firebase'],
        },
        {
            title: 'Building a Headless Mobile App CMS From Scratch',
            description:
                'Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement',
            technologies: ['Node', 'Express', 'Firebase', 'Vue'],
        },
        {
            title: 'OctoProfile',
            description:
                'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, started repositories, and sort through your top repos by number of stars, forks, and size.',
            technologies: ['Next.js', 'Chart.js', 'GitHub API'],
        },
        {
            title: 'Google Keep Clone',
            description:
                'A simple Google Keep clone built with Vue and Firebase.',
            technologies: ['Vue', 'Firebase'],
        },
        {
            title: 'Apple Music Embeddable Web Player Widget',
            description:
                'Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging MusicKit.js.',
            technologies: ['MusicKit.js', 'JS', 'SCSS'],
        },
    ];

    return (
        <>
            <section className="project-section">
                <h2 className="section-title">Some of My Projects</h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
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