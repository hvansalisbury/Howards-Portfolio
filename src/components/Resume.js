// imports react
import React from 'react';
// imports resume so user can click and view pdf
import resume from '../assets/images/Resume.pdf';
// styles array to be used in html
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: "30%",
    flexWrap: 'wrap',
    color: 'white',
  },
  section: {
    display: 'flex',
    height: 'calc(100vh - 154px)',
    padding: '1em 0px 80px 0px',
    justifyContent: 'center',
    backgroundColor: 'dimgray',
  },
  button: {
    padding: '4px',
    borderRadius: "5px"
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  heading: {
    margin: '1em',
    color: 'whitesmoke'
  }
};
// resume function to render html in resume state
function Resume() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h3 style={styles.heading}>Résumé</h3>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <button style={styles.button}>Download My Résumé</button>
        </a>
      </div>
      <div style={styles.container}>
        <h3 style={styles.heading}>Skills</h3>
        <ul style={styles.list}>
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
// exports resume function
export default Resume;