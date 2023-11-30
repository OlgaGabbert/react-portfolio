import React from 'react';
import './navbar.css';

const Navbar = ({ imgSrc, linkSrc, link, projectsLink }) => {
    return (
      <div className="navbar">
        <ul>
          <li>
            <a href={linkSrc || '#'}>
              <img src={imgSrc} alt="Logo" className="logo" />
            </a>
          </li>
          <li>
            <a href={projectsLink || '#'}>My Projects</a>
          </li>
          <li>
            <a href={link || '#'}>Contact</a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Navbar;