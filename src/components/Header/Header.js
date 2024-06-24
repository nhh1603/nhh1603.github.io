import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

import './Header.css';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    return (
        <>
            <header className="header-wrapper">
                <div className="logo">Hieu</div>
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
                        <a className="menu-item">About</a>
                        <a className="menu-item">Education</a>
                        <a className="menu-item">Experience</a>
                        <a className="menu-item">Projects</a>
                        <a className="menu-item">Blogs</a>
                        <a className="menu-item">Contact</a>
                    </nav>
                ) : (
                    <nav className="desktop-menu">
                        <a className="menu-item">About</a>
                        <a className="menu-item">Education</a>
                        <a className="menu-item">Experience</a>
                        <a className="menu-item">Projects</a>
                        <a className="menu-item">Blogs</a>
                        <a className="menu-item">Contact</a>
                    </nav>
                )}
            </header>
            {isMenuOpen && <div className="blur-overlay" onClick={toggleMenu}></div>}
        </>
    );
};

export default Header;

