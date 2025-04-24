import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(true);

    // Auto-collapse after 2 seconds
    setTimeout(() => {
      setExpanded(false);
    }, 1000);
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#fff",
        overflow: "hidden", // prevent breaking layout
      }}
    >
      {/* Expanding Brand Name */}
      <motion.div
        onClick={handleToggle}
        style={{
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "2.5rem",
          color: "#0e86d4",
          overflow: "hidden",
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
          maxWidth: expanded ? "400px" : "100px",
          transition: "max-width 0.6s ease-in-out",
        }}
        whileHover={{ scale: 1.1 }}
      >
        <AnimatePresence mode="wait">
          {expanded ? (
            <motion.span
              key="expanded"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              Aayush The Great
            </motion.span>
          ) : (
            <motion.span
              key="collapsed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              ATG
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "20px", fontSize: "1rem", fontWeight: 500 }}>
        {["About", "Education", "Skills", "Projects", "Internships", "Achievements", "Contact"].map((section) => (
          <Link
            key={section}
            to={section.toLowerCase()}
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            {section}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
