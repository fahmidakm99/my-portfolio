import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Aker from "./aker.png";
import Ebay from "./ebay.png";

const experiences = [
  {
    role: "Programmer Analyst",
    company: "Cognizant Pvt India",
    period: "2021 – 2023",
    description: `
● Developed a B2C e-commerce platform serving 10,000+ active users, enabling secure and seamless 
transactions.  <br> 
● Built dynamic Angular frontend modules (v12+), creating responsive and interactive user interfaces for 10,000+ 
active users.  <br> 
● Integrated REST and GraphQL APIs using Angular HttpClient and RxJS Observables for efficient data 
handling.  <br> 
● Developed backend services in Java (Spring Boot, Microservices) to support frontend features, improving data 
retrieval speed by 35%.  <br> 
● Implemented secure API integrations with OAuth 2.0/JWT and Spring Security.  <br> 
● Applied unit testing with Jest for frontend and JUnit for backend services, achieving high code coverage.  <br> 
● Optimized application performance with lazy loading, reusable components, and modular design.  <br> 
● Implemented Prometheus alerts for real-time monitoring and faster issue detection.  <br> 
● Deployed ML-based alerting to auto-detect system errors, reducing incident response time by 20%.  <br> 
● Led site-wide upgrades for Raptor and Raptor IO applications, reducing downtime by 20%.  <br> 
    `,
    logo: Ebay,
  },
  {
    role: "Frontend Developer(Associate)",
    company: "Cognizant Pvt India",
    period: "2023 – 2025",
    description: `
● Designed and delivered a B2B web application for sales management and tool tracking, streamlining operations 
in  the Oil & Gas sector. <br>
● Deployed WeShop, a web app to manage tool rentals/returns, improving inventory visibility and reducing 
tracking errors by 40%. <br>
● Delivered Mips 2.0, a cross-platform (Android/iOS) inventory tracking app using Ionic and Cordova, boosting 
on-field productivity by 25%. <br>
● Designed and maintained enterprise-grade internal tools with Cordova, saving teams an estimated 10+ 
hours/week in reporting effort. <br>
● Created responsive UIs with Angular, Ionic, Bootstrap, jQuery, and CSS, leading to a 20% increase in 
adoption among end users. <br>
● Applied Agile methodologies (Scrum) for iterative delivery, bug tracking, and continuous improvement. <br>
● Collaborated with cross-functional teams (UI/UX, QA, Product Owners) to deliver user-friendly interfaces 
aligned with business requirements. <br>
● Implemented state management, lazy loading, and reusable components to improve application performance 
and maintainability. <br>

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
            dangerouslySetInnerHTML={{
              __html: formatDescription(exp.description),
            }}
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
      className="px-4  pt-24 text-white  max-w-6xl sm:px-6 lg:px-8 mx-auto w-full"
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
