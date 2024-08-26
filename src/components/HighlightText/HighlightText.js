import React from 'react';

import './HighlightText.css';

const HighlightText = ({ link, text }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer noopener" className="highlight-link">{text}</a>
    );
};

export default HighlightText;