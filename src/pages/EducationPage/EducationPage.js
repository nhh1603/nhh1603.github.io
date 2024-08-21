import React, { useState } from 'react';

import './EducationPage.css';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import educationData from '../../assets/descriptions/education.json';
import insaPhoto from '../../assets/INSA.jpg';
import amsPhoto from '../../assets/Hanoi-Amsterdam.jpg';

const EducationPage = () => {
    const [selectedSchool, setSelectedSchool] = useState(educationData[0]);

    const getSchoolPhoto = () => {
        switch (selectedSchool.institute_short) {
            case 'INSA Lyon':
                return <img src={insaPhoto} alt={selectedSchool.institute_short} className="photo-img" />;
            case 'Hanoi - Amsterdam':
                return <img src={amsPhoto} alt={selectedSchool.institute_short} className="photo-img" />;
            default:
                return <img src={insaPhoto} alt={selectedSchool.institute_short} className="photo-img" />;
        }
    }

    return (
        <>
            <section className="education-section">
                <h2 className="section-title">Where I've Studied</h2>
                <div className="education-content">
                    <div className="education-photo">
                        {/* <img src={insaPhoto} alt="INSA Lyon" className="photo-img" /> */}
                        {getSchoolPhoto()}
                    </div>
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
                                <h3>{selectedSchool.title}</h3>
                                <p className="institute">{selectedSchool.institute}</p>
                                <p className="location duration">{selectedSchool.location} | {selectedSchool.duration}</p>
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