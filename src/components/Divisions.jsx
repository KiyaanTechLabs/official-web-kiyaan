// src/components/Division.jsx
"use client";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import "./Divisions.scss";

const divisions = [
  {
    name: "Kiyaan Labs",
    tag: "AI & Automation",
    desc: "Innovating intelligent tools that automate the future of work.",
    icon: "/k1.png",
  },
  {
    name: "Kiyaan Assurance",
    tag: "Testing & QA",
    desc: "Where code meets confidence — precision testing and quality validation.",
    icon: "/k2.png",
  },
  {
    name: "Kiyaan Secure",
    tag: "Cybersecurity",
    desc: "Fortifying digital landscapes with modern, AI-enhanced security.",
    icon: "/sec.png",
  },
  {
    name: "Kiyaan BlockWorks",
    tag: "Blockchain Technology",
    desc: "Reimagining trust with modular and enterprise-ready blockchain solutions.",
    icon: "/block.png",
  },
  {
    name: "Kiyaan CampusOS",
    tag: "Modular Platforms",
    desc: "Empowering campuses with plug-and-play digital operating systems.",
    icon: "/k3.png",
  },
];

const Division = () => {
  const { darkMode } = useTheme();

  return (
    <section className={`division-section ${darkMode ? "dark" : ""}`} id="divisions">
      <div className="division-header">
        <h2>Our Divisions</h2>
        <p>Where innovation meets impact — explore what powers Kiyaan TechLabs.</p>
      </div>

      <div className="division-layout">
        <div className="division-top">
          {divisions.slice(0, 3).map((item, index) => (
            <motion.div
              className="division-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={item.icon} alt={item.name} className="division-icon" />
              <div className="division-content">
                <h3>{item.name}</h3>
                <span className="division-tag">{item.tag}</span>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="division-bottom">
          {divisions.slice(3).map((item, index) => (
            <motion.div
              className="division-card"
              key={index + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 3) * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={item.icon} alt={item.name} className="division-icon" />
              <div className="division-content">
                <h3>{item.name}</h3>
                <span className="division-tag">{item.tag}</span>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Division;