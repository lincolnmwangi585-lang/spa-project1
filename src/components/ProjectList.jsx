import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectList({ projects, onDelete }) {
  const containerStyle = {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto'
  };

  const titleStyle = {
    fontSize: '1.8rem',
    color: '#2c3e50',
    marginBottom: '1.5rem'
  };

  const emptyStyle = {
    textAlign: 'center',
    padding: '3rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: '2px dashed #ddd',
    color: '#7f8c8d'
  };

  if (projects.length === 0) {
    return (
      <div style={containerStyle}>
        <h2 style={titleStyle}>My Projects</h2>
        <div style={emptyStyle}>
          <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
            No projects yet
          </p>
          <p>Add your first project using the form below</p>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>My Projects ({projects.length})</h2>
      {projects.map(project => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ProjectList;