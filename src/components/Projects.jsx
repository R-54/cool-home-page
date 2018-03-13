import React from 'react';
import PropTypes from 'prop-types';

const Projects = props => (
  <div>
    <div className="recentProjects">
      <h2>Recent projects</h2>
    </div>
    <div className="projects">
      {props.projects.map(project => (
        <div className="project">
          <h2>{project.name}</h2>
        </div>
      ))}
      <div className="project">
        <h2 id="more">More <br />projects</h2>
      </div>
    </div>
  </div>
);

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })),
};

export default Projects;