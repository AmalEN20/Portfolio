import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w[1240px] w-full h-full p-2 flex justify-center items-center">
        <div>
        <div className="container mx-auto p-4">
    <h1 className="py-4 text-gray-700">
        Hi, I'm <span className="text-[#5651e5]">Amal</span>
    </h1>
    <h1 className="py-2 text-gray-700 typing">A Full Stack Web Developer</h1>
</div>
          <p className="oy-4 text-gray-600 max-w-[100%] m-auto px-4">
          As a University of Washington Coding Bootcamp alumnus, I am a full-stack web developer with a current focus on mastering front-end development. My commitment to creating intuitive and problem-solving designs is matched by a meticulous attention to detail and a quick-witted approach to challenges. Eager to learn and passionate about development, I thrive in both team settings and independent projects. I plan to build a robust foundation in front-end technologies and, upon solidifying my expertise, I intend to expand my skill set to include back-end development, aspiring to deliver comprehensive and innovative web solutions.          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/amal-engulatov-18b144277/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/AmalEN20"
              target="_blank"
              rel="noreferrer">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            </a>
            <a href="https://drive.google.com/file/d/1KR-6SJAq-pBPCAAc7uDeNvQl8NAtutbj/view?usp=sharing"
              target="_blank"
              rel="noreferrer">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
            </a>
            <a href="#contact" >


            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Main;
