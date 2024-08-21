import React, { Fragment, useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { scroller } from 'react-scroll';
import './App.css';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import EducationPage from './pages/EducationPage/EducationPage';
import ExperiencePage from './pages/ExperiencePage/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';

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
        } else if (path === "/education") {
            scroller.scrollTo('EducationPage', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            })
        } else if (path === "/experience") {
            scroller.scrollTo('ExperiencePage', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            })
        } else if (path === "/projects") {
            scroller.scrollTo('ProjectsPage', {
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
            <div id="EducationPage">
                <EducationPage />
            </div>
            <div id="ExperiencePage">
                <ExperiencePage />
            </div>
            <div id="ProjectsPage">
                <ProjectsPage />
            </div>
        </Fragment>
    );
}
export default App;
