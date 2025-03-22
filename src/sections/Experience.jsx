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
        date="Aug 2024 - Dec 2024"
        title="Software Engineer Intern"
        description="Developed frontend features with React and Tailwind CSS, contributed backend APIs with Python and Flask, and optimized user experience."
      />
      <ExperienceCard
        company="The TOW Foundation"
        date="Jun 2024 - Aug 2024"
        title="Data Science Research Assistant"
        description="Developed an interactive NYC health map using JavaScript and Leaflet.js, analyzing 20,000+ data points to provide insights for researchers."
      />
      <ExperienceCard
        company="Brooklyn College"
        date="Oct 2022 - Present"
        title="Computer Science Tutor"
        description="Tutored 30+ students per semester in Java, OOP, and data structures, and led exam review sessions."
      />
    </motion.section>
  );
};

export default Experience;
