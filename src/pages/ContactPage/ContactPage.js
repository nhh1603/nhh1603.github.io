import React from 'react';

import './ContactPage.css';
import HighlightText from '../../components/HighlightText/HighlightText';

const ContactPage = () => {
    const handleSayHello = () => {
        window.location.href = "mailto:nghiahieu12@gmail.com";
    };

    const handleGetResume = () => {
        // Replace with the actual link to your resume
        const resumeUrl = process.env.PUBLIC_URL + "/CV.pdf";
        window.open(resumeUrl, "_blank");
    };

    return (
        <>
            <section className="contact-section">
                {/* <h2 className="section-number">04. What's Next?</h2> */}
                <h1 className="section-title">Get In Touch</h1>
                <p className="section-description">
                    I’m open to exploring new opportunities that align with my skills and interests. My inbox is always open — whether you have a question, or
                    you want me to be a part of your project, or just want to say hello, I’ll do my best to respond promptly. Feel free to connect with me through
                    my social media channels above, or simply click the button below to email me directly or access my resume.
                </p>
                <div className="button-container">
                    <button className="contact-button" onClick={handleSayHello}>Say Hello</button>
                    <button className="contact-button" onClick={handleGetResume}>Get Resume</button>
                </div>
            </section>
            <footer className="footer">
                <p>Designed & Built by <HighlightText link="https://www.linkedin.com/in/nghia-hieu-hoang/" text="Hoang Nghia Hieu" /></p>
                {/* <div className="stats">
                    <span>⭐ 7,418</span>
                    <span>🍴 3,655</span>
                </div> */}
            </footer>
        </>
    );
};

export default ContactPage;