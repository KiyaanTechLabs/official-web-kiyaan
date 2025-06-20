import React, { useState } from "react";
import "./contact.scss";
import { Player } from "@lottiefiles/react-lottie-player";
import glow from "../assets/lottie/contact-glow.json";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 3200); // Hide after 3s
  };

  return (
    <section className="contact-section" id="contact">
      {submitted && (
        <div className="glass-overlay">
          <div className="glass-modal">
            <Player
              autoplay
              loop
              src={glow}
              className="form-submission-lottie"
            />
            <p className="modal-message">
              We’re recording your message.<br />
              We'll get back to you soon — <strong>Promise.</strong>
            </p>
          </div>
        </div>
      )}

      <div className="contact-inner">
        {/* Left Text Section */}
        <div className="contact-text">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtext">
            Whether you have an idea, a vision, or just a spark of curiosity — we're here to bring it to life.
            Fill out the form and we’ll get back to you soon.
          </p>
        </div>

        {/* Form Section */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <textarea placeholder="Your Message" required />
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;