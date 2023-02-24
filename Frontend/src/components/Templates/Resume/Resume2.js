import React from 'react'
import styles from './Resume2.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const Resume2 = () => {

  const props = useLocation().state;
  console.log(props);

  const educationHandler = (degree, course) => {
    console.log(degree + ' ' + course);
    let res = '' + degree;
    if (course) res += (', ' + course);
    return res;
  }

  const porHandler = (pos, org) => {
    if (pos !== '' && org !== '') return pos + " at " + org;
    else return '';
  }

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
      <div className={`${styles.resume}`} id='resume'>
        <div className={`${styles.header}`}>
          <span className={`${styles.left}`}>
            <div className={`${styles.name}`}>{props.fnameRef} {props.lnameRef}</div>
            <div>Roll No.: {props.rollnoRef}</div>
            <div>{props.educationRef[0].degree}</div>
            <div>{props.educationRef[0].course}</div>
            <div>{props.educationRef[0].university}</div>
          </span>
          <span className={`${styles.right}`}>
            <div><FontAwesomeIcon icon={faPhone} /> {props.phoneRef}</div>
            <a className={`${styles.mail}`} href={'mailto:' + props.emailRef}><FontAwesomeIcon icon={faEnvelope} /> {props.emailRef}</a>
            {props.linksRef.map((link, index) => (
              <div key={index}><a className={`${styles.link}`} href={link.link} target='_blank' rel='noreferrer'>{link.name}</a></div>
            ))}
          </span>
        </div>
        <div className={`${styles.main_body}`}>
          <div className={`${styles.section}`}>
            <div className={`${styles.title}`}>Education</div>
            <hr></hr>
            <ul className={`${styles.list}`}>
              {props.educationRef.map(education => (
                <div className={`${styles.flexbox} ${styles.subsection}`}>
                  <div className={`${styles.flex_left}`}>
                    <li className={`${styles.li}`}>{education.university}</li>
                    <div className={`${styles.italics}`}>{educationHandler(education.degree, education.course)}</div>
                  </div>
                  <div className={`${styles.flex_right}`}>
                    <div>{education.year}</div>
                    <div>{education.grade}</div>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <div className={`${styles.section}`}>
            <div className={`${styles.title}`}>Work Experience</div>
            <hr></hr>
            <ul className={`${styles.list}`}>
              {props.workexRef.map((work, i) => (
                <div className={`${styles.subsection}`}>
                  <div className={`${styles.flexbox}`}>
                    <div className={`${styles.flex_left}`}>
                      <li className={`${styles.li}`}>{work.organisation} ({props.workexRef[i].links.map((link, index) => (<a key={index} className={`${styles.link}`} target='_blank' rel='noreferrer' href={link.link}> {link.name} </a>))})</li>
                      <div className={`${styles.italics}`}>{work.title}</div>
                    </div>
                    <div className={`${styles.flex_right}`}>
                      <div>{work.duration}</div>
                      <div>Location</div>
                    </div>
                  </div>
                  <ul className={`${styles.sublist}`}>
                    <li>{work.contributions}</li>
                  </ul>
                </div>
              ))}
            </ul>
          </div>
          <div className={`${styles.section}`}>
            <div className={`${styles.title}`}>Academic Projects</div>
            <hr></hr>
            <ul className={`${styles.list}`}>
              {props.projectsRef.map((project, i) => (
                <div className={`${styles.subsection}`}>
                  <div className={`${styles.flexbox}`}>
                    <div className={`${styles.flex_left}`}>
                      <li className={`${styles.li}`}>{project.name} ({props.projectsRef[i].links.map((link, index) => (<a key={index} className={`${styles.link}`} target='_blank' rel='noreferrer' href={link.link}> {link.name} </a>))})</li>
                    </div>
                    <div className={`${styles.flex_right}`}>
                      <div>Duration</div>
                    </div>
                  </div>
                  <ul className={`${styles.sublist}`}>
                    <li>{project.description}</li>
                  </ul>
                </div>
              ))}
            </ul>
          </div>
          <div className={`${styles.section}`}>
            <div className={`${styles.title}`}>Technical Skills</div>
            <hr></hr>
            <ul className={`${styles.list}`}>
              <li className={`${styles.li}`}>Languages</li>
              {props.skillsRef.languages.map((language, index) => (<span key={index} className={`${styles.item}`}> {language} </span>))}
              <br />
              <li className={`${styles.li}`}>Tools, Frameworks and Databases</li>
              {props.skillsRef.frameworksLibrariesAndDatabases.map((flad, index) => (<span key={index} className={`${styles.item}`}> {flad} </span>))}
              <br />
              <li className={`${styles.li}`}>Subjects</li>
              {props.skillsRef.subjects.map((subject, index) => (<span key={index} className={`${styles.item}`}> {subject} </span>))}
            </ul>
          </div>
          <div className={`${styles.section}`}>
            <div className={`${styles.title}`}>Positions of Responsibility</div>
            <hr></hr>
            <ul className={`${styles.list}`}>
              {props.porRef.map((por, i) => (
                <div className={`${styles.subsection}`}>
                  <div className={`${styles.flexbox}`}>
                    <div className={`${styles.flex_left}`}>
                      <li className={`${styles.li}`}>{porHandler(por.position, por.organisation)} ({props.porRef[i].links.map((link, index) => (<a key={index} className={`${styles.link}`} target='_blank' rel='noreferrer' href={link.link}> {link.name} </a>))})</li>
                    </div>
                    <div className={`${styles.flex_right}`}>
                      <div>{por.duration}</div>
                    </div>
                  </div>
                  <ul className={`${styles.sublist}`}>
                    <li>{por.work}</li>
                  </ul>
                </div>
              ))}
            </ul>
          </div>
          <div className={`${styles.section}`}>
            <div className={`${styles.title}`}>Academic Achievements and Awards</div>
            <hr></hr>
            <ul className={`${styles.list}`}>
              {props.achievementsRef.map((ac, i) => (
                <div className={`${styles.subsection}`}>
                  <div className={`${styles.flexbox}`}>
                    <div className={`${styles.flex_left}`}>
                      <li className={`${styles.li}`}>{ac.achievement} ({props.achievementsRef[i].links.map((link, index) => (<a key={index} className={`${styles.link}`} target='_blank' rel='noreferrer' href={link.link}> {link.name} </a>))})</li>
                    </div>
                  </div>
                  <ul className={`${styles.sublist}`}>
                    {ac.description ? <li>{ac.description}</li> : ''}
                  </ul>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={`${styles.btn_div}`}>
        <button className={`${styles.btn}`} onClick={downloadHandler}>Download as PDF</button>
      </div>
    </div>
  )
}

export default Resume2;