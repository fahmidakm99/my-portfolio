import React, { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    {
      name: "Frontend Developer",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "Angular Developer",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    },
    {
      name: "Java Full Stack Developer",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Ionic Developer",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg",
    },
    {
      name: "UI UX Designer",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ];

  const [rotations, setRotations] = useState(
    skills.map(() => ({ rotateX: 0, rotateY: 0 }))
  );

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    const maxRotate = 15;
    const rotateX = maxRotate * -y;
    const rotateY = maxRotate * x;

    setRotations((prev) =>
      prev.map((r, i) => (i === index ? { rotateX, rotateY } : r))
    );
  };

  const handleMouseLeave = (index) => {
    setRotations((prev) =>
      prev.map((r, i) => (i === index ? { rotateX: 0, rotateY: 0 } : r))
    );
  };

  return (
    <section
      id="about"
      className="flex flex-col px-4 pt-24 text-white max-w-6xl sm:px-6 lg:px-8 mx-auto"
    >
      <div className="space-y-3 mb-10 text-left sm:text-left">
        <p className="text-pink-400 text-sm uppercase tracking-widest">
          Introduction
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold">Overview</h2>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          I'm a skilled{" "}
          <span className="text-white font-semibold">Frontend developer</span>{" "}
          with expertise in Angular, Ionic, Js, HTML, CSS, and Next.js. I enjoy
          turning ideas into polished digital experiences by combining clean
          code with intuitive UI/UX, often shaped through tools like Figma. My
          goal is to deliver scalable, maintainable, and visually engaging
          applications that meet both user needs and business goals.
        </p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 justify-center"
        style={{ perspective: "1000px" }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              className="w-full h-48 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-md cursor-pointer
                transition-transform duration-200 ease-out transform-gpu"
              style={{
                transform: `rotateX(${rotations[i].rotateX}deg) rotateY(${rotations[i].rotateY}deg)`,
                transformStyle: "preserve-3d",
              }}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => handleMouseLeave(i)}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 object-contain"
                draggable={false}
              />
              <span className="text-white font-semibold text-sm sm:text-lg">
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
