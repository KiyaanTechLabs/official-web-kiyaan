"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import "./Hero.scss";

const Hero = () => {
  const { darkMode } = useTheme();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={`hero-section ${darkMode ? "dark" : ""}`}>
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Build with Clarity. <br /> Scale with Kiyaan.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Empowering innovation with AI, Web3 and automation <br />
          – all under one unified platform.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="primary-btn"
            onClick={() => scrollToSection("contact")}
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="secondary-btn"
            onClick={() => scrollToSection("divisions")}
          >
            Explore Products
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <video
          src="/kv.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        />
      </motion.div>
    </section>
  );
};

export default Hero;