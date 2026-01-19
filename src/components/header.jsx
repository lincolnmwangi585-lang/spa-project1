import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '2rem 1rem',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    margin: 0
  };

  const subtitleStyle = {
    fontSize: '1.1rem',
    margin: '0.5rem 0 0 0',
    opacity: 0.9
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>My Projects</h1>
      <p style={subtitleStyle}>Add and delete your projects</p>
    </header>
  );
}

export default Header;