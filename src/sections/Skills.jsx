import { FaReact, FaGitAlt, FaJava } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiFigma,
  SiExpo,
  SiSpringboot,
} from "react-icons/si";
import Divider from "../components/Divider";
import { motion } from "framer-motion";

const skills = [
  { icon: FaReact, label: "React.js", color: "#61DBFB" },
  { icon: FaReact, label: "React Native", color: "#61DBFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#000000" },
  { icon: SiExpo, label: "Expo", color: "#000020" },
  { icon: SiTailwindcss, label: "NativeWind", color: "#38BDF8" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38BDF8" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: FaJava, label: "Java", color: "#f89820" },
  { icon: SiSpringboot, label: "Spring Boot", color: "#6DB33F" },
  { icon: SiFigma, label: "Figma", color: "#F24E1E" },
  { icon: FaGitAlt, label: "Git", color: "#F1502F" },
];

const Skills = () => {
  return (
    <section id="skills" className="p-5 pt-11">
      <Divider text="Main Technologies" />
      <motion.ul
        className="mt-6 grid grid-cols-2 gap-4 text-neutral-300 sm:grid-cols-3 md:grid-cols-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
          },
        }}
      >
        {skills.map(({ icon: IconComp, label, color }) => (
          <motion.li
            key={label}
            className="relative flex flex-col items-center justify-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 text-center shadow-[0_0_6px_rgba(16,185,129,0.08)] transition duration-300 before:absolute before:inset-0 before:z-0 before:rounded-xl before:bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] hover:scale-[1.02] hover:border-emerald-600 hover:shadow-[0_0_10px_rgba(16,185,129,0.15)]"
            style={{ minHeight: "110px" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative z-10 flex flex-col items-center justify-center gap-2">
              <IconComp className="text-3xl" style={{ color }} />
              <span className="text-sm font-medium text-neutral-200">
                {label}
              </span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Skills;
