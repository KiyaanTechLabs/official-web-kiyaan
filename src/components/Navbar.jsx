"use client";
import { useTheme } from '../context/ThemeContext';
import React, { useState } from "react";
import { FiSearch, FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import notFoundAnim from "../assets/lottie/ser.json";
import { useRouter } from "next/navigation";
import "./navbar.scss";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navItems = [
    { name: "Features", id: "features" },
    { name: "Divisions", id: "divisions" },
    { name: "Products", id: "products" },
    { name: "Innovation", id: "innovation" },
    { name: "Contact", id: "contact" },
  ];

  const validSections = [
    { id: "features", keywords: ["features", "serve", "feature", "services"] },
    { id: "divisions", keywords: ["division", "divisions", "labs", "unit"] },
    { id: "products", keywords: ["product", "products", "ai", "atlas", "nexqa", "trinity"] },
    { id: "innovation", keywords: ["innovation", "future", "ideas"] },
    { id: "contact", keywords: ["contact", "connect", "reach"] },
  ];

  const handleSearch = () => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return;

    const matched = validSections.find(section =>
      section.keywords.some(keyword => query.includes(keyword))
    );

    if (matched) {
      document.getElementById(matched.id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2600);
    }

    setSearchTerm("");
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="navbar-left">
        <div className="logo-badge">
          <img src="/icok.png" alt="Kiyaan Logo" className="logo-img" />
          <span className="logo-text">Kiyaan</span>
        </div>

        {/* Desktop Search */}
        <div className="search-bar desktop-only">
          <select className="search-category">
            <option>All</option>
            <option>Products</option>
            <option>Labs</option>
            <option>Divisions</option>
          </select>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button className="search-button" onClick={handleSearch}>
            <FiSearch />
          </button>
        </div>
      </div>

      {/* Center Navigation */}
      <ul className="navbar-center desktop-only">
        {navItems.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a href={`#${item.id}`} className="navlink">
              {item.name}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Right Side Buttons */}
      <div className="navbar-right">
        <div className="auth-links desktop-only">
          <a  className="signup" onClick={() => router.push("/sign")}>Sign up</a>
          {/* <button className="signup" onClick={() => router.push("/sign")}>Sign up</button> */}
          <button className="login" onClick={() => router.push("/sign")}>Log in</button>
        </div>

        <motion.button
          className="mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </motion.button>

        <button
          className="mobile-menu-toggle mobile-only"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
            />
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="mobile-search-bar">
                <select className="search-category">
                  <option>All</option>
                  <option>Products</option>
                  <option>Labs</option>
                  <option>Divisions</option>
                </select>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button className="search-button" onClick={handleSearch}>
                  <FiSearch />
                </button>
              </div>

              <ul className="mobile-nav">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    onClick={closeMobileMenu}
                  >
                    <a href={`#${item.id}`} className="mobile-navlink">
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mobile-auth"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <a href="#" className="mobile-signup" onClick={() => router.push("/sign")}>Sign up</a>
                <button className="mobile-login" onClick={() => router.push("/sign")}>Log in</button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="search-popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              className="search-popup"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Player
                autoplay
                loop
                src={notFoundAnim}
                className="popup-animation"
              />
              <div className="popup-message">Oops! No results found</div>
              <div className="popup-note">That section doesn’t exist yet. We’ll work on it!</div>
              <button className="popup-close" onClick={() => setShowPopup(false)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;