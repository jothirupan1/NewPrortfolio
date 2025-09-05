import React from 'react'
import jj1 from  "../assets/jj1.png"
import jj2 from  "../assets/jj2.png"
import jj3 from  "../assets/jj3.png"


function Projects() {
  return (
   <div style={{ minHeight: "100vh" }} id="projects">
  <h1 className="text-center mt-5 pt-5">Projects</h1>
  <p className="text-center text-muted">My Creations</p>

  <div className="container">
    <div className="row justify-content-center">
      {/* First row - 2 cards */}
      <div className="col-md-6 col-lg-5 mb-4">
        <div className="card shadow rounded-3" style={{ width: "100%" }}>
          <img src={jj1} alt="" />
          <h6 className="text-muted text-center pt-1">E-Commerce Application
</h6>
        </div>
      </div>
      <div className="col-md-6 col-lg-5 mb-4">
        <div className="card shadow rounded-3" style={{ width: "100%" }}>
          <img src={jj2} alt="" />
          <h6 className="text-muted text-center pt-1">Authentication system</h6>
        </div>
      </div>
    </div>

    {/* Second row - remaining cards */}
    <div className="row justify-content-center">
      <div className="col-md-6 col-lg-5 mb-4">
        <div className="card shadow rounded-3" style={{ width: "100%" }}>
          <img src={jj3} alt="" />
          <h6 className="text-muted text-center pt-1">Flight Booking Application</h6>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Projects