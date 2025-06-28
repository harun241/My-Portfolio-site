import React from 'react';
import portfolioimg from "../assets/portfolio.jpg"
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';

const Banner = () => {
    return (
        <div className="hero bg-gray-800 min-h-screen mt-30 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-green-500 shadow-lg relative">
  <img
    src={portfolioimg}
    className="absolute top-[-10px] left-0 w-full h-auto"
    alt="Profile"
  />
</div>
    <div>
        <small className='text-gray-100'>Mernstack Developer</small>
      <h1 className="text-5xl font-bold text-white">Hello,I'm <br />
     <span className='text-green-500'> Harun</span></h1>
      <p className="py-6 text-white">
      "Hi, I'm a passionate Web Developer creating modern, responsive, <br /> and user-friendly websites. Let's build something amazing together!"
      </p>
    <div className='flex items-center gap-4 '>
         <div className="btn btn-outline btn-success space-x-2 mt-4 "> <a href=""><button className='flex "' >Download CV <MdDownload /></button></a>
     </div>
   <div className='flex space-x-4 mt-4'>
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