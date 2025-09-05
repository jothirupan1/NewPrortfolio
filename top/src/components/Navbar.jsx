import React from "react";
import { Link } from "react-router-dom"; // Only if you want React Router links

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        {/* Brand */}
        <a href="#" className="navbar-brand fw-bold" style={{ fontStyle: "italic" }}>
          JD
        </a>

        {/* Toggler button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu items */}
        <div className="collapse navbar-collapse justify-content-end fw-semibold" id="navMenu">
          <ul className="navbar-nav">
            <li className="nav-item pe-4">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item pe-4">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item pe-4">
              <a href="#skill" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item pe-4">
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item pe-4">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
