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
  faDatabase,
  faBootstrap,
  faDAndD,
  faGit,
  faNpm,
  faYarn, // Placeholder for MongoDB, confirm the specific icon in your library
} from '@fortawesome/free-brands-svg-icons';
import { FaAdjust, FaBrain, FaPhone, FaStaylinked } from 'react-icons/fa';


const frontEndSkills = [
  { icon: faHtml5, name: "HTML5", color: "#e34c26" },
  { icon: faCss3Alt, name: "CSS3", color: "#264de4" },
  { icon: faJsSquare, name: "JavaScript", color: "#f0db4f" },
  { icon: faReact, name: "React", color: "#61dbfb" },
  { icon: faBootstrap, name: "Bootstrap", color: "#61dbfb" },
];


const databaseSkills = [
  { icon: faGit, name: "Git", color: "#4DB33D" },
  { icon: faNpm, name: "Npm", color: "#4DB33D" },
  { icon: faYarn, name: "Yarn", color: "#4DB33D" },
  // You can add more database skills here
];

const otherSkills = [
  { icon: FaAdjust, name: "Strong communication", color: "#6e5494" },
  { icon: faGithub, name: "Teamwork", color: "#6e5494" },
  { icon: faGithub, name: "Problem-solving abilities", color: "#6e5494" },
  
];

<i class="fa-thin fa-people-simple"></i>

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
          <h3 className='text-2xl font-semibold'>Tools</h3>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {databaseSkills.map((skill, index) => (
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
