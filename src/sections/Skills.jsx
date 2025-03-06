import React, { useRef, useEffect, useState } from "react";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiFramer,
  SiLeaflet,
  SiPostgresql,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiNextdotjs,
  SiFlask,
  SiTypescript,
  SiPython,
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
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    if (isInView) {
      setAnimationTrigger(true);
    } else {
      setAnimationTrigger(false);
    }
  }, [isInView]);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section id="skills" ref={sectionRef}>
      <div className="p-5 pt-11">
        <div className="flex items-center justify-between">
          <Divider text="proficient skills" />
          <button
            onClick={handleToggle}
            className="font-thin text-neutral-400 hover:underline focus:outline-none"
          >
            {isExpanded ? "Close" : "Expand"}
          </button>
        </div>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={
            isExpanded
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="mt-4 flex justify-between">
            {/* Frontend Development */}
            <motion.div
              className="w-1/2 pr-4"
              variants={containerVariants}
              initial="hidden"
              animate={animationTrigger ? "visible" : "hidden"}
            >
              <h3 className="text-lg font-light text-neutral-400">
                Frontend Development
              </h3>
              <motion.ul
                className="mt-2 grid grid-cols-2 gap-4 text-neutral-300"
                variants={containerVariants}
              >
                <motion.li variants={itemVariants}>
                  <Icon icon={FaReact} label="React.js" />
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Icon icon={SiNextdotjs} label="Next.js" />
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Icon icon={SiTailwindcss} label="Tailwind CSS" />
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Icon icon={SiFramer} label="Framer Motion" />
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Icon icon={FaHtml5} label="HTML" />
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Icon icon={FaCss3Alt} label="CSS" />
                </motion.li>
              </motion.ul>
            </motion.div>

            {/* Backend & Databases */}
            <motion.div
              className="w-1/2 border-l border-neutral-700 pl-4"
              variants={containerVariants}
              initial="hidden"
              animate={animationTrigger ? "visible" : "hidden"}
            >
              <h3 className="text-lg font-light text-neutral-400">
                Backend & Databases
              </h3>
              <motion.ul
                className="mt-2 grid grid-cols-2 gap-4 text-neutral-300"
                variants={containerVariants}
              >
                <motion.li variants={itemVariants}>
                  <Icon icon={SiSpringboot} label="Spring Boot" />
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Icon icon={SiNodedotjs} label="Node.js" />
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Icon icon={SiExpress} label="Express.js" />
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Icon icon={SiMongodb} label="MongoDB" />
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Icon icon={SiPostgresql} label="PostgreSQL" />
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Icon icon={SiMysql} label="MySQL" />
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Icon icon={SiFlask} label="Flask" />
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Icon icon={SiSupabase} label="Supabase" />
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>

          <div className="mt-8 flex justify-between border-t border-neutral-700 pt-8">
            {/* Tools & Frameworks */}
            <motion.div
              className="w-1/2 pr-4"
              variants={containerVariants}
              initial="hidden"
              animate={animationTrigger ? "visible" : "hidden"}
            >
              <h3 className="text-lg font-light text-neutral-400">
                Tools & Technologies
              </h3>
              <motion.ul
                className="mt-2 grid grid-cols-2 gap-4 text-neutral-300"
                variants={containerVariants}
              >
                <motion.li variants={itemVariants}>
                  <Icon icon={FaGitAlt} label="Git" />
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Icon icon={SiLeaflet} label="Leaflet.js" />
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Icon icon={SiFramer} label="Framer Motion" />
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Icon icon={FaGitAlt} label="GitHub" />
                </motion.li>
              </motion.ul>
            </motion.div>

            {/* Programming Languages */}
            <motion.div
              className="w-1/2 border-l border-neutral-700 pl-4"
              variants={containerVariants}
              initial="hidden"
              animate={animationTrigger ? "visible" : "hidden"}
            >
              <h3 className="text-lg font-light text-neutral-400">
                Programming Languages
              </h3>
              <motion.ul
                className="mt-2 grid grid-cols-2 gap-4 text-neutral-300"
                variants={containerVariants}
              >
                <motion.li variants={itemVariants}>
                  <Icon icon={FaJava} label="Java" />
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Icon icon={FaJs} label="JavaScript" />
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Icon icon={SiTypescript} label="TypeScript" />
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Icon icon={SiPython} label="Python" />
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Icon icon={SiPython} label="SQL" />
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
