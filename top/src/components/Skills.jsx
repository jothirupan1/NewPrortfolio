import React from 'react';

function Skills() {
  return (
    <div id="skill" style={{ width: "100%", minHeight: "100vh", padding: "4rem 0" }}>
      <h1 className="text-center fw-bold " style={{ fontStyle: "initial" }}>
        Skills
      </h1>
       <p className="text-center text-secondary mb-5">My Tech Stack</p>
      <div className="d-flex flex-wrap justify-content-center gap-5 pt-5">
        
        {/* Frontend Card */}
        <div className="card shadow rounded-5 align-items-center gap-3 p-3" style={{ width: "20rem" }}>
          <h4 className="pt-3" style={{ fontStyle: "italic" }}>Frontend Development</h4>

          <div className="d-flex align-items-center gap-2 w-100">
            <i className="fa-brands fa-html5 fa-beat-fade" style={{ color: "#e63900" }}></i>
            <h5 className="mb-0">HTML</h5>
          </div>
          <div className="d-flex align-items-center gap-2 w-100">
            <i className="fa-brands fa-css3-alt fa-beat-fade" style={{ color: "#74C0FC" }}></i>
            <h5 className="mb-0">CSS</h5>
          </div>
          <div className="d-flex align-items-center gap-2 w-100">
            <i className="fa-brands fa-bootstrap fa-beat-fade" style={{ color: "#B197FC" }}></i>
            <h5 className="mb-0">Bootstrap</h5>
          </div>
          <div className="d-flex align-items-center gap-2 w-100">
            <i className="fa-brands fa-js fa-beat-fade" style={{ color: "#FFD43B" }}></i>
            <h5 className="mb-0">JavaScript</h5>
          </div>
          <div className="d-flex align-items-center gap-2 w-100">
            <i className="fa-brands fa-react fa-spin" style={{ color: "#74C0FC" }}></i>
            <h5 className="mb-0">React JS</h5>
          </div>
        </div>

        {/* Backend Card */}
        <div className="card shadow rounded-5 align-items-center gap-3 p-3" style={{ width: "20rem" }}>
          <h4 className="pt-3" style={{ fontStyle: "italic" }}>Backend Development</h4>

          <div className="d-flex align-items-center gap-2 w-100">
            <i className="fab fa-node-js fa-beat-fade" style={{ color: "#3aec09" }}></i>
            <h5 className="mb-0">Node JS</h5>
          </div>
          <div className="d-flex align-items-center gap-2 w-100">
            <img src="https://icon.icepanel.io/Technology/svg/MongoDB.svg" alt="MongoDB"
              className="fa-beat-fade  pe-2" style={{ width: "1.7rem" }} />
            <h5 className="mb-0 ">MongoDB</h5>
          </div>
          <div className="d-flex align-items-center gap-2 w-100">
            <img src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png" alt="Express JS"
              className="fa-beat-fade" style={{ width: "1.2rem" }} />
            <h5 className="mb-0">Express JS</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
