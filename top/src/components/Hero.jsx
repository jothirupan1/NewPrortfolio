import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import jothi from "../assets/new.jpg";

function Hero() {
  return (
    <div className="container hero-section min-vh-100 d-flex align-items-center mt-5" id="home">
      <div className="row w-100 align-items-center">
        
        {/* Image section → first on mobile, second on desktop */}
        <div className="col-lg-6 d-flex flex-column align-items-center order-1 order-lg-2">
          <div className="wave-ring mb-3 shadow">
            <img
              src={jothi}
              alt="Jothirupan"
              style={{
                filter: "grayscale(100%)",
                transform: "scaleX(-1)", // keep face flipped
              }}
            />
          </div>

          {/* Icons centered near the image */}
          <div className="d-flex justify-content-center gap-4 mt-2">
            <h2>
             <a href="https://github.com/jothirupan1"> <i className="fa-brands fa-github text-dark"></i> </a>
            </h2>
            <h2>
                <a
                href="https://www.linkedin.com/in/jothirupan-d-47a539294"
                target="_blank"
                rel="noopener noreferrer"
             
              > <i className="fa-brands fa-linkedin text-dark"></i></a>
            </h2>
            <h2>
               <a href="mailto:jothirupand@gmail.com" className="text-decoration-none">
              <i className="fa-solid fa-envelope text-dark"></i></a>
            </h2>
          </div>
        </div>

        {/* Text section → second on mobile, first on desktop */}
        <div className="col-lg-6 mb-5 order-2 order-lg-1">
          <h1 className="display-5 fw-bold"><span className="text-secondary"> 👋  I'm</span> Jothirupan</h1>
          <h3 className=" text-dark fw-semibold">FullStack Developer</h3>
          <p className="text-muted">
            Welcome to my portfolio! I’m a passionate Fullstack Developer who
            loves building clean, responsive, and user-friendly web
            applications. From crafting elegant front-end designs to developing
            efficient back-end systems, I enjoy turning ideas into reality
            through code. Here, you’ll find a showcase of my projects, skills,
            and journey in the world of web development.
          </p>

          <div className="container">
            <a href="#contact" className="btn btn-outline-dark align-items-center">
              Drop a Message <i className="fa-solid fa-paper-plane"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;
