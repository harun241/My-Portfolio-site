import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaCss3Alt, FaHtml5, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase, SiTailwindcss, SiRedux, SiNextdotjs, SiTypescript, SiMaterialdesign } from "react-icons/si";

const skills = [
  { name: "MongoDB", icon: <SiMongodb size={30} />, color: "green" },
  { name: "Express.js", icon: <SiExpress size={30} />, color: "gray" },
  { name: "React", icon: <FaReact size={30} />, color: "blue" },
  { name: "Node.js", icon: <FaNodeJs size={30} />, color: "green" },
  { name: "Firebase", icon: <SiFirebase size={30} />, color: "yellow" },
  { name: "JavaScript", icon: <FaJs size={30} />, color: "yellow" },
  { name: "HTML5", icon: <FaHtml5 size={30} />, color: "orange" },
  { name: "CSS3", icon: <FaCss3Alt size={30} />, color: "blue" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={30} />, color: "cyan" },
  { name: "Redux", icon: <SiRedux size={30} />, color: "purple" },
  { name: "Git", icon: <FaGitAlt size={30} />, color: "red" },
  { name: "Next.js", icon: <SiNextdotjs size={30} />, color: "black" },
  { name: "TypeScript", icon: <SiTypescript size={30} />, color: "blue" },
  { name: "Material Design", icon: <SiMaterialdesign size={30} />, color: "cyan" },
];

const colorMap = {
  green: "rgba(72, 255, 0, 0.7)",
  blue: "rgba(66, 153, 225, 0.7)",
  yellow: "rgba(252, 211, 77, 0.7)",
  gray: "rgba(156, 163, 175, 0.7)",
  orange: "rgba(249, 115, 22, 0.7)",
  cyan: "rgba(6, 182, 212, 0.7)",
  purple: "rgba(139, 92, 246, 0.7)",
  red: "rgba(239, 68, 68, 0.7)",
  black: "rgba(75, 85, 99, 0.7)",
};

const Skills = () => {
  return (
    <section className="bg-gray-900 py-16 px-4 md:px-8 lg:px-20 my-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-green-400 mb-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center justify-center gap-2 bg-gray-800 px-6 py-4 rounded-2xl shadow-lg cursor-pointer transition-transform transform hover:scale-105"
              whileHover={{
                scale: 1.1,
                boxShadow: `0 0 20px ${colorMap[skill.color]}, 0 0 40px ${colorMap[skill.color]}`,
              }}
            >
              {skill.icon}
              <span className="font-medium text-white">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
