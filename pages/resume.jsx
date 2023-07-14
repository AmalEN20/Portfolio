import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Amal | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Amal Engulatov</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/amal-engulatov-18b144277/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/AmalEN20"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              <span className="px-1"></span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          I am Amal, a recent graduate of the coding bootcamp at the University
          of Washington. Currently, I am studying programming with a strong
          aspiration to become a full stack developer. Through the bootcamp, I
          gained a solid foundation in both front-end and back-end development,
          equipping me with essential skills and knowledge. To further enhance
          my abilities, I am immersing myself in a comprehensive curriculum that
          covers a wide range of programming concepts. My dedication to
          continuous learning drives me to seek opportunities where I can apply
          my skills and gain real-world experience. I am particularly passionate
          about becoming a full stack developer because it allows me to handle
          both the front-end and back-end aspects of a project. This versatility
          is crucial in creating well-rounded and impactful software solutions.
          Driven by my determination to excel in the field of software
          development, I am committed to honing my skills and expanding my
          knowledge. I actively engage in various projects and seek out
          challenges to continuously improve my abilities. With my strong
          foundation, unwavering drive, and eagerness to learn, I am confident
          that I will make a significant impact in the world of software
          development. I am excited about the opportunities that lie ahead and
          look forward to contributing to the growth and innovation within the
          industry.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Full Stack Wev Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span> Third-party APIs
            <span className="px-2">|</span> JSON
            <span className="px-2">|</span> Node.js
            <span className="px-2">|</span> Object-oriented programming (OOP)
            <span className="px-2">|</span> Express servers
            <span className="px-2">|</span> ORM (Sequelize)
            <span className="px-2">|</span> framework (Handlebars.js)
            <span className="px-2">|</span> MongoDB, MySQL
            <span className="px-2">|</span> Progressive web apps (PWAs)
            <span className="px-2">|</span> React
            <span className="px-2">|</span> MERN
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}


        {/* Personal Experience */}


        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5>

        {/* Experience */}
      </div>
    </>
  );
};

export default resume;
