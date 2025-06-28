import React from 'react';
import portfolioimg from "../assets/portfolio.jpg";
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';

const Banner = () => {
  return (
    <div className="hero bg-gray-800 min-h-screen px-4 pt-20">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-10">
        
        {/* Profile Image */}
        <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-500 shadow-lg relative">
          <img
            src={portfolioimg}
            alt="Profile"
            className="absolute top-[-10px] left-0 w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left">
          <small className="text-gray-100 text-sm sm:text-base">MERN Stack Developer</small>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            Hello, I'm <br />
            <span className="text-green-500">Harun</span>
          </h1>

          <p className="py-6 text-white text-sm sm:text-base leading-relaxed">
            "Hi, I'm a passionate Web Developer creating modern, responsive, <br className="hidden sm:block" />
            and user-friendly websites. Let's build something amazing together!"
          </p>

          {/* Buttons and Socials */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-6 gap-4">
            {/* Download Button */}
            <a
              href="https://drive.google.com/file/d/12SLmA07P4VQ69ZJcxbOUx12a6LJcDRBX/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-success flex items-center gap-2"
            >
              Download CV <MdDownload size={20} />
            </a>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1AbBgKqhA6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-white hover:bg-blue-600 p-3 rounded-full border border-green-600 transition"
              >
                <FaFacebookSquare size={20} />
              </a>

              <a
                href="https://github.com/harun241"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-white hover:bg-blue-600 p-3 rounded-full border border-green-600 transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/md-harun-or-rashid-409aaa363/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-white hover:bg-blue-700 p-3 rounded-full border border-green-600 transition"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
