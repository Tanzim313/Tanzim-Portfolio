import React from 'react';
import { motion } from 'framer-motion';
import versity from "../assets/image.png";

const Background = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-extrabold mb-12 text-center
                     bg-gradient-to-r from-teal-500 to-emerald-500
                     bg-clip-text text-transparent">
        Educational Qualification
      </h2>

      <div
        className="flex flex-col md:flex-row items-center gap-6
                   bg-gradient-to-b from-teal-600 via-green-500 to-emerald-400
                   dark:from-gray-900 dark:via-gray-800 dark:to-gray-700
                   p-6 rounded-b-lg shadow-lg"
      >
        {/* University Logo */}
        <div className="flex-shrink-0">
          <img
            src={versity}   // 👉 replace with actual logo path
            alt="International Islamic University Chattogram Logo"
            className="w-24 h-24 object-contain bg-white rounded-full p-2 shadow"
          />
        </div>

        {/* Education Info */}
        <div className="text-white text-center md:text-left">
          <h3 className="text-2xl font-semibold">
            International Islamic University Chattogram
          </h3>
          <p className="text-lg mt-1">
            Bachelor of Science in Computer Science & Engineering (CSE)
          </p>
          <p className="text-sm opacity-90 mt-2">
            Currently Studying
          </p>
        </div>
      </div>
    </section>
  );
};

export default Background;