import React from "react";

function Skills() {
  const skills = {
    Frontend: [
      { name: "HTML", icon: "fa-html5", color: "#e63900" },
      { name: "CSS", icon: "fa-css3-alt", color: "#264de4" },
      { name: "Bootstrap", icon: "fa-bootstrap", color: "#7952b3" },
      { name: "JavaScript", icon: "fa-js", color: "#f0db4f" },
      { name: "React JS", icon: "fa-react", color: "#61dafb" },
    ],
    Backend: [
      { name: "Node JS", icon: "fa-node-js", color: "#3c873a" },
      {
        name: "Express JS",
        img: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png",
      },
      {
        name: "MongoDB",
        img: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
      },
    ],
  };

  const renderSkillsRow = (skillsArray, stagger = false) =>
    skillsArray.map((skill, index) => (
      <div
        key={index}
        className={`skill-card ${stagger && index % 2 === 1 ? "stagger" : ""}`}
      >
        {skill.icon ? (
          <i
            className={`fa-brands ${skill.icon} fa-2x mb-2`}
            style={{ color: skill.color }}
          ></i>
        ) : (
          <img src={skill.img} alt={skill.name} width="40" className="mb-2" />
        )}
        <span className="fw-semibold text-center">{skill.name}</span>
      </div>
    ));

  return (
    <div id="skill" className="container py-5" style={{ minHeight: "90vh" }}>
      <h1 className="text-center fw-bold mb-3 pt-5"> Skills</h1>
      <p className="text-center text-secondary mb-5">My Tech Stack</p>

      {/* Frontend Row */}
      <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
        {renderSkillsRow(skills.Frontend)}
      </div>

      {/* Backend Row with staggered layout */}
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {renderSkillsRow(skills.Backend, true)}
      </div>

      <style>{`
        .skill-card {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #f8f9fa , #e9ecef);
          border-radius: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          background: linear-gradient(135deg, #e0e7ff, #f8f9fa);
        }

        .stagger {
          margin-top: 20px; /* creates staggered effect */
        }

        @media (max-width: 576px) {
          .skill-card {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </div>
  );
}

export default Skills;
