import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/projects/ProjectCard";
import Divider from "../components/Divider";
import cunyCompass from "../assets/cuny-compass.png";
import nycHealthMap from "../assets/nyc-health-map.png";
import wander from "../assets/wander.png";
import ecoisland from "../assets/ecoisland.png";
import binyc from "../assets/binyc.png";
import dietfirst from "../assets/diet-first.png";
import taskManager from "../assets/taskManager.png";

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <motion.section id="projects" className="p-5 pt-11">
      <div className="flex items-center justify-between">
        <Divider text="projects" />
        <button
          onClick={handleToggle}
          className="font-thin text-neutral-400 hover:underline focus:outline-none"
        >
          {isExpanded ? "Collapse" : "Expand"}
        </button>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isExpanded
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <ProjectCard
          image={dietfirst}
          title="DietFirst"
          description="Created a personalized diet recommendation app as part of CUNY Tech Prep and a class project. Features include customizable recipe filtering, health progress tracking, and seamless user experience designed to promote healthier lifestyles."
          technologies={[
            "MongoDB",
            "Node.js",
            "Express.js",
            "React.js",
            "Tailwind CSS",
            "Edamam API",
          ]}
          repoLink="https://github.com/DietFirst/DietFirst"
          demoLink="https://dietfirst-frontend.vercel.app/"
        />

        <ProjectCard
          image={binyc}
          title="BINyc"
          description="Created a real-time map using the MERN stack and Leaflet for reporting trash hotspots, enhancing community-driven waste management. Developed at Hack Knight Queens College."
          technologies={[
            "MongoDB",
            "ExpressJS",
            "ReactJS",
            "NodeJS",
            "LeafletJS",
            "Tailwind CSS",
          ]}
          repoLink="https://github.com/Aziiimm/BINyc"
          demoLink="https://devpost.com/software/binyc?ref_content=my-projects-tab&ref_feature=my_projects"
        />
        <ProjectCard
          image={ecoisland}
          title="EcoIsland"
          description="Developed a reusable container tracking system for Governors Island using Next.js and Supabase, promoting sustainability through container usage tracking."
          technologies={["Next.js", "Supabase", "ShadcnUI", "TypeScript"]}
          repoLink="https://github.com/dchen024/fitch-hackathon-fall-24"
          demoLink="https://ecoisland.vercel.app/"
        />
        <ProjectCard
          image={wander}
          title="Wander"
          description="Built a decentralized travel platform with React and MongoDB, featuring personalized travel maps. Won Best Use of MongoDB Atlas at Cornell BigRed//Hacks."
          technologies={[
            "React.js",
            "MongoDB",
            "Node.js",
            "Express.js",
            "Tailwind CSS",
            "Pinata Cloud",
            "Google Maps API",
          ]}
          repoLink="https://github.com/wilsonliu2/wander"
          demoLink="https://devpost.com/software/wander-rs9m76"
        />
        <ProjectCard
          image={cunyCompass}
          title="LA'CUNY Compass"
          description="Created a resource tool for CUNY students using OpenAI and React, awarded Best Use of Data Science at CTP Hacks."
          technologies={[
            "React.js",
            "OpenAI API",
            "Flask",
            "Leaflet.js",
            "Tailwind CSS",
          ]}
          repoLink="https://github.com/crosve/CTP-Hack"
          demoLink="https://ctp-hack.vercel.app/"
        />
        <ProjectCard
          image={nycHealthMap}
          title="NYC Health Map"
          description="Developed an interactive health data map of NYC using JavaScript and Leaflet, highlighting health trends across boroughs."
          technologies={["JavaScript", "D3", "Leaflet", "HTML", "CSS"]}
          repoLink="https://github.com/wilsonliu2/nyc-health-map"
          demoLink="https://wilsonliu2.github.io/nyc-health-map/"
        />
        <ProjectCard
          image={taskManager}
          title="Task Manager"
          description="A simple todo list application built using React and Spring Boot with MySQL for task management. Features include task categorization, marking tasks as completed, and a responsive UI."
          technologies={["React", "Tailwind CSS", "Spring Boot", "MySQL"]}
          repoLink="https://github.com/wilsonliu2/fullstack-todo"
          demoLink="https://github.com/wilsonliu2/fullstack-todo"
        />
      </motion.div>
    </motion.section>
  );
};

export default Projects;
