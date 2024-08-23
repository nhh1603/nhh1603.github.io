import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <>
            <header className="header-wrapper">
                <div className="logo" onClick={() => handleNavigation('/')}>
                    <img src={logo} alt="Hieu Logo" className="logo-image" />
                </div>
                {isMobile && (
                    <button className="menu-button" onClick={toggleMenu}>
                        <div className={`icon-container ${isMenuOpen ? 'open' : ''}`}>
                            <FiMenu className='menu-icon' />
                            <FiX className='close-icon' />
                        </div>
                    </button>
                )}
                {isMobile ? (
                    <nav className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                        <a className="menu-item" onClick={() => handleNavigation('/about')}>About</a>
                        <a className="menu-item" onClick={() => handleNavigation('/education')}>Education</a>
                        <a className="menu-item" onClick={() => handleNavigation('/experience')}>Experience</a>
                        <a className="menu-item" onClick={() => handleNavigation('/projects')}>Projects</a>
                        <a className="menu-item" onClick={() => handleNavigation('/blogs')}>Blogs</a>
                        <a className="menu-item" onClick={() => handleNavigation('/contact')}>Contact</a>
                    </nav>
                ) : (
                    <nav className="desktop-menu">
                        <a className="menu-item" onClick={() => handleNavigation('/about')}>About</a>
                        <a className="menu-item" onClick={() => handleNavigation('/education')}>Education</a>
                        <a className="menu-item" onClick={() => handleNavigation('/experience')}>Experience</a>
                        <a className="menu-item" onClick={() => handleNavigation('/projects')}>Projects</a>
                        <a className="menu-item" onClick={() => handleNavigation('/blogs')}>Blogs</a>
                        <a className="menu-item" onClick={() => handleNavigation('/contact')}>Contact</a>
                    </nav>
                )}
            </header>
            {isMenuOpen && <div className="blur-overlay" onClick={toggleMenu}></div>}
        </>
    );
};

export default Header;

