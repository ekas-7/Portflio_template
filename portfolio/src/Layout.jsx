import React, { useRef } from 'react';
import Header from './components/Header/Header.jsx';
import About from './components/About/Certifications.jsx';
import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';
import Education from './components/Education/Education.jsx';
import Contact from './components/Contact/Contact.jsx';
import Social from './components/Contact/Social.jsx';
import Home from './components/Home/Home.jsx';

export default function Layout() {
  const aboutRef = useRef(null); // Create a ref for the "About Me" section

  return (
    <div>
      <Header />
      <main>
        <section id="home">
          <Home certificationsRef={aboutRef} /> {/* Pass the ref to Home */}
        </section>
        <section id="about-me" ref={aboutRef}> {/* Assign the ref to the section */}
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills-and-experience">
          <Skills />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Social />
      </main>
    </div>
  );
}
