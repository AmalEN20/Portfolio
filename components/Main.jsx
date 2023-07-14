import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w[1240px] w-full h-full p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]"> Amal </span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full Stack Web Developer</h1>
          <p className="oy-4 text-gray-600 max-w[70%] m-auto">
            I am an entry-level full stack web developer, and my journey begins
            with a strong motivation to succeed in this exciting field. While I
            may not have professional experience yet, my determination to learn
            and grow fuels my desire to excel. I have built a solid foundation
            in web development and continue to expand my knowledge with an
            insatiable curiosity. HTML, CSS, and JavaScript are familiar
            languages to me, and I am eager to explore frameworks and libraries
            that enhance my skills. With a positive mindset and a can-do
            attitude, I embrace challenges and tackle them head-on. I am fully
            committed to gaining practical experience and contributing to web
            development projects. My work ethic and proactive approach define my
            dedication to becoming a proficient full stack web developer. I am
            excited about the endless possibilities in this field and believe
            that my motivation and passion will pave the way for my success and
            growth.
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
            <a href="/resume"
              target="_blank"
              rel="noreferrer">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
            </a>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
