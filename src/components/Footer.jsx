import React from "react";
import "./footer.scss";
import { Player } from "@lottiefiles/react-lottie-player";
import globe from "../assets/lottie/globe2.json";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Gradient Background Overlay */}
      <div className="footer-bg-overlay"></div>

      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Left Section - Brand */}
          <div className="footer-section footer-brand">
            <div className="brand-container">
              <img src="/assets/icons/logo.png" alt="Kiyaan Logo" className="footer-logo" />
              <h3 className="brand-name">Kiyaan TechLabs PVT. LTD.</h3>
            </div>
            <p className="brand-description">
              Building technology not just for today, but for a resilient,
              intelligent, and human-centric tomorrow. We craft digital
              experiences that transform industries and empower communities.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <MdEmail className="contact-icon" />
                <span>kiyaantechlabs@gmail.com</span>
              </div>
              <div className="contact-item">
                <MdEmail className="contact-icon" />
                <span>samarth.patil3101@gmail.com</span>
              </div>
              <div className="contact-item">
                <MdPhone className="contact-icon" />
                <span>+91 8766794922</span>
              </div>
              <div className="contact-item">
                <MdLocationOn className="contact-icon" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="contact-item">
                <MdLocationOn className="contact-icon" />
                <span>Chh. Sambhajinagar, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Middle Section - Globe Animation */}
          <div className="footer-section footer-center">
            <div className="globe-container">
              <div className="globe-glow"></div>
              <Player
                autoplay
                loop
                src={globe}
                style={{ height: "160px", width: "160px", zIndex: 2, position: "relative" }}
              />
            </div>
            <h4 className="globe-title">Global Innovation</h4>
            <p className="globe-caption">
              Empowering the next digital civilization with cutting-edge
              technology solutions that span across continents.
            </p>
          </div>

          {/* Right Section - Links & Social */}
          <div className="footer-section footer-links">
            <div className="links-group">
              <h4 className="links-title">Quick Links</h4>
              <div className="quick-links">
                <a href="#features" className="footer-link"><span>Features</span></a>
                <a href="#divisions" className="footer-link"><span>Divisions</span></a>
                <a href="#products" className="footer-link"><span>Products</span></a>
                <a href="#innovation" className="footer-link"><span>Innovation</span></a>
                <a href="#contact" className="footer-link"><span>Contact</span></a>
              </div>
            </div>

            <div className="links-group">
              <h4 className="links-title">Connect With Us</h4>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/samarth-patil-abb745289/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                  <FaLinkedin />
                  <span className="social-tooltip">LinkedIn</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                  <FaInstagram />
                  <span className="social-tooltip">Instagram</span>
                </a>
                <a href="https://github.com/samarth3101" target="_blank" rel="noopener noreferrer" className="social-link github">
                  <FaGithub />
                  <span className="social-tooltip">GitHub</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                  <FaTwitter />
                  <span className="social-tooltip">Twitter</span>
                </a>
                {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                  <FaYoutube />
                  <span className="social-tooltip">YouTube</span>
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider">
          <div className="divider-line"></div>
          <div className="divider-dot"></div>
          <div className="divider-line"></div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <span>© 2025 Kiyaan TechLabs Pvt. Ltd.</span>
              <span className="separator">•</span>
              <span>All rights reserved</span>
            </div>
            <div className="footer-legal">
              <a href="#privacy" className="legal-link">Privacy Policy</a>
              <a href="#terms" className="legal-link">Terms of Service</a>
              <a href="#cookies" className="legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;