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
                    <h1 classname="home-title">Welcome to my portfolio</h1>
                    <h2 classname="home-subtitle">I'm an engineering student</h2>
                    <p classname="home-description">I'm a software engineering student at the University of Waterloo. I'm passionate about web development and I'm always looking for new opportunities to learn and grow.</p>
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
            </section>
        </>
    );
}

export default HomePage;