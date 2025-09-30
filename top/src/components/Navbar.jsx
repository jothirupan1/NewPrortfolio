import React, { useEffect, useState, useRef } from "react";

const sections = ["home", "about", "skill", "projects", "contact"];
const NAVBAR_HEIGHT = 70; // Fixed height

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: `-${NAVBAR_HEIGHT}px 0px -${window.innerHeight - NAVBAR_HEIGHT}px 0px` }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const closeNavbar = () => {
    if (navbarRef.current && window.bootstrap) {
      const bsCollapse = window.bootstrap.Collapse.getInstance(navbarRef.current);
      if (bsCollapse) bsCollapse.hide();
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top fw-bold transition-navbar ${
        scrolled ? "navbar-scrolled glass-navbar" : "bg-transparent"
      }`}
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div
        className="container d-flex align-items-center justify-content-between"
        style={{ height: "100%" }}
      >
        <a href="#home" className="navbar-brand fw-bold fs-4">
          JD<span className="text-primary">.</span>
        </a>

        <button
          className="navbar-toggler shadow-sm rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          ref={navbarRef}
          className="collapse navbar-collapse justify-content-end fw-semibold"
          id="navMenu"
        >
          <ul className="navbar-nav">
            {sections.map((item) => (
              <li className="nav-item pe-4" key={item}>
                <a
                  href={`#${item}`}
                  className={`nav-link ${
                    activeSection === item
                      ? "active-link text-primary"
                      : "text-dark"
                  }`}
                  onClick={closeNavbar}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>
        {`
          .transition-navbar {
            transition: all 0.3s ease;
          }
          .glass-navbar {
            backdrop-filter: blur(10px);
            background-color: rgba(255, 255, 255, 0.8) !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          }
          .navbar-nav .nav-link {
            position: relative;
            transition: all 0.3s ease;
          }
          .navbar-nav .nav-link::after {
            content: "";
            position: absolute;
            width: 0%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #0d6efd;
            transition: width 0.3s;
          }
          .navbar-nav .nav-link:hover::after,
          .navbar-nav .active-link::after {
            width: 100%;
          }
          .navbar-toggler {
            border: none;
            transition: transform 0.3s;
          }
          .navbar-toggler:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
