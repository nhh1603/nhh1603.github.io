import React from 'react';

import './Button.css';

const Button = ({ children, onClick, className = '' }) => {
    return (
        <button className={`custom-button ${className}`} onClick={onClick}>
            <span className="button-text">{children}</span>
        </button>
    );
};

export default Button;