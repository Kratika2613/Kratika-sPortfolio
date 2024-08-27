import React, { useEffect, useRef } from 'react';
import PasswordImage from '../assets/Password.png';
import youtubeCloneImage from '../assets/Youtube.png';
import aceprrpImage from '../assets/AcePrep.png';

const Projects = () => {
  const projectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pop-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = projectRef.current.querySelectorAll('.project-image');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div id="projects" className="p-10 bg-black min-h-screen" style={{ minHeight: '120vh' }} ref={projectRef}> {/* Set background to black */}
      <h2 className="text-4xl font-bold text-white font-poppins text-center">Projects</h2> {/* Centered and white color */}
      <p className="text-xl text-[#EAAA00] mt-4 font-poppins text-center"> {/* Mustard yellow color and centered */}
        Here are some of the projects I've worked on:
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <div className="w-100 h-80 rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg project-container" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}> {/* Glass effect */}
            <img
              src={PasswordImage}
              alt="Password Generator"
              className="project-image w-full h-full object-cover rounded-lg"
            />
          </div>
          <span className="text-white font-bold mt-2">Password Generator</span> {/* White color */}
        </div>
        <div className="flex flex-col items-center">
          <div className="w-100 h-80 rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg project-container" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}> {/* Glass effect */}
            <img
              src={youtubeCloneImage}
              alt="YouTube Clone"
              className="project-image w-full h-full object-cover rounded-lg"
            />
          </div>
          <span className="text-white font-bold mt-2">YouTube Clone</span> {/* White color */}
        </div>
        <div className="flex flex-col items-center md:col-span-2">
          <div className="w-100 h-80 rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg project-container" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}> {/* Glass effect */}
            <img
              src={aceprrpImage}
              alt="AcePrep"
              className="project-image w-full h-full object-cover rounded-lg"
            />
          </div>
          <span className="text-white font-bold mt-2">AcePrep</span> {/* White color */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
