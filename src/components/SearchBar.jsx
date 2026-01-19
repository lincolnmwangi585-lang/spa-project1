import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const sectionStyle = {
    padding: '2rem 1rem',
    backgroundColor: '#2c3e50'
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    gap: '1rem'
  };

  const inputStyle = {
    flex: 1,
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '50px',
    fontSize: '1rem',
    background: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const buttonStyle = {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background-color 0.3s'
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
    
    // Add focus effect
    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    setTimeout(() => {
      e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }, 300);
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
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
    <div style={sectionStyle}>
      <div style={containerStyle}>
        <input
          type="text"
          style={inputStyle}
          placeholder="Search projects by title, technology, or category..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {searchTerm && (
          <button 
            style={buttonStyle}
            onClick={handleClear}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;