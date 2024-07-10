import React, { Fragment, useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { scroller } from 'react-scroll';
import './App.css';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
    return (
        <Fragment>
            <Main />
        </Fragment>
    );
}

const Main = () => {
    const aboutRef = useRef(null);

    return (
        <>
            <Header />
            <ScrollToSection />
            <div className="main-content">
                <Routes>
                    {/* <Route path="/*" element={<MainContent />} /> */}
                </Routes>
            </div>
        </>
    );
};

const ScrollToSection = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const sectionId = pathname.replace('/', '-section');
        if (sectionId) {
            scroller.scrollTo(sectionId, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
}

export default App;
