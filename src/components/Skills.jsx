import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPostman, SiExpress, SiDjango, SiMysql } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skills = {
  Frontend: [
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
  ],
  Backend: [
    { name: "Django", icon: <SiDjango/> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },

  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "VS Code", icon: <VscCode /> },
    //{ name: "Postman", icon: <SiPostman /> },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-teal-500 to-emerald-500
                     bg-clip-text text-transparent ">
        Skills
      </h2>

      <div className="grid gap-10 md:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-gradient-to-b from-teal-600 via-green-500 to-emerald-400
                       dark:from-gray-900 dark:via-gray-800 dark:to-gray-700
                       flex flex-col gap-4 p-6 shadow-lg rounded-b-lg
                       hover:scale-[1.03] transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-white tracking-wide">
              {category}
            </h3>

            <ul className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full
                             bg-white/90 text-gray-800
                             dark:bg-gray-900/80 dark:text-gray-100
                             shadow hover:shadow-md transition"
                >
                  <span className="text-lg text-teal-600 dark:text-emerald-400">
                    {skill.icon}
                  </span>
                  <span className="text-sm font-medium">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
