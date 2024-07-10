import React from 'react';

import './AboutPage.css';
import SectionDivider from '../../components/SectionDivider/SectionDivider';

const AboutPage = () => {
    return (
        <>
            <section className="about-section">
                <div className="about-content">
                    <div className="about-text">
                        <h1 className="about-title">About Me</h1>
                        <p className="about-description">
                            Hi, I'm Hoang Nghia Hieu, an engineering student at the National Institute of Applied Sciences of Lyon (INSA Lyon) and an AI engineer apprentice at SLIB.
                            With hands-on experience in the FinTech industry, I am passionate about AI and Machine Learning, particularly in designing and implementing AI solutions in the financial sector.
                            I love learning new technologies and improving my skills.
                        </p>
                    </div>
                    <div className="about-photo">
                        <img src="/path-to-your-photo.jpg" alt="Hoang Nghia Hieu" className="photo" />
                    </div>
                </div>
            </section>
            <SectionDivider />
        </>
    );
}

export default AboutPage;