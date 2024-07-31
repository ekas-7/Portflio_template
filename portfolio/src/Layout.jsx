import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';
import Education from './components/Education/Education.jsx';
import Contact from './components/Contact/Contact.jsx';
import Social from './components/Contact/Social.jsx';

export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* This is where nested routes will be rendered */}
      </main>
      <About />
      <Projects />
      <Skills />
      <Education/>
      <Contact />
      <Social />
    </div>
  );
}
