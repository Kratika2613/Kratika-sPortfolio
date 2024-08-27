import React from 'react';
import { FaHtml5, FaCss3Alt, FaGitAlt, FaReact, FaJsSquare, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiFigma } from 'react-icons/si';
import { VscSymbolNamespace } from 'react-icons/vsc'; // Importing ViteJS icon

const Skills = () => {
  return (
    <div id="skills" className="p-10 bg-black min-h-screen"> {/* Set background to black */}
      <h2 className="text-5xl font-bold text-[#EAAA00] font-poppins text-center">Skills</h2> {/* Mustard yellow color */}
      <p className="text-3xl font-bold text-white mt-4 font-poppins text-center">These are my skills</p> {/* White color */}
      <div className="grid grid-cols-3 gap-8 mt-8 text-2xl text-gray-700">
        <div className="flex flex-col items-center hover:text-[#E34F26]">
          <FaHtml5 color="#E34F26" size="80" className="hover:rotate" />
          <span className="text-white font-bold">HTML</span> {/* White color */}
        </div>
        <div className="flex flex-col items-center hover:text-[#1572B6]">
          <FaCss3Alt color="#1572B6" size="80" className="hover:rotate" />
          <span className="text-white font-bold">CSS</span> {/* White color */}
        </div>
        <div className="flex flex-col items-center hover:text-[#38B2AC]">
          <SiTailwindcss color="#38B2AC" size="80" className="hover:rotate" />
          <span className="text-white font-bold">Tailwind CSS</span> {/* White color */}
        </div>
        <div className="flex flex-col items-center hover:text-[#61DAFB]">
          <FaReact color="#61DAFB" size="80" className="hover:rotate" />
          <span className="text-white font-bold">React</span> {/* White color */}
        </div>
        <div className="flex flex-col items-center hover:text-[#F05032]">
          <FaGitAlt color="#F05032" size="80" className="hover:rotate" />
          <span className="text-white font-bold">Git</span> {/* White color */}
        </div>
        <div className="flex flex-col items-center hover:text-[#F24E1E]">
          <SiFigma color="#F24E1E" size="80" className="hover:rotate" />
          <span className="text-white font-bold">Figma</span> {/* White color */}
        </div>
        <div className="flex flex-col items-center hover:text-[#F7DF1E]">
          <FaJsSquare color="#F7DF1E" size="80" className="hover:rotate" />
          <span className="text-white font-bold">JavaScript</span> {/* White color */}
        </div>
        <div className="flex flex-col items-center hover:text-[#339933]">
          <FaNodeJs color="#339933" size="80" className="hover:rotate" />
          <span className="text-white font-bold">Node.js</span> {/* White color */}
        </div>
        <div className="flex flex-col items-center hover:text-[#646CFF]"> {/* ViteJS color */}
          <VscSymbolNamespace color="#646CFF" size="80" className="hover:rotate" /> {/* ViteJS icon */}
          <span className="text-white font-bold">ViteJS</span> {/* White color */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
