import React from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";

const Hero = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const phone = "919538074648";
  const message = "Hi ZarrarSync! I want a free website mockup for my business.";
  const waUrl = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

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
          Hyderabad-based Web Agency
        </div>

        <h1>
          Your Business Deserves <br />
          a <span className="highlight">Powerful Website</span>
        </h1>

        <p>
          We build professional websites, sales systems, and digital platforms
          that help your business get found online and grow faster.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn" onClick={() => scrollTo("contact")}>
            Get Free Mockup
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <a className="secondary-btn" href={waUrl} target="_blank" rel="noreferrer">
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* Trust row */}
        <div className="hero-trust">
          <div className="trust-item">
            <span className="trust-icon">✅</span>
            <span>Free consultation</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-icon">⚡</span>
            <span>7 day delivery</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-icon">💰</span>
            <span>Starting ₹1,999</span>
          </div>
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
          <span className="stat-icon">⚡</span>
          <div>
            <div className="stat-value">7 days</div>
            <div className="stat-label">Avg. delivery time</div>
          </div>
        </motion.div>

        {[
          { name: "BizSync", desc: "Business Website", icon: "💼", color: "#eff6ff", border: "#bfdbfe" },
          { name: "EduSync", desc: "Student Portfolio", icon: "🎓", color: "#f0fdf4", border: "#bbf7d0" },
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
            onClick={() => scrollTo("solutions")}
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
          <span className="stat-icon">🇮🇳</span>
          <div>
            <div className="stat-value">Hyderabad</div>
            <div className="stat-label">Local. Fast. Reliable.</div>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;