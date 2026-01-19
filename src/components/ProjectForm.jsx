import React, { useState } from 'react';

function ProjectForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const formStyle = {
    background: 'white',
    padding: '2rem',
    borderRadius: '8px',
    maxWidth: '800px',
    margin: '2rem auto',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  };

  const titleStyle = {
    fontSize: '1.8rem',
    color: '#2c3e50',
    marginBottom: '1.5rem',
    textAlign: 'center'
  };

  const groupStyle = {
    marginBottom: '1.5rem'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#2c3e50',
    fontWeight: '600'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.8rem',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px'
  };

  const buttonStyle = {
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    padding: '1rem',
    fontSize: '1.1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    fontWeight: '600'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      alert('Please enter a project title');
      return;
    }

    const newProject = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim()
    };

    onAdd(newProject);
    
    // Reset form
    setTitle('');
    setDescription('');
  };

  const handleMouseEnter = (e) => {
    if (e.target.type === 'submit') {
      e.target.style.backgroundColor = '#27ae60';
    }
  };

  const handleMouseLeave = (e) => {
    if (e.target.type === 'submit') {
      e.target.style.backgroundColor = '#2ecc71';
    }
  };

  return (
    <div style={formStyle}>
      <h2 style={titleStyle}>Add New Project</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={groupStyle}>
          <label htmlFor="title" style={labelStyle}>
            Project Title *
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={inputStyle}
            placeholder="Enter project title"
          />
        </div>

        <div style={groupStyle}>
          <label htmlFor="description" style={labelStyle}>
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ 
              ...inputStyle, 
              minHeight: '80px',
              resize: 'vertical'
            }}
            placeholder="Describe your project (optional)"
          />
        </div>

        <button 
          type="submit" 
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Add Project
        </button>
      </form>
    </div>
  );
}

export default ProjectForm;