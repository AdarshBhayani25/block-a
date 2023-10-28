import React from 'react';

const NavBar = ({ navigateTo }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">College Website</a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button
              className="nav-link btn btn-link"
              onClick={() => navigateTo('home')}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link btn btn-link"
              onClick={() => navigateTo('faculty')}
            >
              Faculty
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link btn btn-link"
              onClick={() => navigateTo('lab')}
            >
              Lab
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link btn btn-link"
              onClick={() => navigateTo('class')}
            >
              Class
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
