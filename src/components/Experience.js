import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Aker from "./aker.png";
import Ebay from "./ebay.png";

const experiences = [
  {
    role: "Java Full Stack Developer",
    company: "Cognizant Pvt India",
    period: "2021 – 2023",
    description: `
● Developed a scalable B2C e-commerce platform for a US-based client, enhancing UX and supporting secure transactions for 10,000+ users. <br> 
● Collaborated with cross-functional teams to build scalable features using Java, Spring Boot, and GraphQL.  <br> 
● Built REST APIs and GraphQL queries with a Microservices architecture to enable flexible, efficient data flow.  <br> 
● Refactored core modules into Microservices, improving modularity and scalability.  <br> 
● Integrated online payment systems and secured them using OAuth 2.0, Spring Security, and JWT.  <br> 
● Implemented Prometheus alerts for real-time monitoring and faster issue detection.  <br> 
● Wrote JUnit test cases and applied Sonar fixes to maintain high code quality.  <br> 
● Deployed ML-based alerting to auto-detect system errors, reducing incident response time by 20%.  <br> 
● Led site-wide upgrades for Raptor and Raptor IO applications, optimizing system performance.  <br> 
● Practiced Agile methodologies to ensure rapid, iterative development and continuous improvement.<br> 
    `,
    logo: Ebay,
  },
  {
    role: "Frontend Developer",
    company: "Cognizant Pvt India",
    period: "2023 – 2025",
    description: `
● Developed a B2B web application for the Oil & Gas industry focused on sales management, tailored for a Norway-based client.  <br> 
● Designed and maintained enterprise-grade internal tools using Cordova.  <br> 
● Built a web app for managing tool rentals/returns across yards, enhancing inventory visibility and user efficiency.  <br> 
● Delivered a cross-platform (Android/iOS) inventory app using Ionic and Cordova for real-time tool tracking and improved field productivity.  <br> 
● Created responsive, user-friendly UIs using AngularJS, Ionic, Bootstrap, jQuery, and CSS.  <br> 
● Contributed to scalable, maintainable solutions aligned with real-world operational workflows.<br> 

    `,
    logo: Aker,
  },
];


const ExperienceCard = ({ exp, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const formatDescription = (desc) =>
    desc
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br />");

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`relative flex flex-col md:flex-row items-start w-full ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Logo Dot */}
      <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 bg-[#f6f7e4] border-4 border-pink-500 rounded-full z-10 flex items-center justify-center">
        {exp.logo && (
          <img
            src={exp.logo}
            alt={`${exp.company} Logo`}
            className="w-8 h-8 object-contain"
          />
        )}
      </div>

      {/* Content */}
      <div className="mt-12 md:mt-0 w-full md:w-1/2 px-2 md:px-8">
        <div className="[background-color:#1d1836] shadow-md rounded-lg p-6 border-l-4 border-pink-500">
          <h3 className="text-xl font-semibold">{exp.role}</h3>
          <p className="text-indigo-600 font-medium">{exp.company}</p>
          <p className="text-gray-500 italic mb-3">{exp.period}</p>
          <p
            className="text-white"
            dangerouslySetInnerHTML={{ __html: formatDescription(exp.description) }}
          />
        </div>
      </div>

      {/* Empty right side for spacing (desktop only) */}
      <div className="hidden md:block w-1/2"></div>
    </motion.div>
  );
};


const Experience = () => {
  return (
    <section
      className="flex flex-col px-4 pt-24 text-white max-w-6xl sm:px-6 lg:px-8 mx-auto"
      id="experience"
    >
      <p className="text-pink-400 text-sm uppercase tracking-widest space-y-3 mb-4">
        What I have done so far
      </p>
      <h2 className="text-4xl space-y-3 mb-10 font-extrabold">Experience</h2>

      <div className="relative">
  {/* Pink vertical line: left on mobile, centered on desktop */}
  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-pink-500"></div>

  <div className="flex flex-col gap-24">
    {experiences.map((exp, index) => (
      <ExperienceCard exp={exp} key={index} index={index} />
    ))}
  </div>
</div>


       {/* 3D Model at bottom */}
      {/* <LogoGrid /> */}

    </section>
  );
};

export default Experience;
