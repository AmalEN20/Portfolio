import React from "react";

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
            // I am not your normal developer
          </p>
          <p className="py-2 text-gray-600">
            I am Amal, a recent graduate of the coding bootcamp at the
            University of Washington. Currently, I am studying programming with
            a strong aspiration to become a full stack developer. Through the
            bootcamp, I gained a solid foundation in both front-end and back-end
            development, equipping me with essential skills and knowledge. To
            further enhance my abilities, I am immersing myself in a
            comprehensive curriculum that covers a wide range of programming
            concepts. My dedication to continuous learning drives me to seek
            opportunities where I can apply my skills and gain real-world
            experience.{" "}
          </p>
          <p className="py-2 text-gray-600">
            I am particularly passionate about becoming a full stack developer
            because it allows me to handle both the front-end and back-end
            aspects of a project. This versatility is crucial in creating
            well-rounded and impactful software solutions. Driven by my
            determination to excel in the field of software development, I am
            committed to honing my skills and expanding my knowledge. I actively
            engage in various projects and seek out challenges to continuously
            improve my abilities. With my strong foundation, unwavering drive,
            and eagerness to learn, I am confident that I will make a
            significant impact in the world of software development. I am
            excited about the opportunities that lie ahead and look forward to
            contributing to the growth and innovation within the industry.
          </p>
          <a
            href="https://github.com/AmalEN20"
            target="_blank"
            rel="noreferrer"
          >
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </a>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
