import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  MessageSquare,
} from "lucide-react";
import RoboViewer from "./RoboViewer";
import emailjs from "emailjs-com";


const Contact = () => {
  const cardRef = useRef(null);
  const roboRef = useRef(null);
  const formRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [roboVisible, setRoboVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          cardObserver.unobserve(cardRef.current);
        }
      },
      { threshold: 0.3 }
    );

    const roboObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRoboVisible(true);
          roboObserver.unobserve(roboRef.current);
        }
      },
      { threshold: 0.3 }
    );

    const formObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFormVisible(true);
          formObserver.unobserve(formRef.current);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) cardObserver.observe(cardRef.current);
    if (roboRef.current) roboObserver.observe(roboRef.current);
    if (formRef.current) formObserver.observe(formRef.current);

    return () => {
      if (cardRef.current) cardObserver.unobserve(cardRef.current);
      if (roboRef.current) roboObserver.unobserve(roboRef.current);
      if (formRef.current) formObserver.observe(formRef.current);
    };
  }, []);
//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };


// const handleSubmit = (e) => {
//   e.preventDefault();

//   emailjs
//     .sendForm(
//       "your_service_id",
//       "your_template_id",
//       e.target,
//       "your_public_key"
//     )
//     .then(
//       (result) => {
//         console.log("SUCCESS!", result.text);
//         setSubmitted(true);
//         setFormData({ name: "", email: "", message: "" });
//         setTimeout(() => setSubmitted(false), 3000);
//       },
//       (error) => {
//         console.error("FAILED...", error.text);
//         alert("Sorry, your message could not be sent.");
//       }
//     );
// };


  return (
    <section
      id="contact"
      className="flex flex-col-reverse md:flex-row px-4 sm:px-6 pt-24 py-10 text-white max-w-6xl mx-auto gap-10"
    >
      {/* Card */}
      <div
        ref={cardRef}
        className={`[background-color:#1d1836] rounded-2xl shadow-lg p-8 w-full md:w-1/2 max-w-sm
          transform transition-all duration-700 ease-out
          ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}
      >
        <p className="text-pink-400 text-sm uppercase tracking-widest mb-2">
          Get in touch
        </p>
        <h2 className="text-4xl font-extrabold mb-8 text-white">Contact</h2>

        <div className="bg-[#121026] rounded-lg p-6">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="text-indigo-600" />
              <a
                href="mailto:fahmidakm99@gmail.com"
                className="text-white hover:underline break-all"
              >
                fahmidakm99@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="text-indigo-600" />
              <a href="tel:+96894047147" className="text-white hover:underline">
                {/* +968 9404 7147 */}
                +971 507315421
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="text-indigo-600" />
              <span className="text-white">
                {/* Muscat, Oman */}
                Dubai, UAE
              </span>
            </div>

            <div className="flex items-center justify-start space-x-6 pt-4 border-t border-gray-700">
              <a
                href="https://www.linkedin.com/in/fahmida-k-m-52a5421b8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="text-indigo-600 hover:scale-110 transition" />
              </a>
              <a
                href="https://github.com/fahmidakm99?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="text-indigo-600 hover:scale-110 transition" />
              </a>
              <a
                href="https://www.instagram.com/ms.queen.forever"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="text-indigo-600 hover:scale-110 transition" />
              </a>
              {/* <a
                href="https://wa.me/971507315421"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="text-indigo-600 hover:scale-110 transition" />
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* RoboViewer */}
      {/* <div
        ref={roboRef}
        className={`w-full md:w-1/2 flex justify-center items-center transform transition-all duration-700 ease-out
          ${roboVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
      >
        <RoboViewer />
      </div> */}

      {/* Contact Form */}
      {/* <div
        ref={formRef}
        className={`w-full md:w-1/2 rounded-2xl shadow-lg p-8
          transform transition-all duration-700 ease-out
          ${
            formVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          }`}
      >
        <p className="text-pink-400 text-sm uppercase tracking-widest mb-2">
          Send a Message
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#121026] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#121026] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#121026] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 transition text-white font-semibold py-3 rounded-lg"
          >
            Send
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-green-400 font-medium">
            Thank you! Your message has been sent.
          </p>
        )}
      </div> */}
    </section>
  );
};

export default Contact;
