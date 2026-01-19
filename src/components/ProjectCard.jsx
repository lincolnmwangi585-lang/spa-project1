import React from 'react';

function ProjectCard({ project, onDelete }) {
  const cardStyle = {
    background: 'white',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '1rem',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    border: '1px solid #e0e0e0'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem'
  };

  const titleStyle = {
    fontSize: '1.5rem',
    margin: 0,
    color: '#2c3e50'
  };

  const descriptionStyle = {
    color: '#555',
    lineHeight: '1.5'
  };

  const deleteButtonStyle = {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9rem'
  };

  const handleMouseEnter = (e) => {
    if (e.target.tagName === 'BUTTON') {
      e.target.style.backgroundColor = '#c0392b';
    }
  };

  const handleMouseLeave = (e) => {
    if (e.target.tagName === 'BUTTON') {
      e.target.style.backgroundColor = '#e74c3c';
    }
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <h3 style={titleStyle}>{project.title}</h3>
        <button 
          style={deleteButtonStyle}
          onClick={() => onDelete(project.id)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Delete
        </button>
      </div>
      <p style={descriptionStyle}>{project.description}</p>
    </div>
  );
}

export default ProjectCard;