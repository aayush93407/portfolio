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
    title: "Insurance fraud detection",
    image: "/images/insurance.png",
    description: "Developed an advanced fraud detection system that identifies fraudulent claims across three major insurance sectors: Health Insurance, Vehicle Insurance, and Cyber Insurance.",
    github: "https://github.com/aayush93407/insurance_fraud"
  },
  {
    title: "Resource Sharing Platform",
    image: "/images/resource.png",
    description: "Developed an AI-driven platform that automates skill extraction, project matching, talent recommendation, and lost item recovery using Generative AI and ML. Implemented NLP models to extract skills from LinkedIn and resumes, computer vision for lost item identification, and NLG for automated documentation.",
    github: "https://github.com/aayush93407/resource_sharing"
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
                View on GitHub
              </motion.button>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Projects;
