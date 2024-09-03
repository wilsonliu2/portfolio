import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/projects/ProjectCard";
import Divider from "../components/Divider";
import cunyCompass from "../assets/cuny-compass.png";
import nycHealthMap from "../assets/nyc-health-map.png";

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
        image={cunyCompass}
        title="LA'CUNY Compass"
        description="A group hackathon project that leverages AI to provide personalized navigation and resources for CUNY students."
        technologies={["React", "Tailwind CSS", "Leaflet"]}
        repoLink="https://github.com/crosve/CTP-Hack"
        demoLink="https://ctp-hack.vercel.app/"
      />
      <ProjectCard
        image={nycHealthMap}
        title="NYC Health Map"
        description="In collaboration with a professor, I developed an interactive map to visualize health data across NYC as part of a research project."
        technologies={["JavaScript", "Leaflet", "D3"]}
        repoLink="https://github.com/wilsonliu2/nyc-health-map"
        demoLink="https://wilsonliu2.github.io/nyc-health-map/"
      />
    </motion.section>
  );
};

export default Projects;
