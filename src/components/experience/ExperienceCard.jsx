import React from "react";
import { motion } from "framer-motion";

const hoverVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const ExperienceCard = ({ company, date, title, description }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      variants={hoverVariants}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="radial-gradient relative my-4 flex justify-between rounded-md p-5"
    >
      <div className="w-1/2">
        {/* Company */}
        <h3 className="linear-mask text-base tracking-wide text-neutral-200">
          {company}
        </h3>
        {/* Description */}
        <p className="mt-2 text-sm font-thin text-neutral-400">{description}</p>
      </div>

      <div className="w-1/2 text-right">
        {/* Title */}
        <h3 className="linear-mask text-base tracking-wide text-neutral-200">
          {title}
        </h3>
        {/* Date */}
        <p className="text-sm font-extralight text-neutral-400">{date}</p>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
