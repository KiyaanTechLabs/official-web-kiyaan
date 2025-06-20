// src/components/Features.jsx
import React from "react";
import "./Features.scss";

const featureCards = [
  {
    title: "Vision at Core",
    desc: "We don't chase trends — we shape futures. Our vision sets direction, our execution defines legacy.",
    icon: "/v1.png",
  },
  {
    title: "Bold Thinking",
    desc: "From raw ideas to real-world disruption — every thought is designed to question the norm.",
    icon: "/b.png",
  },
  {
    title: "Quality Obsessed",
    desc: "Perfection isn’t optional — it’s protocol. Every pixel, every line of code speaks precision.",
    icon: "/q2.png",
  },
  {
    title: "Battle-Tested Delivery",
    desc: "Ready-made tools that deliver at scale — crafted to solve, built to last.",
    icon: "/t.png",
  },
  {
    title: "Built to Dominate",
    desc: "Not just built to work — built to win. We design for scale, speed, and superiority.",
    icon: "/g.png",
  },
];

const Features = () => {
  return (
    <section id="features" className="core-features">
      <div className="features-header">
        <h2>What Defines Us</h2>
        <p>Not just another tech venture — this is Kiyaan TechLabs.</p>
      </div>

      <div className="features-layout">
        <div className="features-top">
          {featureCards.slice(0, 3).map((feature, i) => (
            <div className="feature-card" key={i}>
              <img src={feature.icon} alt={feature.title} className="feature-icon" />
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="features-bottom">
          {featureCards.slice(3).map((feature, i) => (
            <div className="feature-card" key={i + 3}>
              <img src={feature.icon} alt={feature.title} className="feature-icon" />
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;