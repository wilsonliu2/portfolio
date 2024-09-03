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
        description="Primarily working on the front-end for cutting-edge AI applications."
      />
      <ExperienceCard
        company="CUNY Tech Prep"
        date="Jul 2023 - Present"
        title="Software Development Fellow"
        description="Working on and learning about full-stack web applications while mastering industry best practices."
      />
      <ExperienceCard
        company="The TOW Foundation"
        date="Jun 2023 - Aug 2024"
        title="Research Assistant"
        description="Collaborated with a professor to program an interactive, multi-layered health map of NYC."
      />
      <ExperienceCard
        company="Brooklyn College"
        date="Oct 2022 - May 2024"
        title="Computer Science Tutor"
        description="Tutored students in programming concepts, improving their problem-solving and coding skills."
      />
    </motion.section>
  );
};

export default Experience;
