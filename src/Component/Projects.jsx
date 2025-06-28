import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import project1 from "../assets/hotel1.jpg";
import project2 from "../assets/Garden-2.jpg";
import project3 from "../assets/Garden3.jpg";
import project4 from "../assets/Garden1.jpg";
import project5 from "../assets/hotel2.jpg";
import project6 from "../assets/hotel3.jpg";
import project7 from "../assets/job3.jpg";
import project8 from "../assets/job2.jpg";
import project9 from "../assets/job1.jpg";

// ✅ ProjectCard Component
const ProjectCard = ({ title, description, tech, liveLink, images, client, server }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-300 shadow-md rounded-xl overflow-hidden mb-10 hover:shadow-lg transition duration-300 max-w-7xl">
      {/* Left: Text */}
      <div className="md:w-1/2 p-6">
        <h2 className="text-2xl font-bold text-green-600">{title}</h2>
        <p className="text-gray-700 mt-3">{description}</p>
        <p className="mt-4 text-sm text-gray-600">
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

      {/* Right: Carousel */}
      <div className="md:w-1/2 p-4">
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
                className="rounded-xl h-80 object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

// ✅ Main Projects Component
const Projects = () => {
  const projectData = [
    {
      title: "Hotel Booking Platform",
      description:
        "A full-stack hotel booking app with authentication, booking, review system, and admin control panel.",
      tech: "React, Node.js, Express, MongoDB, JWT, Tailwind",
      liveLink: "https://hotel-management-5b87e.web.app",
      client: "https://github.com/harun241/hotel-management.git",
      server: "https://github.com/harun241/hotel-management-server.git",
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
      title: "Job Tracking Website",
      description:
        "A job tracking and management platform with features like job posting, application tracking, user authentication, role-based access, and real-time status updates.",
      tech: "React, Firebase,  Tailwind",
      liveLink: "https://authentication-18340.web.app/",
      client: "https://github.com/harun241/jobtrack.git",
      images: [project7, project8, project9],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-800">
      <h1 className="text-3xl font-bold text-center my-20 text-green-600">My Projects</h1>
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
