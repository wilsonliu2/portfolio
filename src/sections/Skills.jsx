import React, { useRef, useEffect, useState } from "react";
import { FaReact, FaCss3Alt, FaHtml5, FaJs, FaJava } from "react-icons/fa";
import {
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiFramer,
  SiLeaflet,
} from "react-icons/si";
import Divider from "../components/Divider";
import Icon from "../components/skills/Icon";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);
  const [animationTrigger, setAnimationTrigger] = useState(false);

  useEffect(() => {
    if (isInView) {
      setAnimationTrigger(true);
    } else {
      setAnimationTrigger(false);
    }
  }, [isInView]);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="p-5 pt-11">
        <Divider text="proficient skills" />
        <div className="mt-4 flex justify-between">
          {/* Frontend skills */}
          <motion.div
            className="w-1/2 pr-4"
            variants={containerVariants}
            initial="hidden"
            animate={animationTrigger ? "visible" : "hidden"}
          >
            <h3 className="text-lg font-light text-neutral-300">frontend</h3>
            <motion.ul
              className="mt-2 grid grid-cols-2 gap-4 text-neutral-300"
              variants={containerVariants}
              initial="hidden"
              animate={animationTrigger ? "visible" : "hidden"}
            >
              <motion.li variants={itemVariants}>
                <Icon icon={FaHtml5} label="HTML" />
              </motion.li>
              <motion.li variants={itemVariants}>
                <Icon icon={FaCss3Alt} label="CSS" />
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Backend skills */}
          <motion.div
            className="w-1/2 border-l border-neutral-700 pl-4"
            variants={containerVariants}
            initial="hidden"
            animate={animationTrigger ? "visible" : "hidden"}
          >
            <h3 className="text-lg font-light text-neutral-300">backend</h3>
            <motion.ul
              className="mt-2 grid grid-cols-2 gap-4 text-neutral-300"
              variants={containerVariants}
              initial="hidden"
              animate={animationTrigger ? "visible" : "hidden"}
            >
              <motion.li variants={itemVariants}>
                <Icon icon={SiSpringboot} label="Spring Boot" />
              </motion.li>
              <motion.li variants={itemVariants}>
                <Icon icon={SiMysql} label="MySQL" />
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>

        <div className="mt-8 flex justify-between border-t border-neutral-700 pt-8">
          {/* Libraries */}
          <motion.div
            className="w-1/2 pr-4"
            variants={containerVariants}
            initial="hidden"
            animate={animationTrigger ? "visible" : "hidden"}
          >
            <h3 className="text-lg font-light text-neutral-300">libraries</h3>
            <motion.ul
              className="mt-2 grid grid-cols-2 gap-4 text-neutral-300"
              variants={containerVariants}
              initial="hidden"
              animate={animationTrigger ? "visible" : "hidden"}
            >
              <motion.li variants={itemVariants}>
                <Icon icon={FaReact} label="React" />
              </motion.li>
              <motion.li variants={itemVariants}>
                <Icon icon={SiTailwindcss} label="Tailwind CSS" />
              </motion.li>
              <motion.li variants={itemVariants}>
                <Icon icon={SiLeaflet} label="Leaflet" />
              </motion.li>
              <motion.li variants={itemVariants}>
                <Icon icon={SiFramer} label="Framer Motion" />
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Languages */}
          <motion.div
            className="w-1/2 border-l border-neutral-700 pl-4"
            variants={containerVariants}
            initial="hidden"
            animate={animationTrigger ? "visible" : "hidden"}
          >
            <h3 className="text-lg font-light text-neutral-300">languages</h3>
            <motion.ul
              className="mt-2 grid grid-cols-2 gap-4 text-neutral-300"
              variants={containerVariants}
              initial="hidden"
              animate={animationTrigger ? "visible" : "hidden"}
            >
              <motion.li variants={itemVariants}>
                <Icon icon={FaJava} label="Java" />
              </motion.li>
              <motion.li variants={itemVariants}>
                <Icon icon={FaJs} label="JavaScript" />
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
