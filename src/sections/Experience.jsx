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
        description="Developed frontend using React and Tailwind, contributed to backend with Python Flask, and optimized UX."
      />
      <ExperienceCard
        company="Brooklyn College"
        date="Oct 2024 - Present"
        title="Computer Science Tutor"
        description="Tutored over 40 students per semester in Java, OOP, and data structures, leading exam review sessions."
      />
      <ExperienceCard
        company="The TOW Foundation"
        date="Jun 2024 - Aug 2024"
        title="Research Assistant"
        description="Developed an interactive NYC health map with JavaScript and Leaflet, presenting data insights to academics."
      />
    </motion.section>
  );
};

export default Experience;
