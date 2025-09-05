import React from 'react'

function Footer() {
  return (
    <footer className="bg-light text-center py-4 mt-5">
      <h3 className='text-center fw-bold '>Jothirupan</h3>
  <div className="container">
    {/* Social Icons */}
    <div className="mb-3 mt-5">
      <a
        href="https://wa.me/916379839172"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          color: "white",
          textDecoration: "none",
          fontSize: "20px"
        }}
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      <a
        href="mailto:jothirupand@gmail.com"
        className="mx-2"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#0072C6",
          color: "white",
          textDecoration: "none",
          fontSize: "18px"
        }}
      >
        <i className="fas fa-envelope"></i>
      </a>

      <a
        href="https://linkedin.com/in/jothirupan-d-47a539294"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#0A66C2",
          color: "white",
          textDecoration: "none",
          fontSize: "18px"
        }}
      >
        <i className="fab fa-linkedin-in"></i>
      </a>

      <a
        href="https://github.com/jothirupan1"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#333",
          color: "white",
          textDecoration: "none",
          fontSize: "18px"
        }}
      >
        <i className="fab fa-github"></i>
      </a>
    </div>

    {/* Footer Text */}
    <p className="mb-0">
      © {new Date().getFullYear()} Jothirupan. All Rights Reserved.
    </p>
  </div>
</footer>

  )
}

export default Footer