// imports react
import React from 'react';
// style object for html
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: "75%",
    flexWrap: 'wrap',
    color: 'white',
  },
  img: {
    height: '50%',
    width: '100%',
  },
  card: {
    height: 'fit-content',
    width: '46%',
    border: 'white solid 1px',
    margin: '1em',
    borderRadius: '5px',
    padding: '.5em',
  },
  button: {
    padding: '4px',
    borderRadius: "5px"
  }
};
// project function to provide html to be rendered in profile state
function Project(props) {
  return (
    <div style={styles.container}>
      {/* separates the projects prop into individual project objects to be rendered and creates separate html for each project card */}
      {props.projects.map((project, i) =>
        <div className='cards' style={styles.card} key={project.id}>
          <img
            alt={project.name}
            className="img"
            src={project.picture}
            style={styles.img}
          />
          <h4>{project.name}</h4>
          <p>{project.info}</p>
          <h5>Languages Used</h5>
          <p>{project.languages}</p>
          <a href={project.link}><button style={styles.button}>Link</button></a>
          <span>   </span>
          <a href={project.repo}><button style={styles.button}>Repository</button></a>
        </div>
      )}
    </div>
  );
};
// exports project function
export default Project;