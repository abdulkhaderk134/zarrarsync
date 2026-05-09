import React from "react";
import { motion } from "framer-motion";
import "../styles/services.css";

const services = [
  {
    title: "Business Website",
    desc: "Modern, conversion-focused websites that attract visitors and turn them into loyal customers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="svc-icon">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Sales Management",
    desc: "Track leads, monitor pipelines, and manage your entire sales cycle from a single dashboard.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="svc-icon">
        <path d="M3 3h18v4H3zM3 10h18v4H3zM3 17h18v4H3z" />
      </svg>
    ),
  },
  {
    title: "Online Delivery System",
    desc: "End-to-end delivery management that keeps your customers informed and orders on time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="svc-icon">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="17" />
        <line x1="9" y1="14.5" x2="15" y2="14.5" />
      </svg>
    ),
  },
  {
    title: "Student Portfolio",
    desc: "Professionally crafted portfolio pages that help students showcase projects and land opportunities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="svc-icon">
        <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2z" />
        <path d="M2 20c0-4 4-7 10-7s10 3 10 7" />
      </svg>
    ),
  },
  {
    title: "Wedding Digital Page",
    desc: "A private, beautifully designed web page to celebrate and share your special moments with loved ones.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="svc-icon">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Services = () => {
  return (
    <section className="services-section" id="services">
      {/* Header */}
      <div className="services-header">
        <span className="services-badge">
          <span className="badge-dot" />
          What We Build
        </span>
        <h2 className="services-title">
          Digital solutions that <span className="title-accent">grow your business</span>
        </h2>
        <p className="services-sub">
          Powerful, tailored products designed to simplify operations and expand your reach.
        </p>
      </div>

      {/* Grid */}
      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={cardVariants} className="service-card">
            <div className="card-accent-line" />
            <div className="icon-wrap">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <span className="learn-more">
              Learn more
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </motion.div>
        ))}

        {/* Custom CTA card */}
        <motion.div variants={cardVariants} className="service-card card-cta">
          <span className="cta-plus">+</span>
          <h3>Need something custom?</h3>
          <p>Tell us your idea and we'll build a solution around it.</p>
          <span className="learn-more">
            Get in touch
            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path  d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;