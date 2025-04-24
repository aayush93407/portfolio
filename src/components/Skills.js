import React, { useState } from "react";
import { motion } from "framer-motion";

const skillIcons = {
  Python: "/icons/python.png",
  "C++": "/icons/c++.png",
  Java: "/icons/java.png",
  C: "/icons/c.png",
  "React.js": "/icons/react.png",
  "React Native": "/icons/react-native.png",
  HTML5: "/icons/html5.png",
  CSS3: "/icons/css3.png",
  JavaScript: "/icons/javascript.png",
  Bootstrap: "/icons/bootstrap.png",
  "Node.js": "/icons/nodejs.png",
  "Express.js": "/icons/express.png",
  "REST APIs": "/icons/api.png",
  Git: "/icons/git.png",
  GitHub: "/icons/github.png",
  Postman: "/icons/postman.png",
  "VS Code": "/icons/vs.png",
  PyCharm: "/icons/pycharm.png",
  "Arduino IDE": "/icons/arduino.png",
  QGIS: "/icons/qgis.png",
  Eclipse: "/icons/eclipse.png",
  ROS: "/icons/ros.png",
  "Solid-Edge": "/icons/solid.png",
  NLP: "/icons/nlp.png",
  GenAI: "/icons/genai.png",
  RAG: "/icons/rag.png",
  LSTM: "/icons/lstm.png"
};

const skillData = {
  Languages: ["Python", "C++", "Java", "C"],
  Frontend: ["React.js", "React Native", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  "Machine Learning": ["NLP", "GenAI", "RAG", "LSTM"],
  Tools: ["Git", "GitHub", "Postman", "VS Code", "PyCharm"],
  Other: ["Arduino IDE", "QGIS", "Eclipse", "ROS", "Solid-Edge"]
  
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Languages");

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 style={{ textAlign: "center", color: "#0e86d4" }}>Skills</h2>

      {/* Tabs */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px",
        backgroundColor: "#e5e7eb",
        borderRadius: "12px",
        padding: "10px",
        margin: "30px auto",
        width: "fit-content"
      }}>
        {Object.keys(skillData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
                backgroundColor: activeTab === tab ? "#3b82f6" : "transparent",
                color: activeTab === tab ? "white" : "#1e40af",  // darker blue for unselected                
              padding: "10px 16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontWeight: 500
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skill List */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        marginTop: "20px"
      }}>
        {skillData[activeTab].map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "#f3f4f6",
              color: "#1f2937",
              borderRadius: "8px",
              padding: "10px 16px",
              width: "260px",
              boxShadow: "0 3px 6px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={skillIcons[skill]}
              alt={skill}
              style={{ width: "24px", height: "24px", objectFit: "contain" }}
            />
            <span style={{ fontSize: "1rem", fontWeight: 500 }}>{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
