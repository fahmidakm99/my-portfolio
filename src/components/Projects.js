import React, { useState } from "react";
import CoverImg from "../assets/cover-recipe.jpg";
import UAEHomeImg from "../assets/Uaehome.png";
import EverUs from "../assets/figma our.jpg"
import JobPortal from "../assets/JobPortal.png"

const projectData = [
{
  title: "UAE Homes",
  image: UAEHomeImg,
  tech: ["Angular", "Ionic"],
  description:
    "UAE Homes is a modern web application designed to simplify real estate browsing and property management in the United Arab Emirates.",
  features: [
    "Multi-language support (English & Arabic) with RTL layout.",
    "Browse and filter properties with detailed info.",
    "Save favorites and list your own properties.",
    "Light and dark theme support for all devices",
    "Designed using Figma",
  ],
  linkText: "View Code",
  link: "https://github.com/fahmidakm99/UAE-Homes",
  liveDemoText: "Live Demo",
  liveDemoLink: "https://uae-homes.vercel.app" // Add your Vercel URL here
},

  {
    title: "Recipe App",
    image: CoverImg,
    tech: ["Angular", "Ionic", "Firebase"],
    description:
      "A cross-platform recipe management app designed for mobile and web. It helps users plan meals and store recipes with a focus on personalization and accessibility.",
    features: [
      "User authentication via Firebase (Email only)",
      "Weekly/Monthly meal planner with calendar view",
      "Recipe storage in Firestore per user (privacy maintained)",
      "Real-time updates and state management",
      "Designed using Figma",
    ],
    linkText: "View Code",
    link: "https://github.com/fahmidakm99/RecipeAppDemo",
  },
  {
  title: "EverUs",
  image: EverUs,
  tech: ["React", "Tailwind css", "Node js", "TypeScript"],
  description:
    "A responsive customised app to showcase the memories and the moments for valentine",
  features: [
    "Relationship AI.",
    "Picture Gallery with moments.",
    "customised counter",
    "Designed using Figma",
  ],
  linkText: "View Code",
  link: "https://github.com/fahmidakm99/couple-website",
  liveDemoText: "Live Demo",
  liveDemoLink: "https://couple-website-kaoc.vercel.app" // Add your Vercel URL here
},

{
  title: "Job Recruit Portal",
  image: JobPortal,
  tech: ["MongoDB", "React", "NodeJs", "Express"],
  description:
    "Job Recruit Portal is a small web app developed in Mern stack.",
  features: [
    "A Dashboard to track entire application.",
    "Recruiter can update applicant status.",
    "Filter applicants by status.",
    "AI-based or keyword-based matching algorithm.",
    "Search jobs by title, location, skills.",
    "Deployed project using Render, Vercel and MongoDB Atlas secure connection.",
  ],
  linkText: "View Code",
  link: "https://github.com/fahmidakm99/Job-Portal-Frontend",
  liveDemoText: "Live Demo",
  liveDemoLink: "https://job-portal-frontend-five-gamma.vercel.app/" // Add your Vercel URL here
},

];

const getBadgeColor = (index) => {
  switch (index) {
    case 0:
      return "text-blue-400";
    case 1:
      return "text-green-400";
    case 2:
      return "text-pink-400";
    default:
      return "text-gray-400";
  }
};

const Projects = () => {
  const [expanded, setExpanded] = useState(null);
  const [rotations, setRotations] = useState(
    projectData.map(() => ({ rotateX: 0, rotateY: 0 })),
  );

  const toggleFeatures = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    const maxRotate = 15;

    const rotateX = maxRotate * -y;
    const rotateY = maxRotate * x;

    setRotations((prev) =>
      prev.map((r, i) => (i === index ? { rotateX, rotateY } : r)),
    );
  };

  const handleMouseLeave = (index) => {
    setRotations((prev) =>
      prev.map((r, i) => (i === index ? { rotateX: 0, rotateY: 0 } : r)),
    );
  };

  return (
    <section
      className="min-h-screen px-4 pt-24 text-white max-w-6xl sm:px-6 lg:px-8  mx-auto w-full"
      id="projects"
    >
      <p className="text-pink-400 text-sm uppercase tracking-widest space-y-3 mb-4">
        Project Explorations
      </p>
      <h2 className="text-4xl space-y-3 mb-10 font-extrabold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectData.map((project, i) => (
          <div
            key={i}
            className="bg-[#1d1836] rounded-xl shadow-lg overflow-hidden flex flex-col transition hover:shadow-xl 
      backdrop-blur-md border border-white/10 cursor-pointer w-full mx-auto"
            style={{
              transform: `perspective(1000px) rotateX(${rotations[i].rotateX}deg) rotateY(${rotations[i].rotateY}deg)`,
              transformStyle: "preserve-3d",
              transition: "transform 0.2s ease-out",
            }}
            onMouseMove={(e) => handleMouseMove(e, i)}
            onMouseLeave={() => handleMouseLeave(i)}
          >
            <div className="p-4 sm:p-5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 sm:h-60 object-cover rounded-md"
              />
            </div>

            <div className="px-4 sm:px-5 pb-5 pt-1 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                {expanded === i && (
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mb-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex justify-between items-center">
                <button
                  className="text-sm text-gray-300 hover:underline"
                  onClick={() => toggleFeatures(i)}
                >
                  {expanded === i ? "Hide" : "View More"}
                </button>
                <a
                  href={project.link}
                  className="text-sm text-gray-300 font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.linkText}
                </a>
                <a
                  href={project.liveDemoLink}
                  className="text-sm text-gray-300 font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.liveDemoText}
                </a>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`text-sm font-medium py-1 rounded select-none border border-transparent ${getBadgeColor(
                      idx,
                    )}`}
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
