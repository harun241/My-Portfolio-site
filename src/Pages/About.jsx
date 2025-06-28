import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-800 py-16 px-4 md:px-8 lg:px-20 my-20"
    >
      <div className="max-w-4xl mx-auto text-center text-black">
        <h2 className="text-4xl font-bold text-green-500 mb-10">About Me</h2>
        <div className="bg-white rounded-xl p-6 md:p-10 shadow-lg">
          <p className="text-lg leading-relaxed text-gray-800">
            Hello! I’m <span className="font-bold text-green-600">MD Harun</span>, a dedicated and detail-oriented{" "}
            <span className="font-semibold text-green-600">MERN Stack Developer</span> passionate about crafting modern, efficient, and scalable web applications.
            I specialize in technologies like{" "}
            <span className="font-medium">MongoDB, Express.js, React,</span> and{" "}
            <span className="font-medium">Node.js</span> to deliver robust full-stack solutions.
          </p>

          <p className="text-lg leading-relaxed text-gray-800 mt-6">
            Beyond core development, I have hands-on experience with tools like{" "}
            <span className="font-medium">Firebase, Tailwind CSS, JWT</span> for secure authentication, and RESTful APIs.
            I enjoy solving complex problems and translating business needs into elegant code.
          </p>

          <p className="text-lg leading-relaxed text-gray-800 mt-6">
            🚀 I thrive in collaborative environments and always stay curious about new technologies.
            Whether it's building intuitive UIs or writing scalable backend services, I'm committed to writing clean and maintainable code.
          </p>

          <p className="text-lg leading-relaxed text-gray-800 mt-6">
            🎯 Outside of work, I enjoy playing cricket and exploring new places.
            These activities fuel my creativity and keep me energized — both on and off the screen!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
