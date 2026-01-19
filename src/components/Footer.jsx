import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '1.5rem',
    textAlign: 'center',
    marginTop: '2rem'
  };

  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} Simple Project Manager</p>
    </footer>
  );
}

export default Footer;