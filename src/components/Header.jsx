import React from 'react';
import './header.css';

const Header = ({ onSearch }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="header">
      <div className='hh-d'>
      <div className="breadcrumb">
        <span>Home</span> &gt; <span className="current-page">Dashboard V2</span>
      </div>
      <div className="user-option">
        <span className="user-profile">K</span> 
        <span className='iconr'>*</span>
      </div>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search anything..."
          onChange={handleSearchChange}
        />
      </div>
      <div className="user-options">
        <span className="user-profile">K</span> 
        <span className='iconr'>*</span>
      </div>
    </div>
  );
};

export default Header;
