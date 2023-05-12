import React from 'react';
import resume from '../assets/images/Resume.pdf';
import mic from '../assets/images/pexels-erkan-utu-302655.jpg';
import file from '../assets/images/208-2088186_png-file-report-icon-vector-png.png';
const styles = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'calc(100vh - 150px)',
    width: '100%',
    backgroundImage: `url(${mic})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'whitesmoke',
    top: '75px',
    position: 'fixed',
    left: '0px',
  },
};
function Resume() {
  return (
    <section className='resume-section' style={styles.section}>
      <div className='resume-container'>
        <h3>Résumé</h3>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <img src={file} alt='file' className='file-img' />
        </a>
      </div>
      <div className='skills-container'>
        <h3>Skills</h3>
        <ul className='skills-list'>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>React</li>
          <li>GraphQL</li>
          <li>MVC</li>
          <li>JSON</li>
          <li>Git</li>
          <li>Markdown</li>
          <li>ORM</li>
          <li>PWA</li>
          <li>MERN</li>
        </ul>
      </div>
    </section>
  );
};
export default Resume;