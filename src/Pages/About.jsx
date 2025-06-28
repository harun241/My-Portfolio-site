import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-800  py-16 px-4 md:px-8 lg:px-20 my-20">
      <div className="max-w-4xl mx-auto text-center  text-black">
        <h2 className="text-4xl font-bold text-green-600 mb-6">
          About Me
        </h2>
        <div className="bg-white">
          <p className="text-lg  leading-relaxed">
          Hi! I’m <span className="font-semibold">MD Harun</span> — a passionate and
          detail-oriented <span className="text-blue-600 font-semibold">MERN Stack Developer</span> with a strong focus on building dynamic,
          responsive, and user-friendly web applications. I specialize in using{" "}
          <span className="font-semibold">MongoDB, Express.js, React,</span> and{" "}
          <span className="font-semibold">Node.js</span> to craft full-stack solutions that are both scalable and efficient.
        </p>

        <p className="text-lg leading-relaxed mt-6">
          With hands-on experience in tools like Firebase, Tailwind CSS, JWT authentication, and REST APIs,
          I enjoy turning complex problems into elegant code. I’m always open to collaboration, innovation,
          and continuous learning.
        </p>

        <p className="text-lg  leading-relaxed mt-6">
           When I’m not coding 💻, I love playing cricket 🏏 and traveling to new places 🌍. It helps me stay active, inspired, and full of fresh ideas!
        </p>
        </div>
      </div>
    </section>
  );
};

export default About;
