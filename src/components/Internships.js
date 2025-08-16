import React from "react";
import { motion } from "framer-motion";

// Internship data
const internships = [
  {
    company: "Sagility Healthcare",
    role: "Associate Software Engineer",
    duration: "July 2025 - Present",
    responsibilities: [
      "Designing and developing a Generative AI product leveraging NLP to evaluate and monitor agent performance.",
      "Improved evaluation accuracy by 30% through fine-tuning language models and optimizing pipelines.",
      "Automated performance insights generation, enabling 25% faster decision-making for managers.",
      "Integrated scalable workflows and APIs, enhancing system efficiency and reducing manual analysis by 40%."
    ],
    animation: { x: -100 }
  },
  {
    company: "AuxPlutes Tech",
    role: "AI Engineer Intern",
    duration: "Oct 2024 – Mar 2025",
    responsibilities: [
      "Developing responsive and dynamic user app using React native. ",
      "Integrated AI/ML models for smart automation.",
      "Integrated third-party libraries and APIs to enhance app functionality and improve efficiency. ",
      "Designing and implementing server-side logic using Node.js and Express.js.",
      "Utilizing React Router for efficient navigation and dynamic routing. "
    ],
    animation: { x: -100 }
  },
  {
    company: "EBTS Organization",
    role: "Machine Learning Intern",
    duration: "Jul 2024 – Aug 2024",
    responsibilities: [
      "Pre trained and optimized machine learning models, driving actionable insights; led training sessions for 5 team members, integrating these models into daily operations with a 20% improvement in decision-making efficiency.",
      "Provided key troubleshooting support to a team of developers, ensuring smooth and efficient execution of complex algorithms. ",
      "Pioneered innovative solutions, enhancing machine learning processes and boosting overall project efficiency by 15%."
    ],
    animation: { x: 100 }
  }
];

// Ripple effect on click
const handleRipple = (e) => {
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.left = `${e.nativeEvent.offsetX}px`;
  ripple.style.top = `${e.nativeEvent.offsetY}px`;
  e.currentTarget.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
};

const Internships = () => (
  <motion.section
    id="internships"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: "center", color: "#0e86d4", marginBottom: "30px" }}
    >
      Experience
    </motion.h2>

    <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
      {internships.map((intern, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: intern.animation.x }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.3 }}
          whileHover={{ scale: 1.03 }}
          style={{
            width: "320px",
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            padding: "25px",
            borderRadius: "15px",
            backdropFilter: "blur(8px)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
            color: "#1e293b"
          }}
        >
          {/* Role */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: "1.3rem", color: "#0f172a", marginBottom: "8px" }}
          >
            {intern.role}
          </motion.h3>

          {/* Company name with hover effect */}
          <motion.p
            style={{ marginBottom: "6px", fontWeight: "bold", color: "#3b82f6", display: "inline-block", fontSize: "1.05rem" }}
            whileHover={{ scale: 1.1, fontWeight: 800 }}
            transition={{ duration: 0.2 }}
          >
            {intern.company}
          </motion.p>

          {/* Duration */}
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: "0.9rem", color: "#64748b", marginBottom: "12px" }}
          >
            {intern.duration}
          </motion.p>

          {/* Responsibilities list */}
          <ul style={{ paddingLeft: "20px", lineHeight: "1.6", fontSize: "1rem", color: "#374151" }}>
            {intern.responsibilities.map((item, i) => (
              <motion.li
              key={i}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#1e3a8a",  // Instant background color change
                color: "#fff",
                boxShadow: "0 4px 20px rgba(30,58,138,0.5)",
                transition: "none"  // Prevent transition on hover for backgroundColor
              }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              onClick={handleRipple}
              style={{
                background: "rgba(255,255,255,0.5)",
                padding: "10px 14px",
                borderRadius: "10px",
                marginBottom: "10px",
                fontWeight: 500,
                position: "relative",
                overflow: "hidden",
                cursor: "pointer"
              }}
            >
              {item}
            </motion.li>
            
            
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Internships;
