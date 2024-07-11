import React, { Fragment, useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { scroller } from 'react-scroll';
import './App.css';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        if (path === "/") {
            scroller.scrollTo('HomePage', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            })
        } else if (path === "/about") {
            scroller.scrollTo('AboutPage', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            })
        }
    }, [location]);

    return (
        <Fragment>
            <Header />
            <div id="HomePage">
                <HomePage />
            </div>
            <div id="AboutPage">
                <AboutPage />
            </div>
        </Fragment>
    );
}
export default App;
