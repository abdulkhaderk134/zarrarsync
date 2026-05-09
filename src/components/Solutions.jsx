import React from "react";
import { motion } from "framer-motion";
import "../styles/solutions.css";

const solutions = [
  {
    name: "BizSync",
    tag: "All-in-One",
    title: "Complete Business System",
    desc: "Manage your website, sales, and delivery in one powerful platform built for growing businesses.",
    features: ["Business Website", "Sales Dashboard", "Delivery Tracking"],
    accent: "#2563eb",
    accentBg: "#eff6ff",
    accentBorder: "#bfdbfe",
  },
  {
    name: "EduSync",
    tag: "For Students",
    title: "Student Portfolio Platform",
    desc: "Build a professional portfolio that showcases your skills, projects, and achievements to employers.",
    features: ["Project Showcase", "Resume Builder", "Shareable Link"],
    accent: "#0891b2",
    accentBg: "#ecfeff",
    accentBorder: "#a5f3fc",
  },
  {
    name: "WeddingSync",
    tag: "Personal",
    title: "Digital Wedding Experience",
    desc: "Share photos, videos, and precious memories with guests through a beautifully designed private page.",
    features: ["Private Gallery", "RSVP Management", "Guest Messaging"],
    accent: "#be185d",
    accentBg: "#fdf2f8",
    accentBorder: "#fbcfe8",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Solutions = () => {
  return (
    <section className="solutions-section" id="solutions">
      {/* Header */}
      <div className="solutions-header">
        <span className="solutions-badge">
          <span className="badge-dot" />
          Our Solutions
        </span>
        <h2 className="solutions-title">
          Complete systems, <span className="title-accent">not just services</span>
        </h2>
        <p className="solutions-sub">
          Each product is a fully integrated digital system — designed from the ground up for real-world needs.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        className="solutions-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {solutions.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="solution-card"
            style={{ "--accent": item.accent, "--accent-bg": item.accentBg, "--accent-border": item.accentBorder }}
          >
            {/* Top bar */}
            <div className="card-top-bar" />

            {/* Tag + Name */}
            <div className="card-meta">
              <span className="solution-tag">{item.tag}</span>
            </div>
            <h3 className="solution-name">{item.name}</h3>
            <h4 className="solution-title">{item.title}</h4>
            <p className="solution-desc">{item.desc}</p>

            {/* Feature pills */}
            <ul className="solution-features">
              {item.features.map((f, i) => (
                <li key={i} className="feature-pill">{f}</li>
              ))}
            </ul>

            {/* Divider */}
            <div className="card-divider" />

            {/* Button */}
            <button className="solution-btn">
              Explore {item.name}
              <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Solutions;