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

const Activities = () => {
  return (
    <motion.section
      id="experience"
      className="p-5 pt-11"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Divider text="activities" />
      <ExperienceCard
        company="Google x BASTA"
        date="Feb 2025 - Present"
        title="Software Engineering Mentee"
        description="Engaging in a 10-week intensive technical mentoring program with a Google Software Engineer."
      />
      <ExperienceCard
        company="CUNY Tech Prep"
        date="Jul 2024 - Present"
        title="Software Engineer Fellow"
        description="Developing full-stack apps with React, Node.js, Express, and MongoDB in a year-long bootcamp program."
      />
      <ExperienceCard
        company="Brooklyn College Computer Science Club"
        date="Oct 2024 - Dec 2024"
        title="Full Stack Developer"
        description="Building and maintaining the club's website using Next.js, TypeScript, Tailwind CSS, and Spring Boot."
      />
      <ExperienceCard
        company="Hackathon Participant"
        date="5 Hackathons Attended"
        title="3x Hackathon Winner"
        description="Participated in 5 hackathons, winning 3 awards."
      />
    </motion.section>
  );
};

export default Activities;
