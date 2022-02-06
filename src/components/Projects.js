import React from 'react';
import ProjectsCarouse from './ProjectsCarouse';


const Projects = () => {
  return (
    <div id="projects" className="projects">
        <h1>My Projects</h1>
        <div className="container">
            <div className="projects-content">
                <ProjectsCarouse />
            </div>
        </div>
    </div>
  )
}

export default Projects
