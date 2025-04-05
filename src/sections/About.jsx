import React from "react";
import { motion } from "framer-motion";
import Introduction from "../components/about/Introduction";
import Socials from "../components/about/Socials";

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
    >
      <motion.div variants={fadeInVariant}>
        <Introduction />
      </motion.div>
      <motion.div
        variants={fadeInVariant}
        className="px-5 font-thin text-neutral-400"
      >
        <p>
          Full-stack web and mobile developer specializing in React and React
          Native.
        </p>
      </motion.div>
      <motion.div variants={fadeInVariant}>
        <Socials />
      </motion.div>
    </motion.section>
  );
};

export default About;
