import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const titles = [
  "AI Engineer",
  "React-Native Developer",
  "SIH 2024 Finalist",
  "Web Developer",
  "Gen AI Enthusiast",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [rotationKey, setRotationKey] = useState(0); // Unique key to trigger rotation

  useEffect(() => {
    if (index === titles.length) return;

    if (subIndex === titles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(titles[index].substring(0, subIndex));
    }, deleting ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  const handleClick = () => {
    setRotationKey((prev) => prev + 1); // Change key to re-trigger animation
  };

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ textAlign: "center", paddingTop: "150px" }}
    >
      <motion.h1
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          fontSize: "3.5rem",
          fontWeight: "bold",
          color: "#000000",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        Yo, I'm{" "}
        <motion.span
          key={rotationKey} // Changes every click to re-trigger animation
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1 }}
          style={{ display: "inline-block", color: "#0e86d4" }}
        >
          Aayush Kumar
        </motion.span>
      </motion.h1>

      <p
        style={{
          fontSize: "1.5rem",
          marginTop: "20px",
          minHeight: "2rem",
          fontWeight: "500",
          color: "#1f2937",
        }}
      >
        {text}
        <span style={{ color: "#3b82f6" }}>|</span>
      </p>
    </motion.section>
  );
};

export default Hero;
