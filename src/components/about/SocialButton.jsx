import React from "react";
import { motion } from "framer-motion";

const SocialButton = ({ link, icon: Icon }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="radial-gradient relative flex items-center justify-center rounded-md p-2"
    >
      <Icon className="text-xl text-neutral-200" />
      <span className="linear-overlay absolute inset-0 block rounded-md p-px" />
    </motion.a>
  );
};

export default SocialButton;
