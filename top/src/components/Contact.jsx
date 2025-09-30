import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1emgjan",
        "template_wyvy6t6",
        form.current,
        "wb_zWqnKXFodqacS_"
      )
      .then(() => {
        alert("😁 Message sent successfully!");
      })
      .catch((error) => {
        alert("😞 Failed to send message: " + error.text);
      });
  };

  return (
    <div id="contact" className="mt-5 pt-5" style={{ minHeight: "100vh" }}>
      <div className="container mt-5">
        <h1 className="text-center">Get in touch</h1>
        <p className="text-muted text-center mb-5">
          Would you like to have conversation with me
        </p>
        <div className="row justify-content-center align-items-center g-4">
          {/* Left side stacked cards */}
          <div className="col-lg-4 d-flex flex-column align-items-center gap-4">
            <div
              className="card rounded-4 shadow p-4 text-center"
              style={{ width: "14rem", height: "10rem" }}
            >
              {" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jothirupand@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <i
                  className="fa-solid fa-envelope fa-bounce fa-2x mb-3"
                  style={{ color: "#000000" }}
                ></i>
                <h5 className="fw-bold text-dark">Message me</h5>
                <p className="text-muted small">I’d like to hear from you</p>
              </a>{" "}
            </div>

            <div
              className="card rounded-4 shadow p-4 text-center"
              style={{ width: "14rem", height: "10rem" }}
            >
              <a
                href="https://wa.me/916379839172"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <i
                  className="fa-brands fa-square-whatsapp  fa-shake fa-2x mb-3"
                  style={{ color: "#22ff05" }}
                ></i>
                <h4 className="fw-bold text-dark">What's app</h4>
                <p className="text-muted small">+91 6379839172</p>
              </a>
            </div>

            <div
              className="card rounded-4 shadow p-4 text-center"
              style={{ width: "14rem", height: "10rem" }}
            >
              <a
                href="https://www.linkedin.com/in/jothirupan-d-47a539294"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <i
                  className="fa-brands fa-linkedin fs-bounce fa-2x mb-3 fa-bounce fa-2x mb-3 "
                  style={{ color: "#0077B5" }}
                ></i>
                <h4 className="fw-bold text-dark">Linkedin</h4>

                <p className="text-muted small mb-0">Jothirupan D</p>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="card shadow-lg p-4 rounded-4">
              <h2
                className="text-center fw-bold mb-4"
                style={{ color: "#090909ff" }}
              >
                Get in touch
              </h2>

              <form
                ref={form}
                onSubmit={sendEmail}
                className="d-flex flex-column gap-3"
              >
                <input
                  type="text"
                  name="title" // matches {{title}}
                  placeholder="Subject"
                  required
                  className="form-control rounded-3 border-0 shadow-sm"
                />

                <input
                  type="text"
                  name="name" // matches {{name}}
                  placeholder="Your Name"
                  required
                  className="form-control rounded-3 border-0 shadow-sm"
                />

                <input
                  type="email"
                  name="email" // matches {{email}}
                  placeholder="Your Email"
                  required
                  className="form-control rounded-3 border-0 shadow-sm"
                />

                <textarea
                  name="message" // matches {{message}}
                  placeholder="Your Message"
                  required
                  className="form-control rounded-3 border-0 shadow-sm"
                  rows="5"
                />

                <button
                  type="submit"
                  className="btn btn-outline-dark rounded-3 shadow-sm fw-bold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
