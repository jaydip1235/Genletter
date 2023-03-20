import React from 'react';
import { useLocation } from 'react-router-dom';
import './Resume1.css';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const Resume1 = () => {
    const props = useLocation().state;
    console.log(props);

    const downloadHandler = async () => {
        const download = document.getElementById('resume');
        html2canvas(download)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF("p", "mm", "a4");
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
                pdf.save(`${props.fnameRef} ${props.lnameRef} Resume.pdf`);
            })
    }

    return (
        <div>
            <div className='resume' id='resume'>
                <div className='left'>
                    <div className='left-section-title'>Contact</div>
                    <hr></hr>
                    <div className='section-content'>
                        <div className='left-section-content-heading'>Phone</div>
                        <div>{props.phoneRef}</div>
                        <div className='left-section-content-heading'>Email</div>
                        <div><a className='email' href={'mailto:' + props.emailRef}>{props.emailRef}</a></div>
                    </div>
                    <div className='left-section-title'>Education</div>
                    <hr></hr>
                    {props.educationRef.map(education => (
                        <div className='left-section-content'>
                            <div className='left-section-content-subheading'>{education.year}</div>
                            <div className='left-section-content-heading'>{education.degree} {education.course ? (`(${education.course})`) : ''}</div>
                            <div className='left-section-content-subheading'>{education.grade}</div>
                        </div>
                    ))}
                    <div className='left-section-title last'>Skills</div>
                    <hr></hr>
                    {/* {props.skillsRef.map(skill => (
                        <span className='section-content'>{skill.skill}, </span>
                    ))} */}
                    <ul className='list'>
                        <li className='li'>Languages</li>
                        {props.skillsRef.languages.map((language, index) => (
                            <span key={index} className='item'>{language} </span>
                        ))}
                        <li className='li'>Tools, Frameworks and Databases</li>
                        {props.skillsRef.frameworksLibrariesAndDatabases.map((flad, index) => (
                            <span key={index} className='item'>{flad} </span>
                        ))}
                        <li className='li'>Subjects</li>
                        {props.skillsRef.languages.map((subject, index) => (
                            <span key={index} className='item'>{subject} </span>
                        ))}
                    </ul>
                </div>
                <div className='right'>
                    <div className='name'>{props.fnameRef} {props.lnameRef}</div>
                    <div className='section-title'>Work Experience</div>
                    <hr></hr>
                    {props.workexRef.map(work => (
                        <div className='section-content' key={Math.random()}>
                            <div className='section-content-heading'>{work.duration}</div>
                            <div className='section-content-subheading'>{work.organisation}</div>
                            <div className='section-content-heading'>{work.title}</div>
                            <li>{work.contributions}</li>
                        </div>
                    ))}
                    <div className='section-title'>Academic Projects</div>
                    <hr></hr>
                    {props.projectsRef.map(project => (
                        <div className='section-content'>
                            <div className='section-content-heading'>{project.name}</div>
                            <li>{project.description}</li>
                        </div>
                    ))}
                    <div className='section-title'>Academic Achievements and Awards</div>
                    <hr></hr>
                    {props.achievementsRef.map(achievement => (
                        <div className='section-content'>
                            <div className='section-content-heading'>{achievement.achievement}</div>
                            <li>{achievement.description}</li>
                        </div>
                    ))}
                    <div className='section-title'>Positions of Responsibility</div>
                    <hr></hr>
                    {props.porRef.map(por => (
                        <div className='section-content'>
                            <div className='section-content-heading'>{por.position} at {por.organisation}</div>
                            <li>{por.work}</li>
                        </div>
                    ))}
                </div>
            </div >
            <div className='btn-div'>
                <button className='btn' onClick={downloadHandler}>Download as PDF</button>
            </div>
        </div>
    );
}

export default Resume1;