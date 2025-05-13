import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Geo Guide Bot",
    image: "/images/geo-guide.png", // Put this image in /public/images/
    description: "Innovated a cutting-edge surveillance system with OpenCV and machine learning; deployed drone technology for event classification and live bot tracking, achieving a 35% improvement in operational efficiency and coverage",
    github: "https://github.com/aayush93407/geoguide_bot"
  },
  {
    title: "Interview Preparation Platform",
    image: "/images/interview.png",
    description: "Built an AI-driven platform that extracts skills from LinkedIn profiles and generates personalized quizzes to assess users' knowledge. Based on incorrect answers, the system suggests relevant study material and re-evaluates users with an adaptive quiz.",
    github: "https://github.com/aayush93407/interview_prep"
  },
  {
    title: "Smart Battery Management App",
    image: "/images/react.jpeg",
    description: "Developed a Smart Battery Management Mobile Application using React Native, designed to help users monitor their device's battery health, performance, and manage support tickets effectively. The app features a secure authentication system, real-time battery condition display, and an easy-to-use ticket submission page for reporting battery-related issues.",
    github: "https://appetize.io/app/b_mlgz4mi6wnw2ysbr25kr4qs6vi"
    
  },
  {
    title: "Insurance fraud detection",
    image: "/images/insurance.png",
    description: "Developed an advanced fraud detection system that identifies fraudulent claims across three major insurance sectors: Health Insurance, Vehicle Insurance, and Cyber Insurance.",
    github: "https://front-end-chi-lemon.vercel.app/"
  },
  {
    title: "Resource Sharing Platform",
    image: "/images/resource.png",
    description: "Developed an AI-driven platform that automates skill extraction, project matching, talent recommendation, and lost item recovery using Generative AI and ML. Implemented NLP models to extract skills from LinkedIn and resumes, computer vision for lost item identification, and NLG for automated documentation.",
    github: "https://first-page-latest.vercel.app/"
  },
  {
    title: "Digital Restaurant Ordering System",
    image: "/images/menu.png",
    description: "This innovative restaurant ordering system uses facial recognition (DeepFace) and hand gestures (MediaPipe) for a completely contactless dining experience. Users can navigate the menu, place orders, and confirm with simple gestures—no touchscreens or waiters needed. The system automatically logs the order, generates a PDF bill with a QR code, and emails it instantly. Built with Python using OpenCV, Pygame, and FPDF, it’s smart, hygienic, and fun—bringing the future of dining to your fingertips.",
    github: "https://www.linkedin.com/posts/aayush-kumar-6b5191263_ai-gesturerecognition-computervision-activity-7324506632111951872-uCwI?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAECh36kBA2ZkoMc2jFbvc3uNV7QPsKVpCPY"
  }
];

const Projects = () => (
  <motion.section
    id="projects"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 style={{color:"#0e86d4"}}>Projects</h2>
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "30px"
    }}>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 100 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            padding: "20px",
            gap: "20px"
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "280px",
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
            }}
          />
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: "1.6rem", marginBottom: "10px" }}>{project.title}</h3>
            <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>{project.description}</p>
            <a href={project.github} target="_blank" rel="noreferrer">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                View Project
              </motion.button>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Projects;
