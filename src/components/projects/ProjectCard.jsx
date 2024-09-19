import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

import TechButton from "./TechButton";

const hoverVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

const getTechColor = (tech) => {
  switch (tech.toLowerCase()) {
    case "react":
      return "#4FD1C5"; // Teal
    case "tailwind css":
      return "#38B2AC"; // Emerald
    case "javascript":
      return "#ECC94B"; // Golden yellow
    case "leaflet":
      return "#48BB78"; // Green
    case "d3":
      return "#2D3748"; // Dark gray
    default:
      return "#A0AEC0"; // Cool gray
  }
};

const ProjectCard = ({
  image,
  title,
  description,
  technologies,
  repoLink,
  demoLink,
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{
        scale: 1.05,
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="radial-gradient group relative my-4 flex rounded-lg p-5"
      variants={hoverVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="relative w-1/3">
        {/* Project screenshot */}
        <img
          src={image}
          className="rounded-lg transition duration-300 ease-in-out group-hover:brightness-50"
        />
        {/* Links */}
        <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-200 transition-colors duration-300 hover:text-neutral-400"
          >
            <FaGithub size={22} />
          </a>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-200 transition-colors duration-300 hover:text-neutral-400"
          >
            <FaExternalLinkSquareAlt size={22} />
          </a>
        </div>
      </div>

      {/* Text content */}
      <div className="w-2/3 pl-5">
        {/* Project title */}
        <h3 className="linear-mask text-lg tracking-wide text-neutral-100">
          {title}
        </h3>
        {/* Description */}
        <p className="mt-2 text-sm font-thin text-neutral-400">{description}</p>
        {/* Tech stack */}
        <div className="mt-2 flex flex-wrap gap-2 font-extralight">
          {technologies.map((tech, index) => (
            <TechButton key={index} color={getTechColor(tech)} label={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
