import React from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";

const Hero = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">

      {/* Left Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Top badge */}
        <div className="hero-badge">
          <span className="badge-dot" />
          Trusted by 500+ businesses
        </div>

        <h1>
          Design. Manage. Grow. <br />
          All in One <span className="highlight">Digital System</span>
        </h1>

        <p>
          We create powerful websites, sales systems, and digital platforms
          for businesses, students, and personal events.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn" onClick={() => scrollTo("contact")}>
            Get Started
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="secondary-btn" onClick={() => scrollTo("services")}>
            View Demo
          </button>
        </div>

        {/* Social proof */}
        <div className="hero-proof">
          <div className="proof-avatars">
            <div className="avatar" style={{ background: "#6366f1" }}>A</div>
            <div className="avatar" style={{ background: "#ec4899" }}>B</div>
            <div className="avatar" style={{ background: "#f59e0b" }}>C</div>
            <div className="avatar" style={{ background: "#10b981" }}>D</div>
          </div>
          <p className="proof-text">
            <strong>4.9/5</strong> from 200+ reviews
          </p>
        </div>
      </motion.div>

      {/* Right Visual */}
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Floating card top */}
        <motion.div
          className="floating-stat"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="stat-icon">🚀</span>
          <div>
            <div className="stat-value">3x faster</div>
            <div className="stat-label">Launch speed</div>
          </div>
        </motion.div>

        {[
          { name: "BizSync", desc: "Business System", icon: "💼", color: "#eff6ff", border: "#bfdbfe" },
          { name: "EduSync", desc: "Portfolio Builder", icon: "🎓", color: "#f0fdf4", border: "#bbf7d0" },
          { name: "WeddingSync", desc: "Event Platform", icon: "💍", color: "#fdf4ff", border: "#e9d5ff" },
        ].map((card, i) => (
          <motion.div
            key={card.name}
            className="glass-card"
            style={{ "--card-bg": card.color, "--card-border": card.border }}
            whileHover={{ scale: 1.04, y: -4 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
          >
            <div className="card-icon">{card.icon}</div>
            <div className="card-text">
              <h3>{card.name}</h3>
              <p>{card.desc}</p>
            </div>
            <div className="card-arrow">→</div>
          </motion.div>
        ))}

        {/* Bottom floating stat */}
        <motion.div
          className="floating-stat right"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="stat-icon">✅</span>
          <div>
            <div className="stat-value">500+ clients</div>
            <div className="stat-label">Worldwide</div>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;