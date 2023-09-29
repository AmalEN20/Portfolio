import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w[1240px] w-full h-full p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]"> Amal </span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full Stack Web Developer</h1>
          <p className="oy-4 text-gray-600 max-w[70%] m-auto">
          Passionate and dedicated, I am a full stack web developer with a strong foundation from the Coding Bootcamp at the University of Washington. As an entry-level professional, I bring a hunger for growth and a genuine enthusiasm for learning to every project I undertake. My journey has equipped me with the essential skills in front-end and back-end development, and I am excited to apply my knowledge to create innovative and user-centric solutions. Eager to contribute to collaborative teams and embrace challenges, I am committed to continuously advancing my expertise and making a meaningful impact in the world of web development.
          </p>
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
            <a href="https://drive.google.com/file/d/1nL4uWHJ587iGgwPSW0Jd04aZDceKlUDi/view?usp=sharing"
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
