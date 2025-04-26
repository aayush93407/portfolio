import React from "react";
import { motion } from "framer-motion";

const highlights = [
  "🏆 SIH 2024 Finalist – AI & ML Hackathon",
  "👨‍💻 React Native Developer Intern at Auxplutes Tech",
  "🤖 Machine Learning Intern at EBTS Org",
  "💻 Skilled in Full-Stack Dev and Machine Learning",
  "📚 CGPA of 9.03 (till 7th semester) with strong academic record",
  "🚀 GenAI enthusiast – worked with Mistral & custom LLMs"
];

const About = () => (
  <motion.section
    id="about"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 style={{ color: "#0e86d4" }}>About Me</h2>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "30px",
      }}
    >
      {/* Avatar */}
      <motion.img
        src="/images/avatar.png"
        alt="Aayush"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          objectFit: "cover",
          boxShadow: "0 4px 20px rgba(20,10,30,0.2)",
        }}
      />

      {/* Text Content */}
      <div style={{ flex: 1 }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: "1.1rem", lineHeight: "1.7" }}
        >
          I am Aayush Kumar, currently pursuing B.E. in Artificial Intelligence and Data Science at CMRIT, Bengaluru.
          I’m deeply passionate about building scalable tech and intelligent systems that solve real-world problems.
          In my free time, I enjoy playing chess, badminton, and exploring emerging technologies.
        </motion.p>

        {/* Highlights list */}
        <ul style={{ marginTop: "20px", listStyleType: "none", padding: 0 }}>
          {highlights.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{
                backgroundColor: "#0f172a",
                color: "#38bdf8",
                textShadow: "0 0 8px #38bdf8",
                scale: 1.03,
              }}
              style={{
                marginBottom: "10px",
                fontSize: "1rem",
                color: "#334155",
                borderRadius: "8px",
                padding: "8px 12px",
                transition: "all 0.3s ease",
                cursor: "default"
              }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </motion.section>
);

export default About;
