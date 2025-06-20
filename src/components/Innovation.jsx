import React from "react";
import "./innovation.scss";

const innovations = [
  {
    name: "Atlas",
    desc: "Your intelligent infrastructure navigator — simplifying complex systems at global scale.",
    status: "Coming Soon",
    icon: "/assets/icons/atlas.png",
  },
  {
    name: "NexQA",
    desc: "A next-gen AI quality agent — ensuring precision, reliability, and trust in every system.",
    status: "Private Alpha",
    icon: "/assets/icons/qa.png",
  },
  {
    name: "Trinity",
    desc: "The unified intelligence core — blending data, code, and consciousness for tomorrow.",
    status: "In Labs",
    icon: "/assets/icons/trinity.png",
  },
];

const Innovation = () => {
  return (
    <section className="innovation-section" id="innovation">
      <div className="innovation-header">
        <h2 className="section-title">Innovation @ Kiyaan</h2>
        <p className="section-subtext">
          The future isn’t found — it’s engineered. Explore the bleeding edge of intelligence, autonomy, and infrastructure.
        </p>
      </div>

      <div className="innovation-grid">
        {innovations.map((item, index) => (
          <div className="innovation-card" key={index}>
            <div className="icon-circle">
              <img src={item.icon} alt={item.name} className="innovation-icon" />
            </div>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <div className="status-badge glow">{item.status}</div>
          </div>
        ))}
      </div>

      <div className="innovation-mission">
        <h3>Why We Innovate</h3>
        <p>
          We’re not just building products — we’re engineering the future. Every line of code, every design decision, every system
          we deploy is in service of a greater vision: a world that is more connected, intelligent, and equitable. At Kiyaan, we
          believe the innovations of today should uplift the world of tomorrow.
        </p>
        <p>
          From securing digital trust to empowering human potential through AI, we take responsibility for shaping what’s next.
          We don’t chase trends — we build what the world hasn’t seen yet.
        </p>
        <p className="cta">
          🚀 Join the movement. <span className="highlight">@Kiyaan</span> is calling the dreamers, builders, and believers.
        </p>
      </div>
    </section>
  );
};

export default Innovation;