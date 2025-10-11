import React, { useState } from "react";
import portfolioimg from "../assets/portfolio.jpg";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const socialLinks = [
  {
    href: "https://www.facebook.com/share/1AbBgKqhA6/",
    icon: <FaFacebookSquare size={20} />,
    hover: "hover:bg-blue-600",
  },
  {
    href: "https://github.com/harun241",
    icon: <FaGithub size={20} />,
    hover: "hover:bg-gray-700",
  },
  {
    href: "https://www.linkedin.com/in/md-harun-or-rashid-409aaa363/",
    icon: <FaLinkedin size={20} />,
    hover: "hover:bg-blue-700",
  },
];

const Banner = () => {
  const words = ["Hello, I'm Harun", "MERN Stack Developer", "Web Designer"];
  const colors = ["text-green-400", "text-blue-400", "text-purple-400"];
  const [wordIndex, setWordIndex] = useState(0);

  return (
    <div className="hero bg-gray-900 min-h-screen px-4 pt-20">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-10">

        {/* Rotating Dotted Border with Static Image */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center">
          <motion.div
            className="absolute -inset-1 rounded-full border-8 border-green-500 border-dashed"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <img
            src={portfolioimg}
            alt="Profile"
            className="w-full h-full rounded-full object-cover relative z-10"
          />
        </div>

        {/* Text Content */}
        <motion.div
          className="text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.small
            className="text-gray-300 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            MERN Stack Developer
          </motion.small>

          {/* Typewriter with dynamic color */}
          <motion.h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mt-2 ${colors[wordIndex]}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typewriter
              words={words}
              loop={0} // infinite
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
              onWordTyped={(index) => {
                setWordIndex(index % colors.length); // change color each time
              }}
            />
          </motion.h1>

          <motion.p
            className="py-6 text-white text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm a passionate Web Developer creating modern, responsive,{" "}
            <br className="hidden sm:block" />
            and user-friendly websites. Let's build something amazing together!
          </motion.p>

          {/* Buttons and Socials */}
          <motion.div
            className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-6 gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <a
              href="https://drive.google.com/file/d/12SLmA07P4VQ69ZJcxbOUx12a6LJcDRBX/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-success flex items-center gap-2 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              Download CV <MdDownload size={20} />
            </a>

            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-green-500 p-3 rounded-full border border-green-500 transition ${social.hover}`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
