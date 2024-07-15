import React, { useState } from 'react';

import './EducationPage.css';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import educationData from '../../assets/descriptions/education.json';

const EducationPage = () => {
    const [selectedSchool, setSelectedSchool] = useState(educationData[0]);

    return (
        <>
            <section className="education-section">
                <h2 className="section-title">Where I've Studied</h2>
                <div className="education-content">
                    <div className="school-list">
                        {educationData.map((school, index) => (
                            <button
                                key={index}
                                className={`school-item ${selectedSchool === school ? 'active' : ''}`}
                                onClick={() => setSelectedSchool(school)}
                            >
                                {school.institute_short}
                            </button>
                        ))}
                    </div>
                    <div className="school-details">
                        {selectedSchool && (
                            <>
                                <h3>{selectedSchool.degree}</h3>
                                <p className="institute">{selectedSchool.institute}</p>
                                <p className="duration">{selectedSchool.duration}</p>
                                <p><strong>Score:</strong> {selectedSchool.score}</p>
                                <ul>
                                    {selectedSchool.description.map((desc, index) => (
                                        <li key={index}>{desc}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </section>
            <SectionDivider />
        </>
    );
};

export default EducationPage;