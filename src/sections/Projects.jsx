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
import signlingo from "../assets/signlingo.png";

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
          {isExpanded ? "Close" : "Expand"}
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
          description="A personalized diet recommendation app with recipe filtering and health tracking."
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
          image={signlingo}
          title="Signlingo"
          description="A web app that teaches ASL through real-time gesture recognition, bite-sized lessons, and gamified experiences. Winner of Best AI Application Built with Cloudflare at HackRU Fall 2024."
          technologies={[
            "Cloudflare",
            "Flask",
            "Next.js",
            "Python",
            "Supabase",
            "Tailwind CSS",
            "WebSockets",
          ]}
          repoLink="https://github.com/birongliu/hackru-fall-2024"
          demoLink="https://devpost.com/software/signlino"
        />

        <ProjectCard
          image={binyc}
          title="BINyc"
          description="Real-time map for reporting trash hotspots, built with the MERN stack and Leaflet to improve waste management."
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
          description="A container tracking system for Governors Island using Next.js and Supabase to promote sustainability."
          technologies={["Next.js", "Supabase", "ShadcnUI", "TypeScript"]}
          repoLink="https://github.com/dchen024/fitch-hackathon-fall-24"
          demoLink="https://ecoisland.vercel.app/"
        />

        <ProjectCard
          image={wander}
          title="Wander"
          description="Decentralized travel platform with personalized travel maps. Awarded Best Use of MongoDB Atlas at Cornell BigRed//Hacks."
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
          description="Resource tool for CUNY students using OpenAI and React, awarded Best Use of Data Science at CTP Hacks."
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
          description="Interactive health data map for NYC using JavaScript, Leaflet, and Python to highlight health trends across boroughs."
          technologies={[
            "JavaScript",
            "D3",
            "Leaflet",
            "HTML",
            "CSS",
            "Python",
          ]}
          repoLink="https://github.com/wilsonliu2/nyc-health-map"
          demoLink="https://wilsonliu2.github.io/nyc-health-map/"
        />

        <ProjectCard
          image={taskManager}
          title="Task Manager"
          description="Simple to-do list app built with React and Spring Boot. Features task categorization, completion tracking, and a responsive UI."
          technologies={["React", "Tailwind CSS", "Spring Boot", "MySQL"]}
          repoLink="https://github.com/wilsonliu2/fullstack-todo"
          demoLink="https://github.com/wilsonliu2/fullstack-todo"
        />
      </motion.div>
    </motion.section>
  );
};

export default Projects;
