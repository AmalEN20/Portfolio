import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faPython,
  faJava,
  faGithub,
  faAws,
  faDatabase, // Placeholder for MongoDB, confirm the specific icon in your library
} from '@fortawesome/free-brands-svg-icons';


const frontEndSkills = [
  { icon: faHtml5, name: "HTML", color: "#e34c26" },
  { icon: faCss3Alt, name: "CSS", color: "#264de4" },
  { icon: faJsSquare, name: "JavaScript", color: "#f0db4f" },
  { icon: faReact, name: "React", color: "#61dbfb" },
];

const backEndSkills = [
  { icon: faNodeJs, name: "Node.js", color: "#6DB55E" },
];

const databaseSkills = [
  { icon: faDatabase, name: "MongoDB", color: "#4DB33D" },
  // You can add more database skills here
];

const otherSkills = [
  { icon: faGithub, name: "Github", color: "#6e5494" },
];

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        
        <div className='py-4'>
          <h3 className='text-2xl font-semibold'>Frontend</h3>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {frontEndSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
        
        <div className='py-4'>
          <h3 className='text-2xl font-semibold'>Backend</h3>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {backEndSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div className='py-4'>
          <h3 className='text-2xl font-semibold'>Database</h3>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {databaseSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div className='py-4'>
          <h3 className='text-2xl font-semibold'>Others</h3>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {otherSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ skill }) => (
  <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
      <div className='m-auto'>
        <FontAwesomeIcon icon={skill.icon} size="2x" color={skill.color} />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h3>{skill.name}</h3>
      </div>
    </div>
  </div>
);

export default Skills;
