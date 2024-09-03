import React from "react";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const Navigation = () => {
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 mx-auto max-w-screen-sm bg-neutral-950/70 backdrop-blur"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="p-5 py-11 font-thin text-neutral-200">
        <div className="flex justify-end space-x-4">
          <a
            href="#about"
            className="transition-colors duration-300 hover:text-emerald-400"
          >
            about
          </a>
          <a
            href="#experience"
            className="transition-colors duration-300 hover:text-emerald-400"
          >
            experience
          </a>
          <a
            href="#projects"
            className="transition-colors duration-300 hover:text-emerald-400"
          >
            projects
          </a>
          <a
            href="#skills"
            className="transition-colors duration-300 hover:text-emerald-400"
          >
            skills
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Navigation;
