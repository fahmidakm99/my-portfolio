import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Aker from "./aker.png";
import Ebay from "./ebay.png";
import CodeFolks from "./images.png";

const experiences = [
   {
    role: "Software Developer",
    company: "CodeFolks Technologies",
    period: "April 2025 – December 2025",
    description: `
● Built and supported web applications using Angular, Java, Spring Boot, and RESTful APIs. <br>
● Enhanced UI components, achieving a 30% reduction in page load time and a 20% improvement in user task completion across core workflows. <br>
● Connected backend services with frontend modules and managed API integration and consumption. <br>
● Facilitated bi-weekly meetings with product managers, designers, and QA engineers to align on product specifications, leading to a 15% decrease in product defects and faster release cycles. <br>
● Resolved bugs, optimized existing modules, and contributed to code reviews to maintain high code quality and stability. <br>
● Followed Agile/Scrum methodologies, actively contributing to sprint planning, execution, and timely feature delivery.<br>
 <br>

    `,
    logo: CodeFolks,
  },
  {
    role: "Frontend Developer(Associate)",
    company: "Cognizant Pvt India",
    period: "2023 – 2025",
    description: `
● Engineered a B2B web application for sales management and tool tracking, streamlining operations in  the Oil & Gas sector.<br>
● Deployed WeShop, a web app to manage tool rentals/returns, improving inventory visibility and reducing tracking errors by 40% by real-time visibility and controlled check-in/check-out processes.<br>
● Released Mips 2.0, a cross-platform (Android/iOS) inventory tracking app using Ionic and Cordova, boosting on-field productivity by ~25% by cutting task completion time via streamlined UI flows, offline sync, and faster data updates.<br>
● Designed and maintained enterprise-grade internal tools with Cordova, saving teams an estimated 10+ hours/week in reporting effort.
● Created responsive UIs with Angular, Ionic, Bootstrap, jQuery, and CSS, leading to a 20% increase in adoption among end users.<br>
● Utilized Agile Scrum practices for iterative delivery, defect resolution, and continuous enhancement.<br>
● Collaborated with cross-functional teams (UI/UX, QA, Product Owners) to deliver user-friendly interfaces aligned with business requirements.<br>
● Applied state management, lazy loading, and reusable components to boost performance and maintainability.<br>
 <br>

    `,
    logo: Aker,
  },
  {
    role: "Programmer Analyst",
    company: "Cognizant Pvt India",
    period: "2021 – 2023",
    description: `
● Delivered a B2C e-commerce platform serving 10,000+ active users, ensuring secure and seamless online transactions.  <br> 
● Built scalable frontend modules using Angular (v12+), delivering responsive and interactive user interfaces.  <br> 
● Integrated REST and GraphQL APIs with Angular HttpClient and RxJS Observables for efficient state and data handling.  <br> 
● Developed backend services using Java, Spring Boot, Microservices, Spring Data JPA, improving data retrieval speed by 35%.  <br> 
● Implemented OAuth 2.0 / JWT authentication and enforced secure API communication using Spring Security. <br>
● Performed unit testing using Jest (frontend) and JUnit (backend), maintaining high code coverage and stability.<br>
● Improved application performance through lazy loading, modular architecture, and reusable UI components.<br>
● Led application upgrades for Raptor and Raptor IO, reducing system downtime by 20% and improving reliability through phased releases, dependency upgrades, bug fixes, and robust exception handling.<br>
● Participated in code reviews, requirement analysis, and sprint ceremonies as part of the Agile development process.<br>

    `,
    logo: Ebay,
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
