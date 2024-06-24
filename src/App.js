import React, { Fragment } from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import './App.css';

import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Fragment>
        <Routes>
            <Route exact path="/" element={<HomePage />} />
        </Routes>
    </Fragment>
  );
}

export default App;
