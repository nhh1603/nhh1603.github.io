import React, { useState } from 'react';

import './ExperiencePage.css';
import SectionDivider from '../../components/SectionDivider/SectionDivider';
import experienceData from '../../assets/descriptions/experience.json';
import slibPhoto from '../../assets/SLIB.png';
import bnpPhoto from '../../assets/BNP.jpg';
import insaPhoto from '../../assets/INSA_logo.png';

const ExperiencePage = () => {
    const [selectedJob, setSelectedJob] = useState(experienceData[0]);

    const getJobPhoto = () => {
        switch (selectedJob.company) {
            case 'SLIB':
                return <img src={slibPhoto} alt={selectedJob.company} className="photo-img" />;
            case 'BNP Paribas':
                return <img src={bnpPhoto} alt={selectedJob.company} className="photo-img" />;
            case 'INSA Lyon':
                return <img src={insaPhoto} alt={selectedJob.company} className="photo-img" />;
            default:
                return <img src={slibPhoto} alt={selectedJob.company} className="photo-img" />;
        }
    }

    return (
        <>
            <section className="experience-section">
                <h2 className="section-title">Where I've Worked</h2>
                <div className="experience-content">
                    <div className="job-list">
                        {experienceData.map((job, index) => (
                            <button
                                key={index}
                                className={`job-item ${selectedJob === job ? 'active' : ''}`}
                                onClick={() => setSelectedJob(job)}
                            >
                                {job.company}
                            </button>
                        ))}
                    </div>
                    <div className="job-details">
                        {selectedJob && (
                            <>
                                <h3>{selectedJob.title}</h3>
                                <p className="company">{selectedJob.company}</p>
                                <p className="contract location duration">{selectedJob.contract} | {selectedJob.location} | {selectedJob.duration}</p>
                                <ul>
                                    {selectedJob.description.map((desc, index) => (
                                        <li key={index}>{desc}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                    <div className="experience-photo">
                        {getJobPhoto()}
                    </div>
                </div>
            </section>
            <SectionDivider />
        </>
    );
};

export default ExperiencePage;