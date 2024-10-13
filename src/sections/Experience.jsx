import React from "react";
import Divider from "../components/Divider";
import ExperienceCard from "../components/experience/ExperienceCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="p-5 pt-11"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Divider text="experience" />

      <ExperienceCard
        company="TipTop Technologies"
        date="Aug 2024 - Present"
        title="Software Engineer Intern"
        description="Developing frontend features using React and Tailwind, collaborating with cross-functional teams."
      />
      <ExperienceCard
        company="CUNY Tech Prep"
        date="Jul 2024 - Present"
        title="Software Development Fellow"
        description="Building full-stack apps with React, Node.js, and PostgreSQL, following Agile best practices."
      />
      <ExperienceCard
        company="The TOW Foundation"
        date="Jun 2024 - Aug 2024"
        title="Research Assistant"
        description="Created an interactive NYC health map using JavaScript and Leaflet."
      />
      <ExperienceCard
        company="Brooklyn College"
        date="Oct 2022 - Present"
        title="Computer Science Tutor"
        description="Tutored students in Java, OOP, and data structures."
      />
    </motion.section>
  );
};

export default Experience;
