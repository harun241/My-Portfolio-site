import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Project images
import project1 from "../assets/hotel1.jpg";
import project2 from "../assets/Garden-2.jpg";
import project3 from "../assets/Garden3.jpg";
import project4 from "../assets/Garden1.jpg";
import project5 from "../assets/hotel2.jpg";
import project6 from "../assets/hotel3.jpg";
import project7 from "../assets/job3.jpg";
import project8 from "../assets/job2.jpg";
import project9 from "../assets/job1.jpg";

// Project Card
const ProjectCard = ({ title, description, tech, liveLink, images, client, server, index }) => {
  return (
    <motion.div
      className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-6 
                 bg-gray-800 shadow-lg rounded-2xl overflow-hidden mb-12 px-6 py-6
                 transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{
        scale: 1.05,
        backgroundColor: "#1f2937", // slightly lighter gray
        boxShadow: "0 10px 30px rgba(72, 255, 0, 0.6), 0 0 60px rgba(72, 255, 0, 0.3)",
      }}
    >
      {/* Text */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-bold text-green-500 mb-2">{title}</h2>
        <p className="text-gray-200">{description}</p>
        <p className="mt-3 text-sm text-gray-400">
          <span className="font-semibold">Tech Stack:</span> {tech}
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Live
            </a>
          )}
          {client && (
            <a
              href={client}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Client
            </a>
          )}
          {server && (
            <a
              href={server}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            >
              Server
            </a>
          )}
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full lg:w-1/2">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          dynamicHeight={false}
        >
          {images.map((img, idx) => (
            <div key={idx}>
              <img
                src={img}
                alt={`project image ${idx + 1}`}
                className="rounded-xl w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[320px] object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </motion.div>
  );
};

// Main Projects Component
const Projects = () => {
  const projectData = [
    {
      title: "Safe-pay:Ai-powerd Fraud Transaction Detection system",
      description:
        "A full-stack hotel booking app with authentication, booking, review system, and admin control panel.",
      tech: "Next-js,MongoDB, Firebase, MongoDB, JWT, Tailwind",
      liveLink: "https://safe-pay-seven.vercel.app",
      client:"https://github.com/harun241/Safe-pay.git",
      images: [project1, project5, project6],
    },
    {
      title: "Gardening Community Hub",
      description:
        "A community and resource hub for gardeners with tips, user profiles, theme toggle, and Firebase auth.",
      tech: "React, Firebase, Express, MongoDB, DaisyUI",
      liveLink: "https://gardening-community-e9b5a.web.app",
      client: "https://github.com/harun241/garden-client.git",
      server: "https://github.com/harun241/garden-server.git",
      images: [project2, project3, project4],
    },
    {
      title: "Educational-content-Management-platform",
      description:
        "Learn better with EduQuest ,Your all-in-one solution for classes, assignments, and progress tracking..",
      tech: "firebase,React, Tailwind CSS, Node.js, Express.js, MongoDB, TanStack Query",
      liveLink: "https://edumanage-d78f1.web.app",
      client: "https://github.com/harun241/edumanage-client.git",
      server:"https://github.com/harun241/edumanage-server.git",
      images: [project7, project8, project9],
    },
  ];

  return (
    <div className="bg-gray-900 py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-16 text-green-500">
        My Projects
      </h1>
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} index={index} />
      ))}
    </div>
  );
};

export default Projects;
