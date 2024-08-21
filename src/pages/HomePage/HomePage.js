import React from 'react';
import { FaGithub, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import './HomePage.css';
import SectionDivider from '../../components/SectionDivider/SectionDivider';

const HomePage = () => {
    const codeString = `// Define Hieu
const engineer = {
    name: 'Hieu',
    expertise: 'AI/Machine Learning',
    technicalSkills: {
        programming: ['Python', 'JavaScript', 'Java', 'Go', 'C', 'SQL'],
        machineLearning: ['TensorFlow', 'PyTorch'],
        webDevelopment: ['React', 'Node.js', 'Express', 'Angular', 'Spring', 
                         'MongoDB', 'PostgreSQL'],
        devOps: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Git'],
        cloudComputing: ['Azure', 'AWS', 'Firebase'],
    },
    softSkills: ['Problem Solving', 'Teamwork', 'Communication', 'Leadership'],
}`
    return (
        <>
            <section className="home-section">
                <div className='home-container'>
                    <p className="home-intro">Hello👋, my name is</p>
                    <h1 className="home-title">Hoang Nghia Hieu</h1>
                    <h2 className="home-subtitle">I teach machine to do things</h2>
                    <p className="home-description">
                        I am an engineering student at <a href="https://www.insa-lyon.fr/" target="_blank" rel="noreferrer noopener" className="highlight-link">National Institute of Applied Sciences of Lyon (INSA Lyon)</a> and
                        an AI engineer apprentice at <a href="https://www.slib.com/" target="_blank" rel="noreferrer noopener" className="highlight-link">SLIB</a>.
                        With hands-on experience in the FinTech industry, I am passionate about AI and Machine Learning, particularly in designing and
                        implementing AI solutions in the financial sector.
                    </p>
                    <div className="home-social-links">
                        <a href="https://github.com/nhh1603" target='_blank' rel='noreferrer noopener' className="home-social-link">
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
                        <SyntaxHighlighter language="javascript" style={vscDarkPlus} wrapLines={true} wrapLongLines={true} customStyle={{ fontSize: '14px' }}>
                            {codeString}
                            {/* {selfDescription} */}
                        </SyntaxHighlighter>
                    </pre>
                </div>
            </section>
            <SectionDivider />
        </>
    );
}

export default HomePage;
