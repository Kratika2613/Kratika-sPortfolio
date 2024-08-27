import React, { useState } from 'react';
import { FaKaggle, FaGithub } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 lg:flex-row bg-black z-50"> {/* Set background to black */}
        <div>
          <a href="#home" className="text-white text-3xl flex items-center space-x-2 animate-vibrant font-qwitcher-grypen">
            <FaKaggle /> <span>PORTFOLIO</span>
          </a>
        </div>
        
        <div className="space-x-4">
          <div className="hidden lg:flex space-x-2">
            <Link to="home" smooth={true} duration={500} className="text-white hover:text-[#EAAA00] rounded-full px-5 py-2 text-xl cursor-pointer">Home</Link> {/* Mustard yellow hover color */}
            <Link to="about-me" smooth={true} duration={500} className="text-white hover:text-[#EAAA00] rounded-full px-5 py-2 text-xl cursor-pointer">About Me</Link> {/* Mustard yellow hover color */}
            <Link to="projects" smooth={true} duration={500} className="text-white hover:text-[#EAAA00] rounded-full px-5 py-2 text-xl cursor-pointer">Projects</Link> {/* Mustard yellow hover color */}
            <Link to="skills" smooth={true} duration={500} className="text-white hover:text-[#EAAA00] rounded-full px-5 py-2 text-xl cursor-pointer">Skills</Link> {/* Mustard yellow hover color */}
            <Link to="contact" smooth={true} duration={500} className="text-white hover:text-[#EAAA00] rounded-full px-5 py-2 text-xl cursor-pointer">Contact</Link> {/* Mustard yellow hover color */}
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-16 left-0 right-0 lg:hidden flex flex-col space-y-2 bg-black z-50"> {/* Set background to black */}
          <Link to="home" smooth={true} duration={500} className="text-white hover:text-[#EAAA00] rounded-full px-5 py-2 text-xl cursor-pointer" onClick={() => setIsOpen(false)}>Home</Link> {/* Mustard yellow hover color */}
          <Link to="about-me" smooth={true} duration={500} className="text-white hover:text-[#EAAA00] rounded-full px-5 py-2 text-xl cursor-pointer" onClick={() => setIsOpen(false)}>About Me</Link> {/* Mustard yellow hover color */}
          <Link to="projects" smooth={true} duration={500} className="text-white hover:text-[#EAAA00] rounded-full px-5 py-2 text-xl cursor-pointer" onClick={() => setIsOpen(false)}>Projects</Link> {/* Mustard yellow hover color */}
          <Link to="skills" smooth={true} duration={500} className="text-white hover:text-[#EAAA00] rounded-full px-5 py-2 text-xl cursor-pointer" onClick={() => setIsOpen(false)}>Skills</Link> {/* Mustard yellow hover color */}
          <Link to="contact" smooth={true} duration={500} className="text-white hover:text-[#EAAA00] rounded-full px-5 py-2 text-xl cursor-pointer" onClick={() => setIsOpen(false)}>Contact</Link> {/* Mustard yellow hover color */}
        </div>
      )}
    </>
  );
};

export default Nav;
