import { useState } from "react";

const skillCategories = [
  {
    category: "Frontend Technologies",
    skills: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
      { name: "Ionic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    category: "Full Stack Development",
    skills: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python (Django)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
      { name: "OAuth 2.0", icon: "" },
      { name: "REST API", icon: "" },
      { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    ],
  },
  {
    category: "Design & Prototyping",
    skills: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ],
  },
  {
    category: "Development Tools",
    skills: [
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Visual Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
      { name: "Eclipse", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" },
      { name: "IntelliJ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
    ],
  },
  {
    category: "Version Control & Collaboration",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    ],
  },
  {
    category: "Monitoring & Productivity",
    skills: [
      { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
      { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
      { name: "MS Office Suite", icon: "" },
    ],
  },
  {
    category: "DevOps Tools",
    skills: [
      { name: "JIRA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Swagger", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" },
    ],
  },
//   {
//     category: "Soft Skills",
//     skills: [
//       { name: "Automation", icon: "" },
//       { name: "Adaptability", icon: "" },
//       { name: "Problem Solving", icon: "" },
//       { name: "Teamwork", icon: "" },
//       { name: "Critical Thinking", icon: "" },
//       { name: "Communication", icon: "" },
//       { name: "Leadership", icon: "" },
//       { name: "Time Management", icon: "" },
//       { name: "Presentation Skills", icon: "" },
//     ],
//   },
];



// const Skills = () => {
//   const [flippedIndex, setFlippedIndex] = useState(null);

//   const toggleFlip = (index) => {
//     setFlippedIndex(index === flippedIndex ? null : index);
//   };

//   return (
//     <section
//       id="skills"
//       className="min-h-screen px-4 pt-20 text-white flex flex-col items-start max-w-7xl mx-auto w-full"
//     >
//       {/* Headings */}
//       <div className="space-y-2 mb-8">
//         <p className="text-pink-400 text-sm uppercase tracking-widest">Expertise</p>
//         <h2 className="text-3xl font-bold">Skills</h2>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full place-items-center">
//   {skillCategories.map((item, index) => (
//     <div
//       key={index}
//       onClick={() => toggleFlip(index)}
//       className="relative w-[180px] h-56 cursor-pointer perspective"
//     >
//       <div
//         className={`transition-transform duration-700 transform-style-preserve-3d w-full h-full rounded-lg shadow-md ${
//           flippedIndex === index ? "rotate-y-180" : ""
//         }`}
//       >
//         {/* Front Side */}
//         <div className="absolute inset-0 [background-color:#1d1836] text-white rounded-lg flex items-center justify-center px-2 text-sm font-semibold backface-hidden text-center">
//           {item.category}
//         </div>

//         {/* Back Side */}
//         <div className="absolute inset-0 [background-color:#1d1836] text-pink-500 rounded-lg p-3 backface-hidden rotate-y-180 overflow-auto">
//           <ul className="space-y-1 text-xs">
//             {item.skills.map((skill, i) => (
//               <li key={i} className="flex items-center space-x-2">
//                 {skill.icon && (
//                   <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
//                 )}
//                 <span>{skill.name}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>


//       {/* Flip Animation Styles */}
//       <style jsx>{`
//         .perspective {
//           perspective: 1000px;
//         }
//         .transform-style-preserve-3d {
//           transform-style: preserve-3d;
//           position: relative;
//         }
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//         .backface-hidden {
//           backface-visibility: hidden;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Skills;

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="skills"
      className="px-4  pt-24 text-white  max-w-6xl sm:px-6 lg:px-8 mx-auto w-full"
    >
      <div className="space-y-3 mb-8 sm:mb-10">
        <p className="text-pink-400 text-sm uppercase tracking-widest">Expertise</p>
        <h2 className="text-3xl sm:text-4xl font-bold">Skills</h2>
      </div>

      {/* Tabs - scrollable on small screens */}
      <div className="flex overflow-x-auto gap-4 sm:gap-6 border-b border-gray-700 pb-3 mb-6 scrollbar-hide">
        {skillCategories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`flex-shrink-0 whitespace-nowrap text-sm sm:text-base font-semibold transition-colors duration-300 ${
              activeIndex === i
                ? "border-b-2 sm:border-b-4 border-pink-500 text-pink-400"
                : "text-white hover:text-pink-400"
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 place-items-center">
        {skillCategories[activeIndex].skills.map(({ name, icon }, index) => (
          icon ? (
            <div key={index} className="flex flex-col items-center w-full">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden [background-color:#1d1836] shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                <img
                  src={icon}
                  alt={`${name} logo`}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <p className="mt-2 text-xs sm:text-sm text-center text-white font-semibold select-none uppercase">
                {name}
              </p>
            </div>
          ) : (
            <div key={index} className="flex flex-col items-center w-full">
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center text-xs sm:text-sm text-white text-center [background-color:#1d1836] rounded-full font-semibold uppercase">
                {name}
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default Skills;