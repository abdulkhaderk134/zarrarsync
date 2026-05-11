import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/work.css";

const categories = ["All", "BizSync", "EduSync", "WeddingSync"];

const projects = [
  // BizSync
  {
    id: 1,
    category: "BizSync",
    title: "Spice Garden Restaurant",
    desc: "Full business website with online menu, delivery system and sales dashboard.",
    tags: ["Website", "Delivery", "Dashboard"],
    color: "#eff6ff",
    border: "#bfdbfe",
    accent: "#2563eb",
    icon: "🍽️",
    stat1: "3x more orders",
    stat2: "7 day delivery",
  },
  {
    id: 2,
    category: "BizSync",
    title: "StyleHub Clothing Store",
    desc: "Modern e-commerce style website with product showcase and WhatsApp ordering.",
    tags: ["Website", "E-Commerce", "WhatsApp"],
    color: "#eff6ff",
    border: "#bfdbfe",
    accent: "#2563eb",
    icon: "👗",
    stat1: "200% more reach",
    stat2: "5 day delivery",
  },
  {
    id: 3,
    category: "BizSync",
    title: "FixIt Pro Services",
    desc: "Service booking website for a home repair company with lead capture system.",
    tags: ["Website", "Booking", "Leads"],
    color: "#eff6ff",
    border: "#bfdbfe",
    accent: "#2563eb",
    icon: "🔧",
    stat1: "50+ leads/month",
    stat2: "6 day delivery",
  },

  // EduSync
  {
    id: 4,
    category: "EduSync",
    title: "Arjun Sharma — Developer",
    desc: "Professional portfolio for a CSE graduate showcasing projects, skills and resume.",
    tags: ["Portfolio", "Resume", "Projects"],
    color: "#f0fdf4",
    border: "#bbf7d0",
    accent: "#16a34a",
    icon: "💻",
    stat1: "Got placed in 2 weeks",
    stat2: "4 day delivery",
  },
  {
    id: 5,
    category: "EduSync",
    title: "Priya Reddy — Designer",
    desc: "Creative portfolio for a UI/UX design student with case studies and contact.",
    tags: ["Portfolio", "Design", "Case Studies"],
    color: "#f0fdf4",
    border: "#bbf7d0",
    accent: "#16a34a",
    icon: "🎨",
    stat1: "3 client inquiries",
    stat2: "5 day delivery",
  },
  {
    id: 6,
    category: "EduSync",
    title: "Rahul Singh — MBA Student",
    desc: "Clean professional portfolio for an MBA student targeting top corporates.",
    tags: ["Portfolio", "MBA", "Corporate"],
    color: "#f0fdf4",
    border: "#bbf7d0",
    accent: "#16a34a",
    icon: "📊",
    stat1: "Internship secured",
    stat2: "3 day delivery",
  },

  // WeddingSync
  {
    id: 7,
    category: "WeddingSync",
    title: "Aisha & Farhan Wedding",
    desc: "Private wedding page with photo gallery, RSVP and guest messaging system.",
    tags: ["Wedding", "Gallery", "RSVP"],
    color: "#fdf4ff",
    border: "#e9d5ff",
    accent: "#7c3aed",
    icon: "💍",
    stat1: "200+ guests",
    stat2: "3 day delivery",
  },
  {
    id: 8,
    category: "WeddingSync",
    title: "Sneha & Rohan Ceremony",
    desc: "Elegant digital wedding invitation with event schedule and location map.",
    tags: ["Invitation", "Schedule", "Map"],
    color: "#fdf4ff",
    border: "#e9d5ff",
    accent: "#7c3aed",
    icon: "💐",
    stat1: "150+ RSVPs",
    stat2: "2 day delivery",
  },
  {
    id: 9,
    category: "WeddingSync",
    title: "Meera & Karthik Celebrations",
    desc: "Full wedding platform with live photo sharing, wishes wall and countdown timer.",
    tags: ["Platform", "Photos", "Countdown"],
    color: "#fdf4ff",
    border: "#e9d5ff",
    accent: "#7c3aed",
    icon: "🎊",
    stat1: "500+ photo uploads",
    stat2: "4 day delivery",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Work = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="work-section" id="work">

      {/* Header */}
      <div className="work-header">
        <span className="work-badge">
          <span className="badge-dot" />
          Our Work
        </span>
        <h2 className="work-title">
          Projects that <span className="title-accent">speak for themselves</span>
        </h2>
        <p className="work-sub">
          Real digital systems built for real businesses. Every project delivered on time.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="work-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${active === cat ? "active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat === "BizSync" && "💼 "}
            {cat === "EduSync" && "🎓 "}
            {cat === "WeddingSync" && "💍 "}
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="work-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="work-card"
              style={{
                "--card-bg": project.color,
                "--card-border": project.border,
                "--card-accent": project.accent,
              }}
            >
              {/* Card top */}
              <div className="card-top-bar" />

              {/* Icon + Category */}
              <div className="work-card-meta">
                <span className="work-card-icon">{project.icon}</span>
                <span className="work-card-category">{project.category}</span>
              </div>

              {/* Title */}
              <h3 className="work-card-title">{project.title}</h3>
              <p className="work-card-desc">{project.desc}</p>

              {/* Tags */}
              <div className="work-card-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="work-tag">{tag}</span>
                ))}
              </div>

              {/* Divider */}
              <div className="work-card-divider" />

              {/* Stats */}
              <div className="work-card-stats">
                <div className="work-stat">
                  <span className="stat-icon">📈</span>
                  <span>{project.stat1}</span>
                </div>
                <div className="work-stat">
                  <span className="stat-icon">⚡</span>
                  <span>{project.stat2}</span>
                </div>
              </div>

              {/* Button */}
              <button
                className="work-card-btn"
                onClick={() => scrollTo("contact")}
              >
                Build similar project
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Bottom CTA */}
      <div className="work-cta">
        <p>Want a website like these?</p>
        <button className="work-cta-btn" onClick={() => scrollTo("contact")}>
          Get Free Mockup
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

    </section>
  );
};

export default Work;