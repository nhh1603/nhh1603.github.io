import React from 'react';

import './AboutPage.css';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import avatar from '../../assets/avatar.jpg';

const AboutPage = () => {
    return (
        <>
            <section className="about-section">
                <div className="about-container">
                    <div className="about-text">
                        <h1 className="about-title">About Me</h1>
                        <p className="about-description">
                            Hello! It's Hieu /hiəw˧˦/ here and let me walk you through my journey.
                        </p>
                        <p className="about-description">
                        From a young age, I have harbored a deep passion for two things: Mathematics and Teaching. Before attending university, I earned 
                        several remarkable awards in national and international Mathematics competitions. Additionally, I successfully mentored around 
                        ten students to achieve similar accolades.
                        </p>
                        <p className="about-description">
                        However, I eventually realized that my patience in teaching was not always as steadfast as it needed to be. This led me to transition 
                        from teaching people to "teaching" machines. As an AI engineer, I can apply my mathematical expertise to real-world, modern scenarios, 
                        while still fulfilling my love for teaching, this time, by educating machines. Thus, I found a way to merge my two passions into one, 
                        which ultimately guided my decision to pursue an education in Computer Engineering.
                        </p>
                    </div>
                    <div className="about-photo">
                        <img src={avatar} alt="Hoang Nghia Hieu" className="photo" />
                    </div>
                </div>
            </section>
            <SectionDivider />
        </>
    );
}

export default AboutPage;