import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import vdo from "./assets/vdo.mp4";
import bg5 from "./assets/bg5.jpg";

function App() {
  return (
    <>
      <div className="font-sans text-gray-500 bg-[#0b0917]">
        <Navbar />
      </div>
      <div
        className="font-sans text-gray-500 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg5})` }}
      >
        <Hero />
      </div>
       <div className="font-sans text-gray-800 min-h-screen flex flex-col items-center justify-center [background-color:#0b0917]  text-white px-6">
      {/* bg-gradient-to-br from-[#0f0c29] to-[#302b63] */}
        <About />
         <Experience />
        <Skills />
       
        <Projects />
        </div>
      {/* <div className="bg-[#0b0917] px-6">
        <Contact />
      </div> */}
      {/* Contact section with video background */}
      <div className="relative w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          muted
          loop
          playsInline
          src={vdo}
          type="video/mp4"
        />
        <div className="relative z-10 bg-black/60 px-6 py-16">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
