import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import pic from "../assets/tanzim.jpg";


const  Hero=()=> {
  return (


    <section
      id="hero"
      className="mt-20 sm:mt-0 h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-500 via-green-400 to-emerald-500 animate-gradient-x -z-20"></div>

      {/* Subtle Radial Glow Behind Profile */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-green-300 via-teal-400 to-emerald-300 opacity-30 blur-3xl animate-pulse -z-10"></div>

      {/* Floating Particles */}
      <div className="absolute w-full h-full -z-10 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/20 rounded-full"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: ["0%", "100%"], x: ["0%", "10%"] }}
            transition={{
              duration: Math.random() * 12 + 6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Profile Image with Glow */}
      <motion.div
  className="relative mb-6 w-44 h-44 flex items-center justify-center"
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1, type: "spring" }}
>
  {/* Glow Effect */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-teal-500 to-emerald-400 blur-2xl opacity-50 animate-pulse"></div>

  {/* Profile Image */}
  <motion.img
    src={pic}
    alt="Tanzim Hasan Rizbi"
    className="w-full h-full rounded-full object-cover border-4 border-white shadow-2xl relative z-10"
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 3, repeat: Infinity }}
  />
</motion.div>

      {/* Name */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-2  drop-shadow-xl px-6 py-2 rounded-lg bg-white/20 backdrop-blur-sm"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Tanzim Hasan Rizbi
      </motion.h1>

      {/* Designation */}
      <motion.p
        className="text-xl md:text-2xl mb-6  px-4 py-1 rounded-lg bg-white/10 backdrop-blur-sm"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Full Stack Developer <span className="opacity-70 mx-2">|</span> <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent font-semibold">
    Aspiring AI Full Stack Engineer
  </span>
      </motion.p>

      {/* Buttons & Social Icons */}
      <motion.div
        className="flex gap-4 mb-6 flex-col sm:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-gradient-to-r from-green-400 via-teal-500 to-emerald-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 hover:brightness-110 transition transform"
        >
          Download Resume
        </a>

        {/* Social Icons */}
        <motion.a
          href="https://github.com/Tanzim313"
          target="_blank"
          className="p-3 bg-gray-900 rounded-full shadow-lg hover:scale-110 hover:shadow-emerald-400/50 transition transform"
          whileHover={{ rotate: 10 }}
        >
          <FaGithub size={24} color="white" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/tanzim-hasan-rizbi-153a38297/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BErpci3pUREiHo4CJ8eXoJg%3D%3D"
          target="_blank"
          className="p-3 bg-blue-700 rounded-full shadow-lg hover:scale-110 hover:shadow-blue-300/50 transition transform"
          whileHover={{ rotate: 10 }}
        >
          <FaLinkedin size={24} color="white" />
        </motion.a>
        <motion.a
          href="https://twitter.com/"
          target="_blank"
          className="p-3 bg-blue-400 rounded-full shadow-lg hover:scale-110 hover:shadow-blue-200/50 transition transform"
          whileHover={{ rotate: 10 }}
        >
          <FaTwitter size={24} color="white" />
        </motion.a>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.a
        href="#about"
        className="absolute bottom-8 text-white text-4xl animate-bounce"
        whileHover={{ scale: 1.3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <FiChevronDown className="text-white drop-shadow-lg" />
      </motion.a>
    </section>
  );
}

export default Hero;
