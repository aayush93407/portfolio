import React from "react";
import { motion } from "framer-motion";

const achievements = [
  { text: "Finalist - SIH 2024", badge: "🏆" },
  { text: "1st Place - Technovation 2024", badge: "🥇" },
  { text: "2nd Place - TEXPLORE 2024", badge: "🥈" },
  { text: "Semi-Finalist - EYSS 2022", badge: "🏅" },
  { text: "Qualified - eYRC Stage 2, IIT Bombay (2023)", badge: "🎯" }
];

const activities = [
  { text: "SBI Hack-AI-Thon (2025)", badge: "💻" },
  { text: "SIH (2024, 2023)", badge: "🏆" },
  { text: "MANTHAN by FKCCI", badge: "🔬" },
  { text: "eYRC (2023)", badge: "🎯" },
  { text: "Webinar: Cyber Security - CMRIT", badge: "🛡️" },
  { text: "Visited HAL (2023)", badge: "🏭" },
  { text: "Blender (Udemy)", badge: "🎓" },
  { text: "Python DS (Udemy)", badge: "🎓" },
  { text: "C (Coursera)", badge: "🎓" }
];

// Ripple animation style
const rippleStyle = {
  position: "relative",
  overflow: "hidden",
  cursor: "pointer"
};

const handleRipple = (e) => {
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.left = `${e.nativeEvent.offsetX}px`;
  ripple.style.top = `${e.nativeEvent.offsetY}px`;
  e.currentTarget.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
};

const Achievements = () => (
  <motion.section
    id="achievements"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: "center", color: "#0e86d4", marginBottom: "40px" }}
    >
      Achievements & Activities
    </motion.h2>

    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          flex: "1 1 350px",
          backgroundColor: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(10px)",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.1)"
        }}
      >
        <h3 style={{ color: "#1e3a8a" }}>🏆 Achievements</h3>
        <ul style={{ paddingLeft: "20px", marginTop: "15px", color: "#374151", lineHeight: "1.7" }}>
          {achievements.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#1e3a8a",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(30,58,138,0.5)",
                transition: { duration: 0 } // This ensures the background color changes instantly
              }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{
                ...rippleStyle,
                background: "rgba(255,255,255,0.5)",
                padding: "12px 16px",
                borderRadius: "10px",
                marginBottom: "10px",
                position: "relative",
                fontWeight: 500,
                fontSize: "1rem"
              }}
              onClick={handleRipple}
            >
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{ marginRight: "10px" }}
              >
                {item.badge}
              </motion.span>
              {item.text}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Activities */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          flex: "1 1 350px",
          backgroundColor: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(10px)",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.1)"
        }}
      >
        <h3 style={{ color: "#1e3a8a" }}>🎯 Activities</h3>
        <ul style={{ paddingLeft: "20px", marginTop: "15px", color: "#374151", lineHeight: "1.7" }}>
          {activities.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#1e3a8a",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(30,58,138,0.5)",
                transition: { duration: 0 } // This ensures the background color changes instantly
              }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{
                ...rippleStyle,
                background: "rgba(255,255,255,0.5)",
                padding: "12px 16px",
                borderRadius: "10px",
                marginBottom: "10px",
                position: "relative",
                fontWeight: 500,
                fontSize: "1rem"
              }}
              onClick={handleRipple}
            >
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{ marginRight: "10px" }}
              >
                {item.badge}
              </motion.span>
              {item.text}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  </motion.section>
);

export default Achievements;
