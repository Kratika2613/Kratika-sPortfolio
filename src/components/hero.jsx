import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiOutlineDocumentText } from 'react-icons/hi';
import profileImage from '../assets/kratika pachori.jpeg';

const Hero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    imageRef.current.classList.add('animate-flip');
    const timer = setTimeout(() => {
      imageRef.current.classList.remove('animate-flip');
    }, 2000); // Duration of the animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="home" className="flex flex-col items-center justify-center p-8 pt-16 bg-black min-h-screen">
      <div className="flex flex-col items-start lg:flex-row lg:justify-between w-full max-w-6xl">
        <div className="flex flex-col items-start lg:items-start lg:w-1/3 text-left lg:text-left space-y-8 mb-12 lg:mb-0 lg:mr-32">
          <p className="text-3xl text-white font-open-sans">I'm</p>
          <h1 className="text-8xl lg:text-7xl font-bold text-[#EAAA00] font-oswald">KRATIKA</h1>
          <h1 className="text-8xl lg:text-7xl font-bold text-[#EAAA00] font-oswald underline">PACHORI</h1>
          <p className="text-3xl lg:text-4xl text-white font-open-sans">Front End Developer</p>
          <p className="text-2xl text-white font-open-sans">
            I am a fresher software developer with a passion for creating innovative solutions and learning new technologies.
          </p>
        </div>
        <div className="lg:w-1/3 flex justify-center lg:justify-center mt-8 lg:mt-0">
          <div className="relative">
            <div className="w-[400px] h-[400px] lg:w-[400px] lg:h-[400px] rounded-full shadow-lg border-4 border-[#EAAA00] bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg" style={{ boxShadow: '0 8px 16px rgba(255, 255, 255, 0.5)' }}>
              <img ref={imageRef} src={profileImage} alt="Kratika Pachori" className="w-full h-full rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start lg:items-start lg:w-1/3 text-left lg:text-left space-y-8 mt-12 lg:mt-0 lg:ml-32">
          <h2 className="text-5xl font-bold text-[#EAAA00] font-poppins">About Me</h2>
          <p className="text-2xl text-white font-open-sans">I am committed to continuous learning and growth in the tech industry.</p>
          <a href="#about-me" className="mt-4 px-8 py-3 bg-[#EAAA00] text-black rounded-full transition duration-300 font-open-sans shadow-lg transform hover:translate-y-1 hover:shadow-2xl hover:scale-105 button-3d">Show More</a>
          <div className="mt-4 flex justify-start space-x-4">
            <div className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300">
              <a href="https://www.linkedin.com/in/kratika2610/" className="text-gray-600 hover:text-gray-800"><FaLinkedin size={35} /></a>
            </div>
            <div className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300">
              <a href="https://leetcode.com/u/kratika_code1326/" className="text-gray-600 hover:text-gray-800"><SiLeetcode size={35} /></a>
            </div>
            <div className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300">
              <a href="https://drive.google.com/file/d/1kd_9Bhrq4-R62-QJ-wWw5laeBnyo7x7C/view?usp=sharing" className="text-gray-600 hover:text-gray-800"><HiOutlineDocumentText size={35} /></a>
            </div>
            <div className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300">
              <a href="https://github.com/your-github-url" className="text-gray-600 hover:text-gray-800"><FaGithub size={35} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
