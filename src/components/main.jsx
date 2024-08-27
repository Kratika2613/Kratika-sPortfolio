import React from 'react';
import Nav from './nav';
import Hero from './hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills' 
import Contact from './Contact';

const Main = () => {
  return (
    <div className="bg-indigo-600">
      <Nav />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Main;
