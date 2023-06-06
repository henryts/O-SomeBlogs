import React from 'react';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">My Blog Post</div>
      <div className="navbar-middle">
        <div className="navbar-icon">Blogs</div>
        <div className="navbar-icon">Add</div>
      </div>
    </nav>
  );
};

export default NavBar;
