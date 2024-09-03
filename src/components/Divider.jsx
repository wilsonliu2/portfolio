import React from "react";
import { motion } from "framer-motion";

const dividerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: "easeInOut",
    },
  },
};

const Divider = ({ text }) => {
  return (
    <motion.div
      className="flex items-center"
      initial="hidden"
      animate="visible"
      variants={dividerVariants}
    >
      <motion.span
        className="text-xl font-thin italic text-neutral-400"
        variants={dividerVariants}
      >
        {"<"}
        {text}
        {" />"}
      </motion.span>
      <motion.div
        className="ml-2 flex-grow border-t border-neutral-500"
        variants={dividerVariants}
      ></motion.div>
    </motion.div>
  );
};

export default Divider;
