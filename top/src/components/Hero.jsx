



import React, { useState } from "react";
import "./Hero.css";

import jothi from "../assets/new.jpg";

function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="container hero-section min-vh-100 d-flex flex-column justify-content-center mt-5 pt-5"
      id="home"
    >
      <div className="row w-100 align-items-center">
        {/* Image section */}
        <div className="col-lg-6 d-flex flex-column align-items-center order-1 order-lg-2">
          <div className={`wave-ring mb-3 shadow ${hovered ? "active" : ""}`}>
            <img
              src={jothi}
              alt="Portrait of Jothirupan - Fullstack Developer"
              className={`hero-img ${hovered ? "active" : ""}`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
          </div>

          {/* Social Icons */}
          <div className="d-flex justify-content-center gap-4 mt-2">
            <h2>
              <a
                href="https://github.com/jothirupan1"
                aria-label="GitHub Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github text-dark"></i>
              </a>
            </h2>
            <h2>
              <a
                href="https://www.linkedin.com/in/jothirupan-d-47a539294"
                aria-label="LinkedIn Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin text-dark"></i>
              </a>
            </h2>
            <h2>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jothirupand@gmail.com"
                aria-label="Send Email"
                className="text-decoration-none"
              >
                <i className="fa-solid fa-envelope text-dark"></i>
              </a>
            </h2>
          </div>
        </div>

        {/* Text section */}
        <div className="col-lg-6 mb-5 order-2 order-lg-1 text-section">
          <h1 className="display-5 fw-bold fade-in">
            <span className="text-secondary waving-hand"> 👋 </span> I'm
            Jothirupan
          </h1>

          <h3 className="text-dark fw-semibold fade-in delay-1">
            <span className="typing" style={{color:"darkblue"}}>
              a MERN FullStack Developer nice to meet you
            </span>
          </h3>

          <p className="text-muted fade-in delay-2">
            Welcome to my portfolio! I’m a passionate Fullstack Developer who
            loves building clean, responsive, and user-friendly web
            applications. From crafting elegant front-end designs to developing
            efficient back-end systems, I enjoy turning ideas into reality
            through code.
          </p>

          <div className="d-flex flex-column flex-md-row gap-3 fade-in delay-3">
            <a
              href="#contact"
              className="btn btn-outline-dark align-items-center"
            >
              Drop a Message <i className="fa-solid fa-paper-plane"></i>
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn btn-dark align-items-center"
            >
              Download CV <i className="fa-solid fa-download"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="scroll-down text-center mb-4" >
        <a href="#about" aria-label="Scroll to About">
          <i className="fa-solid fa-chevron-down bounce"></i>
        </a>
      </div>
    </div>
  );
}

export default Hero;
