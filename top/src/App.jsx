 import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation speed
      once: true,      // run only once (set false if you want repeat)
      offset: 100,     // how far before the element triggers
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div data-aos="fade-down">
        <Hero />
      </div>
     <div data-aos="fade-right">
        <About />
      </div>
       <div data-aos="fade-down">
        <Skills />
      </div>
       <div data-aos="fade-down">
        <Projects />
      </div>
       <div data-aos="fade-up">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
