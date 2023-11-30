import React from 'react';
import './projects.css';

const Projects = ({ projectData }) => {
  return (
    <div className="my-projects">
      {projectData.map((project, index) => (
        <div key={index} className="project-card">
          <div className="card-content">
            <img src={project.imgSrc} alt={project.alt} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.technologiesUsed}</p>
            <a href={project.link}>Learn more</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

