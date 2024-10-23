import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/projects/ProjectCard";
import Divider from "../components/Divider";
import cunyCompass from "../assets/cuny-compass.png";
import nycHealthMap from "../assets/nyc-health-map.png";
import wander from "../assets/wander.png";
import ecoisland from "../assets/ecoisland.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="p-5 pt-11"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Divider text="projects" />
      <ProjectCard
        image={ecoisland}
        title="EcoIsland"
        description="A reusable food container tracking system for Governors Island, built using Next.js, Supabase, and ShadcnUI. Developed at the Fitch Codeathon to track container usage and reduce environmental impact."
        technologies={["Next.js", "Supabase", "ShadcnUI", "TypeScript"]}
        repoLink="https://github.com/dchen024/fitch-hackathon-fall-24"
        demoLink="https://ecoisland.vercel.app/"
      />
      <ProjectCard
        image={wander}
        title="Wander"
        description="A decentralized travel-sharing platform built using React and MongoDB, winning Best Use of MongoDB Atlas at Cornell's BigRed//Hacks."
        technologies={["Pinata Cloud", "Google Maps API", "MongoDB"]}
        repoLink="https://github.com/wilsonliu2/wander"
        demoLink="https://devpost.com/software/wander-rs9m76"
      />
      <ProjectCard
        image={cunyCompass}
        title="LA'CUNY Compass"
        description="A hackathon project providing personalized CUNY resources with AI, awarded the Data Science Award."
        technologies={["React", "OpenAI API", "Tailwind CSS"]}
        repoLink="https://github.com/crosve/CTP-Hack"
        demoLink="https://ctp-hack.vercel.app/"
      />
      <ProjectCard
        image={nycHealthMap}
        title="NYC Health Map"
        description="An interactive health data map of NYC developed using JavaScript and Leaflet, created for a research project."
        technologies={["JavaScript", "D3", "Leaflet"]}
        repoLink="https://github.com/wilsonliu2/nyc-health-map"
        demoLink="https://wilsonliu2.github.io/nyc-health-map/"
      />
    </motion.section>
  );
};

export default Projects;
