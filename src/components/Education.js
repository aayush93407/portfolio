import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.E. in AI & Data Science",
    place: "CMR Institute of Technology, Bengaluru",
    result: "CGPA: 9.03 (Pursuing)",
    year: "2021 - 2025"
  },
  {
    degree: "12th Grade (Science)",
    place: "Central Academy, Kota, Rajasthan",
    result: "79.6%",
    year: "2019 - 2021"
  },
  {
    degree: "10th Grade",
    place: "Excellent Public School, Lokapur",
    result: "91%",
    year: "2018 - 2019"
  }
];

const Education = () => (
  <motion.section
    id="education"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 style={{color: "#0e86d4"}}>Education</h2>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "space-between"
      }}
    >
      {educationData.map((edu, idx) => (
        <motion.div
        key={idx}
        whileHover={{
          scale: 1.05,
          rotateX: 2,
          rotateY: 2,
          backgroundColor: "#b1d4e0", // grey glass tone on hover
        }}
        transition={{ type: "spring", stiffness: 200 }}
        style={{
          flex: "1 1 300px",
          background: "rgba(255,255,255,0.3)",
          borderRadius: "15px",
          padding: "20px",
          backdropFilter: "blur(10px)",
          boxShadow: `
            0 8px 20px rgba(0,0,0,0.1),
            inset 0 0 20px rgba(255,255,255,0.15)
          `,
          transition: "all 0.3s ease",
          transformStyle: "preserve-3d",
          cursor: "pointer"
        }}
      >
      
          <h3 style={{ fontSize: "1.4rem", color: "#0f172a" }}>{edu.degree}</h3>
          <p style={{ marginTop: "10px", color: "#334155" }}>{edu.place}</p>
          <p><strong>{edu.result}</strong></p>
          <p style={{ fontSize: "0.9rem", color: "#64748b" }}>{edu.year}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Education;
