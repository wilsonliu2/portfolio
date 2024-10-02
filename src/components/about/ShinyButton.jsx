import React from "react";
import { motion } from "framer-motion";

const ShinyButton = ({ text, link }) => {
  const ButtonContent = (
    <>
      <span className="linear-mask relative block h-full w-full font-extralight text-neutral-200">
        {text}
      </span>
      <span className="linear-overlay absolute inset-0 block rounded-md p-px" />
    </>
  );

  if (link) {
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
            size: 105,
          },
        }}
        className="radial-gradient relative inline-flex items-center rounded-md px-6 py-2"
      >
        {ButtonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
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
      className="radial-gradient relative rounded-md px-6 py-2"
    >
      {ButtonContent}
    </motion.button>
  );
};

export default ShinyButton;
