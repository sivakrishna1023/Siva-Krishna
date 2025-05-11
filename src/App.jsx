import React, { useEffect, useState } from "react";
import { FaGolang } from "react-icons/fa6";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareXTwitter} from "@fortawesome/free-brands-svg-icons"

import { SimpleIconsLeetcode } from "./leetcode";
import { CodeforcesIcon } from "./codeforces";

import {
  FaChalkboardTeacher,
  FaJsSquare,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaSun,
  FaMoon,
  FaGraduationCap,
  FaUsers,
  FaArrowUp,
  FaPython,
  FaJava,
  FaHtml5,
  FaDatabase,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaSwift,
  FaAndroid,
  FaCamera,
  FaBriefcase,
} from "react-icons/fa";

import {
  SiMongodb,
  SiTailwindcss,
  SiPostgresql,
  SiFastapi,
  SiSpringboot,
  SiCplusplus,
  SiKotlin,
  SiSocketdotio,
  SiPostman,
  SiVisualstudiocode, 
  SiTensorflow,
  SiLatex
} from "react-icons/si";
import MaterialUiLogo from './assets/mui.svg';
import { motion, AnimatePresence } from "framer-motion";
import profileImage from "./assets/Profile_image.jpg";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDark(storedTheme === "dark");
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const showTemporaryPopup = (message) => {
    const popup = document.createElement("div");
    popup.innerText = message;
    popup.className =  "fixed top-16 left-1/2 transform -translate-x-1/2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white py-3 px-6 rounded shadow-md transition-opacity duration-300 opacity-0 z-50";
    document.body.appendChild(popup);
    setTimeout(() => {
      popup.classList.add("opacity-100");
    }, 100); 
    setTimeout(() => {
      popup.classList.remove("opacity-100");
      setTimeout(() => {
        document.body.removeChild(popup);
      }, 300); 
    }, 750); 
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+916301178561");
    showTemporaryPopup("Phone number copied!");
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("chukkakrishna999@gmail.com");
    showTemporaryPopup("Email copied!");
  };

  const education = [
    {
      institution: "National Institute of Technology, Raipur",
      degree: "Bachelor in Electronic and Communication Engineering",
      duration: "December 2021 -- April 2025",
      gpa: "8.2",
    },
    {
      institution: "Aditya Junior College, Andhra Pradesh",
      degree: "Board of Intermediate Education (12th Standard)",
      duration: "June 2019 -- June 2021",
      gpa: "9.6",
    },
    {
      institution: "Bhashyam School of Education, Andhra Pradesh",
      degree: "Board of Secondary Education (10th Standard)",
      duration: "June 2018 -- June 2029",
      gpa: "10",
    },
  ];

  const achievements = [
    {
      title: "Knight @Leetcode",
      description: "Max Rating 1869, August 2024 - Present",
    },
    {
      title: "CodeRush 2024 Coding Challenge",
      description: "Achieved a Rank of 39 in the CodeRush 2024 campus offline coding challenge",
    },
    {
      title: "Graph Camp Contest",
      description: "Achieved 1st Rank in the Graph Camp Contest conducted by Algo University",
    },
    {
      title: "Google HashCode",
      description: "Achieved a Global Rank of 5719 and a National Rank of 616 in Google HashCode",
    },
  ];

  const projects = [
    {
      title: "Smart Attendance Tracking System",
      technologies: "Python, OpenCV, Custom Tkinter",
      date: "August. 2024",
      link: "https://github.com/sivakrishna1023/Smart-Attendance-Tracking-System",
      description: [
        "Engineered a real-time attendance system utilizing face recognition with OpenCV, combining Haar Cascade classifiers and TensorFlow for precise identification.",
        "Integrated live webcam-based attendance capture, producing Excel reports, and delivering them via email",
      ],
    },
    {
      title: "SwiftChat Project",
      technologies: "ReactJS, MongoDB, Scoket.IO, Docker, Redux-toolkit",
      date: "May. 2024",
      link: "https://github.com/sivakrishna1023/SwiftChat",
      description: [
        "Designed a scalable chat application for efficient communication between users and groups.",
        "Utilized React for frontend, Express and MongoDB for backend, and integrated Socket.IO for real-time communication, achieving a message delivery latency of less than 800ms.",
      ],
    },
    {
      title: "URL Shortener",
      technologies: "ReactJS, Node.js, ExpressJS, PostgreSQL",
      date: "Sep. 2024",
      link: "https://github.com/sivakrishna1023/URL-shorts",
      description: [
        "Built a full-stack URL shortener web application using ReactJS for the frontend and Node.js with ExpressJS for backend services, ensuring seamless user interactions and efficient data management.",
        "Optimized storage and retrieval of shortened URLs in PostgreSQL, improving overall performance and responsiveness.",
      ],
    },
    {
      title: "WorkNest Project",
      technologies: "ReactJS, Material-UI, ExpressJS, MongoDB",
      date: "Dec. 2023",
      link: "https://github.com/sivakrishna1023/WorkNest",
      description: [
        "Crafted a dynamic platform for professional networking and job searching.",
        "Implemented robust user authentication and real-time collaboration features such as flitering, Profile Match, etc.., with React, Express, and MongoDB.",
      ],
    },
    

  ];
  const experience = [
    {
      company:"Tutcart",
      role:"Full Stack Developer Intern",
      date:"March 2025 -- Present",
      description:[
        "Architected and implemented reusable email workflows for OTP delivery, purchase confirmations, and account-verification messages",
        "Developed a seamless refund processing pipeline—integrating backend, and payment-gateway"
      ]
    },
    {
      company: "Xchange",
      role: "Freelance Project - Backend Developer",
      date: "Nov 2023 -- Jan 2024",
      link: "https://xchange-mu.vercel.app",
      description: [
        "Developed critical API endpoints for user interaction, ensuring seamless frontend-backend integration.",
        "Thoroughly tested APIs with Postman for optimal functionality and reliability.",
      ],
    },
    {
      company: "Raise Digital Pvt. Ltd",
      role: "Web Development Intern",
      date: "Dec 2022 -- Jan 2023",
      link: "https://drive.google.com/file/d/1V-za2FlmSjqVRGS2GRnCIfge-ujYsEia/view",
      description: [
        "Worked with Tech Team to create an intuitive and engaging user experience, incorporating user feedback for continuous improvement. Being part of the team I was incharge of creating the front-end using ReactJS.",
      ],
    },
  ];
  const technicalSkills = {
    languages: [
      { name: "C++", icon: <SiCplusplus className="text-blue-600 text-3xl" /> },
      { name: "HTML/CSS", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-3xl" /> },
      { name: "SQL", icon: <FaDatabase className="text-blue-600 text-3xl" /> },
      { name: "Python", icon: <FaPython className="text-blue-500 text-3xl" /> }, 
    ],
    technologies: [
      { name: "GitHub", icon: <FaGithub className="text-gray-800 text-3xl" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500 text-3xl" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-600 text-3xl" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
      { name: "Tkinter", icon: <FaPython className="text-blue-500 text-3xl" /> },
      { name: "Material-UI", icon: <img src={MaterialUiLogo} alt="Material-UI" className="w-8 h-8" /> }, 
      { name: "Numpy", icon: <FaPython className="text-blue-500 text-3xl" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700 text-3xl" /> },
      { name: "React.js", icon: <FaReact className="text-blue-400 text-3xl" /> },
      { name: "Express.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
      { name: "Socket.IO", icon: <SiSocketdotio className="text-gray-500 text-3xl" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-600 text-3xl" /> },
      { name: "VSCode", icon: <SiVisualstudiocode className="text-blue-500 text-3xl" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500 text-3xl" /> },
      { name: "OpenCV", icon: <FaCamera className="text-green-500 text-3xl" /> },
      { name: "LaTeX", icon: <SiLatex className="text-gray-800 text-3xl" /> },
    ],
  };

  const leadership = [
    {
      title: "Team Sanskriti",
      role: "Core co-ordinator",
      duration: "August 2023 -- Present",
      institution: "National Institute of Technology, Raipur",
      responsibilities: [
        "Effectively managed all aspects of Eclectika, NIT Raipur’s annual cultural fest, including event planning, logistics management, and team coordination, showcasing robust organizational and leadership capabilities",
        
      ],
    },
  ];

  const coursework = [
    "Data Structures",
    "Web Development",
    "Algorithms",
    "OOPS",
    "Probability and Statistics",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    "Communication",
    "Machine Learning",
    "Deep Learning"
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
        <div className="max-w-4xl mx-auto px-4 py-2 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Siva Krishna
          </h1>
          <div className="space-x-4 flex-wrap hidden sm:flex">
            <a
              href="#experience"
              className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Experience
            </a>
            <a
              href="#education"
              className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Education
            </a>
            <a
              href="#projects"
              className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#achievements"
              className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Achievements
            </a>
            <a
              href="#leadership"
              className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Leadership
            </a>
          </div>
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none transition-colors duration-300"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-800" />
            )}
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-4 font-sans pt-20">
        <motion.div
          className="text-center my-8 p-6 rounded-lg bg-gradient-to-r from-gray-100 to-indigo-200 dark:from-gray-800 dark:to-indigo-900"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={profileImage}
            alt="Siva Krishna"
            loading="lazy"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-500 dark:border-gray-400"
          />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Siva Krishna
          </h1>
          <div className="flex flex-row justify-center items-center space-y-2 space-x-4 mt-4 text-gray-600 dark:text-gray-400">
           
              <div className="cursor-pointer" onClick={handleCopyPhone}>
                <FaPhone className="mr-1 hover:text-blue-500" size={20} /> 
              </div> 
              <div className="cursor-pointer" onClick={handleCopyEmail}  >
                <FaEnvelope className="mr-1 hover:text-blue-500" size={20} />
              </div>
              <div className="cursor-pointer" onClick={handleCopyEmail}  >
              <a
                href="https://www.linkedin.com/in/siva-krishna-4bb951250"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin className="mr-1 hover:text-blue-500" size={20} /> 
              </a>
              </div>

              <div className="cursor-pointer" onClick={handleCopyEmail}  >
              <a
                href="https://github.com/sivakrishna1023"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <FaGithub className="mr-1 hover:text-blue-500" size={20} /> 
              </a>
              </div>

              <div className="cursor-pointer" onClick={handleCopyEmail}  >
              <a
                href="https://leetcode.com/u/Sivakrishna96"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <SimpleIconsLeetcode size={50} />
              </a>
              </div>
              
              <div className="cursor-pointer" onClick={handleCopyEmail}  >
              <a
                href="https://codeforces.com/profile/SivaKrishna96"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
               <CodeforcesIcon size={50} />
              </a>
              </div>

              <div className="cursor-pointer" onClick={handleCopyEmail}  >
              <a
                href="https://x.com/_SivaKrishna96"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                  <FontAwesomeIcon icon={faSquareXTwitter} size="lg" />
              </a>
              </div>

          </div>
          <a
            href="https://drive.google.com/file/d/1SoETgBqYDbLtU6vcfbdcGirDq4g_tsVX/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-2 bg-gray-400 text-white font-semibold rounded-lg hover:bg-blue-500 dark:bg-gray-400 dark:hover:bg-blue-500 transition-colors duration-300"
          >
            View Resume
          </a>
        </motion.div>
        <section id="experience" className="mb-8">
          <h2 className="flex items-center text-2xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-1 text-gray-900 dark:text-gray-100">
          <div className="flex items-center space-x-2">
            <FaBriefcase style={{ color: '#3b82f6', fontSize: '1.25rem' }} />
            <span className="text-lg font-semibold">Experience</span>
        </div>
          </h2>
          <div className="mt-4 space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 bg-gray-50 dark:bg-gray-800 rounded-md p-4 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <h3 className="text-xl font-bold flex flex-wrap text-gray-800 dark:text-gray-200">
                  {exp.company}{" "}
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    {
                      exp.company==="Xchange"? "WebSite" : 
                        exp.company!=="Tutcart" ? "Certificate" : ""
                    }
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {exp.role} | {exp.date}
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="education" className="mb-8">
          <h2 className="flex items-center text-2xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-1 text-gray-900 dark:text-gray-100">
            <FaGraduationCap className="mr-2 text-blue-600 dark:text-blue-400" />
            Education
          </h2>
          <div className="mt-4 space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {edu.institution}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.degree} ({edu.duration})
                </p>
                {edu.gpa && (
                   <p className="text-gray-600 dark:text-gray-400"> CGPA  {edu.gpa}</p>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-8">
          <h2 className="flex items-center text-2xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-1 text-gray-900 dark:text-gray-100">
            💻 Projects
          </h2>
          <div className="mt-4 space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 bg-gray-50 dark:bg-gray-800 rounded-md p-4 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <h3 className="text-xl font-bold flex flex-wrap text-gray-800 dark:text-gray-200">
                  {project.title}{" "}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    GitHub
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {project.technologies} | {project.date}
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  {project.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="mb-8">
          <h2 className="flex items-center text-2xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-1 text-gray-900 dark:text-gray-100">
            🛠️ Technical Skills
          </h2>
          <div className="mt-4 flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                Languages:
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                {technicalSkills.languages.map((lang, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {lang.icon}
                    <span className="mt-2 text-sm">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                Technologies/Frameworks:
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {technicalSkills.technologies.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {tech.icon}
                    <span className="mt-2 text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="achievements" className="mb-8">
          <h2 className="flex items-center text-2xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-1 text-gray-900 dark:text-gray-100">
            <FaChalkboardTeacher className="mr-2 text-blue-600 dark:text-blue-400" />
            Achievements
          </h2>
          <ul className="mt-4 list-disc list-inside space-y-2">
            {achievements.map((ach, index) => (
              <motion.li
                key={index}
                className="text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400"
                >
                  <strong>{ach.title}</strong>
                </a>{" "}
                | <em>{ach.description}</em>
              </motion.li>
            ))}
          </ul>
        </section>

        <section id="leadership" className="mb-8">
          <h2 className="flex items-center text-2xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-1 text-gray-900 dark:text-gray-100">
            <FaUsers className="mr-2 text-blue-600 dark:text-blue-400" />
            Leadership / Extracurricular
          </h2>
          <div className="mt-4 space-y-4">
            {leadership.map((lead, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {lead.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {lead.role} ({lead.duration}), {lead.institution}
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  {lead.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-1 text-gray-900 dark:text-gray-100">
            📚 Relevant Coursework
          </h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {coursework.map((course, index) => (
              <div key={index}>
                <ul className="list-disc list-inside space-y-1">
                  <li className="text-gray-600 dark:text-gray-400">{course}</li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        <footer className="text-center mt-8 text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Siva Krishna. All rights reserved.
        </footer>
      </div>

      <AnimatePresence>
        {showScroll && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            aria-label="Scroll to Top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
