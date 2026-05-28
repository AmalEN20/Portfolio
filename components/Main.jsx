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
    <h1 className="py-2 text-gray-700 typing">IT Support Specialist & Web Developer</h1>
</div>
          <p className="oy-4 text-gray-600 max-w-[100%] m-auto px-4">
University of Washington Coding Bootcamp alumnus with a background in front-end development and a passion for solving technical problems. Currently transitioning into IT Support, I bring strong troubleshooting skills, attention to detail, and hands-on experience with HTML, CSS, JavaScript, and React. I am completing the Google IT Support Professional Certificate and eager to help organizations solve technical challenges efficiently.</p>
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
