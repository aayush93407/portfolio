import React from "react";
import { motion } from "framer-motion";

const Contact = () => (
  <motion.section
    id="contact"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{
      padding: "50px 20px",
      backgroundColor: "#f9fafb",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      maxWidth: "800px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        color: "#0e86d4",
        fontSize: "2.6rem",
        marginBottom: "30px",
        fontWeight: 700,
      }}
    >
      Contact Me
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      style={{ fontSize: "1.1rem", color: "#374151", marginBottom: "10px" }}
      whileHover={{ color: "#2563eb", scale: 1.05, textDecoration: "underline" }}
    >
      Email: <a href="mailto:aaku21ainds@cmrit.ac.in" style={linkStyle}>aayushkumar93407@gmail.com</a>
    </motion.p>

    <motion.p
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      style={{ fontSize: "1.1rem", color: "#374151", marginBottom: "10px" }}
      whileHover={{ color: "#2563eb", scale: 1.05, textDecoration: "underline" }}
    >
      Phone: <span style={linkStyle}>+91 895 593 1443</span>
    </motion.p>

    <motion.p
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      style={{ fontSize: "1.1rem", color: "#374151", marginBottom: "10px" }}
      whileHover={{ color: "#2563eb", scale: 1.05, textDecoration: "underline" }}
    >
      LinkedIn:{" "}
      <a href="https://www.linkedin.com/in/aayush-kumar-6b5191263" target="_blank" rel="noreferrer" style={linkStyle}>
        Aayush Kumar
      </a>
    </motion.p>

    <motion.p
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      style={{ fontSize: "1.1rem", color: "#374151", marginBottom: "20px" }}
      whileHover={{ color: "#2563eb", scale: 1.05, textDecoration: "underline" }}
    >
      GitHub:{" "}
      <a href="https://github.com/aayush93407" target="_blank" rel="noreferrer" style={linkStyle}>
        aayush93407
      </a>
    </motion.p>

    <motion.a
      href="/Aayush-Kumar-Resume.pdf"  
      download
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      style={{ display: "inline-block", marginTop: "20px" }}
    >
      <motion.button
        style={{
          padding: "12px 30px",
          fontSize: "1rem",
          backgroundColor: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease",
        }}
        whileHover={{
          backgroundColor: "#1d4ed8",
          scale: 1.1,
        }}
        whileTap={{ scale: 0.98 }}
      >
        Download Resume
      </motion.button>
    </motion.a>
  </motion.section>
);

const linkStyle = {
  color: "#3b82f6",
  textDecoration: "none",
  fontWeight: 500,
  transition: "color 0.3s ease",
};

export default Contact;
