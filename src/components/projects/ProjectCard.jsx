import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import TechButton from "./TechButton";

const hoverVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

const getRandomColor = () => {
  const greenShades = ["#A7F3D0", "#6EE7B7", "#34D399", "#10B981", "#059669"];

  const grayShades = ["#CBD5E0", "#A0AEC0", "#718096", "#4A5568", "#2D3748"];

  // Pick a random shade of green or gray
  const isGreen = Math.random() > 0.5;
  return isGreen
    ? greenShades[Math.floor(Math.random() * greenShades.length)]
    : grayShades[Math.floor(Math.random() * grayShades.length)];
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
            <TechButton key={index} color={getRandomColor()} label={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
