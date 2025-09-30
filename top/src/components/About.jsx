import React from "react";
import jothi from "../assets/anime.png";

function About() {
  return (
    <div id="about">
      <div className="container py-5">
        <h1 className="text-center fw-bold mb-3 mt-5">About Me</h1>
        <p className="text-center text-secondary mb-5">
          A short introduction about who I am
        </p>

        <div className="row align-items-center">
          {/* Left image section */}
          <div className="col-lg-5 d-flex justify-content-center mb-5 mb-lg-0 ">
            <div className="card shadow rounded-5" style={{ width: "18rem" }}>
              <img src={jothi} alt="" className="rounded-5 img-fluid" />
            </div>
          </div>

          {/* Right text section */}
          <div className="col-lg-7">
            <p className="text-secondary fw-semibold pt-3 lh-lg">
              I’m <span className="fw-bold text-dark">Jothirupan Dhaknamoorthi</span>, a passionate{" "}
              <span className="fw-bold text-dark">Full-Stack Developer</span> with skills in the{" "}
              <span className="text-dark">MERN Stack</span> and front-end technologies like{" "}
              <span className="text-dark">HTML, CSS, Bootstrap</span>. I enjoy building responsive and
              user-friendly web applications, solving problems with clean code, and continuously
              learning to improve my skills. I bring a positive and collaborative approach, and I’m
              excited to contribute to impactful projects in tech.
            </p>

            {/* Three info cards in the same row */}
            <div className="row mt-4 text-center">
              <div className="col-4">
                <div
                  className="card shadow d-flex align-items-center justify-content-center"
                  style={{ height: "7rem", backgroundColor: "white" }}
                >
                  <h3 className="mt-2">
                    <i
                      className="fa-solid fa-face-smile"
                      style={{ color: "#f1e108ff" }}
                    ></i>
                  </h3>
                  <p className="h6">Experience</p>
                  <p className="text-muted fw-semibold" style={{ fontSize: "10px" }}>
                    Fresher
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div
                  className="card shadow d-flex align-items-center justify-content-center"
                  style={{ height: "7rem", backgroundColor: "white" }}
                >
                  <h3 className="mt-2">
                    <i className="fa-solid fa-graduation-cap"></i>
                  </h3>
                  <p className="h6">Degree</p>
                  <p className="text-muted fw-semibold" style={{ fontSize: "10px" }}>
                    BCA
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div
                  className="card shadow d-flex align-items-center justify-content-center"
                  style={{ height: "7rem", backgroundColor: "white" }}
                >
                  <h3 className="mt-2">
                    <i
                      className="fa-solid fa-location-dot"
                      style={{ color: "#74C0FC" }}
                    ></i>
                  </h3>
                  <p className="h6">Location</p>
                  <p className="text-muted fw-semibold" style={{ fontSize: "10px" }}>
                    Erode
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
