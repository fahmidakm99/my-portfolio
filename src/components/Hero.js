import profileImg from "./profile.jpg";
import { ReactTyped } from "react-typed";
// import { FaAngular, FaJava, FaReact, FaHtml5, FaCss3Alt, FaPython, FaJsSquare } from "react-icons/fa";
// import { SiTypescript, SiIonic, SiTailwindcss } from "react-icons/si";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-white px-4 sm:px-6 md:px-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto w-full py-12">
        {/* TEXT COLUMN */}
        <div className="relative space-y-6 text-center md:text-left">
          {/* Left vertical line on desktop only */}
          <div className="hidden md:block absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-pink-400 via-purple-500 to-indigo-400"></div>

          {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold md:ml-4">
            Hi, I'm <span className="text-pink-400">Fahmida</span>
          </h1> */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold md:ml-4">
            <ReactTyped
              strings={['Hi, I\'m <span class="text-pink-400">Fahmida</span>']}
              typeSpeed={70}
              showCursor={true}
              contentType="html"
            />
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 md:ml-4">
            <b>Frontend & Java Full Stack Developer</b>
            <br></br>
            <i>Angular | TypeScript | Java | Ionic | UI/UX Enthusiast</i>
            <br></br>I build scalable, responsive web and mobile apps using
            modern frontend frameworks, optimized for performance and seamless
            user experiences.
          </p>

          <a
            href="#contact"
            className="inline-block bg-white text-indigo-700 font-semibold py-2 px-6 rounded-full shadow hover:shadow-lg transition md:ml-4"
          >
            Contact Me
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/assets/Fahmida K M-FSE-Resume.pdf`}
            download="FahmidaKM_CV.pdf"
            className="inline-block bg-white text-indigo-700 font-semibold py-2 px-6 rounded-full shadow hover:shadow-lg transition md:ml-4"
          >
            Download CV
          </a>
        </div>

        {/* IMAGE COLUMN */}
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="Fahmida"
            className="w-48 sm:w-60 md:w-72 rounded-2xl border-4 border-purple-500 shadow-2xl grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>

{/* <div className="absolute bottom-10 w-full pointer-events-none">
  <div className="relative w-full h-16">
    <FaAngular className="curly-icon icon1" style={{ color: '#DD0031' }}/>      
    <FaJava className="curly-icon icon2" style={{ color: '#5382A1' }}/>          
    <FaReact className="curly-icon icon3" style={{ color: '#61DBFB' }}/>          
    <SiTypescript className="curly-icon icon4" style={{ color: '#007ACC' }}/>    
    <FaHtml5 className="curly-icon icon5" style={{ color: '#E34F26' }}/>         
    <FaCss3Alt className="curly-icon icon6" style={{ color: '#264DE4' }}/>       
    <SiIonic className="curly-icon icon7" style={{ color: '#3880FF' }}/>         
    <FaJsSquare className="curly-icon icon8" style={{ color: '#F7DF1E' }}/>    
    <FaPython className="curly-icon icon9" style={{ color: '#3776AB' }}/>       
    <SiTailwindcss className="curly-icon icon10" style={{ color: '#38B2AC' }}/>   
  </div>
</div>

  <img
    src={profileImg}
    alt="Fahmida"
    className="w-48 sm:w-60 md:w-72 rounded-2xl border-4 border-purple-500 shadow-2xl grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 ease-in-out relative z-10"
  /> */}
      </div>
    </section>
  );
};

export default Hero;
