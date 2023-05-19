import React from 'react';
function Project(props) {
  return (
    <div className='project-container'>
      {props.featureProjects.map((featureProject, i) =>
        <div className='feature-cards' key={featureProject.id}>
          <iframe
            alt={featureProject.name}
            className="video"
            src={featureProject.video}
            allow='autoplay; encrypted-media'
            allowfullscreen
          />
          <h4>{featureProject.name}</h4>
          <p>{featureProject.info}</p>
          <h5>Languages Used</h5>
          <p>{featureProject.languages}</p>
          <a href={featureProject.link} target='_blank' rel="noopener noreferrer"><button className='project-button'>Link</button></a>
          <a href={featureProject.repo} target='_blank' rel="noopener noreferrer"><button className='project-button'>Repository</button></a>
        </div>
      )}
    </div>
  );
};
export default Project;