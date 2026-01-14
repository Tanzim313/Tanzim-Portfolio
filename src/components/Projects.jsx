import { useState } from "react";
import blood from "../assets/blood.png";
import serve from "../assets/serveon.png";
import protfolio from "../assets/protfolio.png"

// Sample project data
const projects = [
  {
    title: "BloodFinding",
    image: blood, // replace with actual image path
    description: "Helps users find blood donors quickly by district and upazila. Users can also register as donors.",
    fullDescription: `This website is designed to help people find blood donors during critical moments when blood is urgently needed. 
    The platform provides a comprehensive search system and allows users to contribute by donating blood.
    Main technologies: React.js, Tailwind CSS, HTML, React Router, DaisyUI, React Toast, React Icons, Framer Motion.
    Backend: Node.js, Express, MongoDB with API integration.
    Challenges: Ensuring real-time updates and proper validation for donor registration.
    Future Improvements: Adding email/SMS notifications and AI-based matching for faster results.`,
    techStack: ["Html","Tailwind CSS","React.js","Node.js","Express","MongoDB"],
    liveLink: "https://sweet-pavlova-08681e.netlify.app/",
    clientRepo: "https://github.com/Tanzim313/blood_donation"
  },
  {
    title: "ServeOn",
    image: serve,
    description: "ServeOn is a platform designed to help people quickly find service providers such as electricians, house workers, gardeners, and other local professionals.",
    fullDescription: "ServeOn is a platform designed to help people quickly find service providers such as electricians, house workers, gardeners, and other local professionals. It aims to provide an easy and fast way for users to connect with the right service provider in critical or urgent situations.The website allows users to search for services based on location and category, ensuring that help is just a few clicks away. This project showcases skills in React.js, Tailwind CSS, HTML, React Router, DaisyUI, React Toast, React Icons, and Framer Motion for smooth, interactive UI experiences.The backend is built using Node.js, Express, and MongoDB, with a API to handle user requests efficiently.Challenges Faced: Ensuring real-time updates for service availability and validating user requests.Future Improvements: Adding real-time notifications, and AI-based recommendations to match users with the best service providers.",
    techStack: ["Html","Tailwind Css","React.js", "Node.js", "Express", "MongoDB"],
    liveLink: "https://guileless-panda-8a82fe.netlify.app/",
    clientRepo: "https://github.com/Tanzim313/client"
  },
  {
    title: "My Portfolio",
    image: protfolio,
    description: "This is my portfolio website, developed with HTML, React.js, and Tailwind CSS, highlighting my skills, projects, and personal information.",
    fullDescription: "This is my portfolio website, developed with HTML, React.js, and Tailwind CSS, highlighting my skills, projects, and personal information.",
    techStack: ["React.js", "Tailwind CSS","Html"],
    liveLink: "",
    clientRepo: "https://github.com/Tanzim313/Tanzim-Portfolio"
  },
];

 const Projects=()=> {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-6 bg-gray-100">
      <h2
        className="text-3xl font-bold text-center mb-12
                   bg-gradient-to-r from-teal-500 to-emerald-500
                   bg-clip-text text-transparent"
      >
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack?.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
                onClick={() => setSelectedProject(project)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Details Section */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 max-w-3xl w-full p-6 rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <p className="mb-4">{selectedProject.fullDescription}</p>
            <p className="mb-2">
              <span className="font-semibold">Technologies:</span>{" "}
              {selectedProject.techStack.join(", ")}
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Live Project
              </a>
              <a
                href={selectedProject.clientRepo}
                target="_blank"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
