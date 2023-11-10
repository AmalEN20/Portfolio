
import Image from 'next/image';
import React from "react";
import Profileimg from '../public/assets/Profile.jpg';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I AM</h2>
          <p className="py-2 text-gray-600">
          I am passionate about front-end development, which complements my goal of becoming a full stack developer. My focus on front-end skills enhances my ability to create impactful software solutions. Driven to excel in software development, I am dedicated to refining my abilities and acquiring new knowledge. I actively take on diverse projects, embracing challenges to improve my front-end skills. Confident in my foundational knowledge and eagerness to learn, I am excited to contribute significantly to software development and industry innovation.{" "}
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={Profileimg}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
