import React from 'react';
function Project(props) {
  return (
    <div className='project-container'>
      {props.projects.map((project, i) =>
        <div className='cards' key={project.id}>
          <img
            alt={project.name}
            className="img"
            src={project.picture}
          />
          <h4>{project.name}</h4>
          <p>{project.info}</p>
          <h5>Languages Used</h5>
          <p>{project.languages}</p>
          <a href={project.link} target='_blank' rel="noopener noreferrer"><button className='project-button'>Link</button></a>
          <a href={project.repo} target='_blank' rel="noopener noreferrer"><button className='project-button'>Repository</button></a>
        </div>
      )}
    </div>
  );
};
export default Project;