import React from "react";
import Image from "next/image";
import Link from "next/link";
import propertyImg from "../public/assets/projects/cal.png";
import ProjectItem from "./ProjectItem";
import cryptoImg from '../public/assets/projects/find-jobs.png'
import netflixImg from '../public/assets/projects/wear.png'
import twitchImg from '../public/assets/projects/matchmyneeds.png'

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What i've Build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Calculator"
            backgroundImg={propertyImg}
            projectUrl="/calculator"
          />
          <ProjectItem
            title="JobsPlus"
            backgroundImg={cryptoImg}
            projectUrl="/jobsplus"
          />
          <ProjectItem
            title="WearYouWander"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
          />
          <ProjectItem
            title="MatchMyNeeds"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
          />
        </div>
      </div>
    </div>
  );
};
 
export default Projects;
