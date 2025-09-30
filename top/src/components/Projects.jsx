import React from "react";
import jj1 from "../assets/jj1.png";
import jj2 from "../assets/jj2.png";
import jj3 from "../assets/jj3.png";

function Projects() {
  const projectData = [
    { img: jj1, title: "E-Commerce Application" },
    { img: jj2, title: "Authentication System" },
    { img: jj3, title: "Flight Booking Application" },
  ];

  return (
    <div id="projects" className="py-5 pt-5 " >
      <h1 className="text-center fw-bold"> Projects</h1>
      <p className="text-center text-muted mb-5">My Creations</p>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {projectData.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card project-card shadow border-0 rounded-4 overflow-hidden">
                <div className="image-container">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="card-img-top"
                  />
                  <div className="overlay d-flex align-items-center justify-content-center">
                    <h5 className="text-white text-center">{project.title}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styling */}
      <style>{`
        .project-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.2);
        }
        .image-container {
          position: relative;
        }
        .image-container img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 1rem;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.6);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 1rem;
        }
        .image-container:hover .overlay {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default Projects;
