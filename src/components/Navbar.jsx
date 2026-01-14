import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const links = ["About", "Skills", "Education","Projects", "Contact"];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="fixed top-0 w-full shadow-lg z-50 
      bg-gradient-to-r from-teal-600 via-green-500 to-emerald-400 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 
      transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-white dark:text-teal-300">
          Tanzim Hasan Rizbi
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:gap-6">
          {links.map((link) => (
            <motion.li
              key={link}
              whileHover={{
                scale: 1.1,
                background: "linear-gradient(90deg, #FFD700, #00FF7F)", // gold → green
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="cursor-pointer font-medium text-white dark:text-gray-200 transition-all duration-300"
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </motion.li>
          ))}
        </ul>

        {/* Right Controls: Theme + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-white dark:text-yellow-400 text-xl p-2 rounded-full hover:bg-white/20 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white dark:text-teal-300 text-2xl font-bold hover:text-yellow-300 transition"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden bg-gradient-to-b from-teal-600 via-green-500 to-emerald-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 flex flex-col gap-4 p-6 shadow-lg rounded-b-lg"
          >
            {links.map((link) => (
              <motion.li
                key={link}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  background: "linear-gradient(90deg, #FFD700, #00FF7F)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="cursor-pointer font-medium text-white dark:text-gray-200 py-2 transition-all duration-300"
                onClick={() => setOpen(false)}
              >
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
