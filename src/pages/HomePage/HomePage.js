import React from 'react';
import Header from '../../components/Header/Header';
import { FaGithub, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

import './HomePage.css';

const HomePage = () => {
    return (
        <>
            <Header />
            <section className="home-section">
                <div className='home-container'>
                    <p className="home-intro">Hello, my name is</p>
                    <h1 className="home-title">Hoang Nghia Hieu</h1>
                    <h2 className="home-subtitle">I teach machine to do things</h2>
                    <p className="home-description">
                    I am an engineering student at the National Institute of Applied Sciences of Lyon (INSA Lyon) and an AI engineer apprentice at SLIB. 
                    With hands-on experience in the FinTech industry, I am passionate about AI and Machine Learning, particularly in designing and 
                    implementing AI solutions for finance.
                    </p>
                    <div className="home-social-links">
                        <a href="" target='_blank' rel='noreferrer noopener' className="home-social-link">
                            <FaGithub />
                        </a>
                        <a href="" target='_blank' rel='noreferrer noopener' className="home-social-link">
                            <FaLinkedin />
                        </a>
                        <a href="" target='_blank' rel='noreferrer noopener' className="home-social-link">
                            <FaFacebook />
                        </a>
                        <a href="" target='_blank' rel='noreferrer noopener' className="home-social-link">
                            <FaInstagram />
                        </a>
                        <a href="" target='_blank' rel='noreferrer noopener' className="home-social-link">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
                <div className="code-snippet">
                    <div className="code-header">
                        <div className="circle red"></div>
                        <div className="circle yellow"></div>
                        <div className="circle green"></div>
                    </div>
                    <pre>
                        <code>
                            {`// Example Code
const engineer = {
    name: 'Hieu',
    expertise: 'AI/Machine Learning',
    technicalSkills: {
        programming: ['Python', 'JavaScript', 'Java', 'Go', 'C', 'SQL'],
        machineLearning: ['TensorFlow', 'PyTorch'],
        webDevelopment: ['React', 'Node.js', 'Express', 'Angular', 'Spring', 
                         'MongoDB', 'PostgreSQL'],
        devOps: ['Docker', 'Kubernetes', 'Jenkins', 'Ansible', 'Git'],
    },
    softSkills: ['Problem Solving', 'Teamwork', 'Communication', 'Leadership'],
}

greet();`}
                        </code>
                    </pre>
                </div>
            </section>
        </>
    );
}

export default HomePage;