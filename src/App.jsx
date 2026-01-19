import React, { useState } from 'react';
import Header from './components/header';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import Footer from './components/Footer';
import { initialProjects } from './data';

function App() {
  const [projects, setProjects] = useState(initialProjects);

  const handleAddProject = (newProject) => {
    setProjects([newProject, ...projects]); // Add new project to top
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm('Delete this project?')) {
      setProjects(projects.filter(project => project.id !== projectId));
    }
  };

  const appStyle = {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={appStyle}>
      <Header />
      <ProjectForm onAdd={handleAddProject} />
      <ProjectList projects={projects} onDelete={handleDeleteProject} />
      <Footer />
    </div>
  );
}

export default App;