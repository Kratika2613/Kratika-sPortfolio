import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import girlImage from '../assets/girl.png';

const AboutMe = () => {
  return (
    <div id="about-me" className="p-10 bg-black min-h-screen flex flex-col items-center justify-center" style={{ padding: '2rem' }}> {/* Set background to black */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-shrink-0" style={{ padding: '1rem' }}> {/* Added padding */}
          <div className="w-96 h-96 rounded-full shadow-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg" style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)' }}> {/* Glass effect with black drop shadow */}
            <img src={girlImage} alt="Girl" className="w-full h-full rounded-full" />
          </div>
        </div>
        <div className="text-center lg:text-left lg:ml-8" style={{ padding: '1rem' }}> {/* Added padding */}
          <h2 className="text-4xl font-bold text-[#EAAA00] font-poppins hover:text-gray-700">About Me</h2> {/* Mustard yellow color */}
          <p className="text-xl text-white mt-4 font-poppins"> {/* Updated to white color */}
            Hi, I'm Kratika Pachori, a fresher software developer with a passion for creating innovative solutions and learning new technologies. I thrive in dynamic environments and am eager to contribute to collaborative projects that push the boundaries of software development.
          </p>
          <p className="text-xl text-[#EAAA00] mt-2 font-poppins"> {/* Mustard yellow color */}
            <strong className="text-white hover:text-gray-700">Technical Skills and Expertise:</strong> I have a strong foundation in front-end development, particularly with React. I'm proficient in JavaScript, HTML, CSS, and have experience with tools like Git, GitHub, and Visual Studio Code.
          </p>
          <p className="text-xl text-[#EAAA00] mt-2 font-poppins"> {/* Mustard yellow color */}
            <strong className="text-white hover:text-gray-700">Projects and Experience:</strong> Some of my notable projects include a personal portfolio website, a weather app using React, and several coding challenges on LeetCode. These projects have helped me hone my skills and gain practical experience.
          </p>
          <p className="text-xl text-[#EAAA00] mt-2 font-poppins"> {/* Mustard yellow color */}
            <strong className="text-white hover:text-gray-700">Hobbies and Interests:</strong> Outside of coding, I enjoy reading tech blogs, participating in hackathons, and exploring new places. I also love painting and playing chess.
          </p>
          <p className="text-xl text-[#EAAA00] mt-2 font-poppins"> {/* Mustard yellow color */}
            <strong className="text-white hover:text-gray-700">Career Goals:</strong> My professional aspiration is to become a full-stack developer and work on impactful projects that make a difference. I'm looking forward to continuous learning and growth in my career.
          </p>
          <p className="text-xl text-[#EAAA00] mt-2 font-poppins"> {/* Mustard yellow color */}
            <strong className="text-white hover:text-gray-700">Personal Story:</strong> One of my favorite experiences was participating in a hackathon where my team and I developed a solution to help local businesses during the pandemic. This experience taught me the importance of teamwork, resilience, and the impact of technology on society.
          </p>
        </div>
      </div>
      <div className="mt-8 animate-bounce">
        <a href="#projects" className="flex items-center justify-center w-12 h-12 bg-[#EAAA00] rounded-full text-black">
          <FaArrowDown size={24} />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
