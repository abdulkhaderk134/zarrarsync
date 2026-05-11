import React from "react";
import { motion } from "framer-motion";
import "../styles/howitworks.css";

const steps = [
  {
    number: "01",
    icon: "💬",
    title: "Tell Us Your Idea",
    desc: "Contact us via WhatsApp or the form. Share your business type, what you need, and any ideas you have. No technical knowledge required.",
    color: "#eff6ff",
    border: "#bfdbfe",
    accent: "#2563eb",
    tag: "Free consultation",
  },
  {
    number: "02",
    icon: "🎨",
    title: "We Design a Mockup",
    desc: "Within 24-48 hours we send you a free design mockup of your website. You can see exactly what it will look like before paying anything.",
    color: "#f0fdf4",
    border: "#bbf7d0",
    accent: "#16a34a",
    tag: "Free mockup",
  },
  {
    number: "03",
    icon: "✅",
    title: "You Approve & We Build",
    desc: "Once you love the design, you pay 50% advance and we start building. We keep you updated at every step and take your feedback seriously.",
    color: "#fdf4ff",
    border: "#e9d5ff",
    accent: "#7c3aed",
    tag: "50% advance",
  },
  {
    number: "04",
    icon: "🚀",
    title: "We Deliver & Launch",
    desc: "Your website is delivered within 7 days, tested on all devices, and launched live. You pay the remaining 50% only when you are 100% happy.",
    color: "#fff7ed",
    border: "#fed7aa",
    accent: "#ea580c",
    tag: "Live in 7 days",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const HowItWorks = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hiw-section" id="how-it-works">

      {/* Header */}
      <div className="hiw-header">
        <span className="hiw-badge">
          <span className="badge-dot" />
          How It Works
        </span>
        <h2 className="hiw-title">
          From idea to live website <span className="title-accent">in 4 simple steps</span>
        </h2>
        <p className="hiw-sub">
          No confusing process. No technical jargon. Just tell us what you need
          and we handle everything from design to launch.
        </p>
      </div>

      {/* Steps */}
      <motion.div
        className="hiw-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="hiw-card"
            style={{
              "--step-bg": step.color,
              "--step-border": step.border,
              "--step-accent": step.accent,
            }}
          >
            {/* Number */}
            <div className="hiw-number">{step.number}</div>

            {/* Icon */}
            <div className="hiw-icon-wrap">
              <span className="hiw-icon">{step.icon}</span>
            </div>

            {/* Tag */}
            <span className="hiw-tag">{step.tag}</span>

            {/* Text */}
            <h3 className="hiw-card-title">{step.title}</h3>
            <p className="hiw-card-desc">{step.desc}</p>

            {/* Connector arrow — hidden on last */}
            {index < steps.length - 1 && (
              <div className="hiw-connector">→</div>
            )}

          </motion.div>
        ))}
      </motion.div>

      {/* Bottom guarantee strip */}
      <motion.div
        className="hiw-guarantee"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="guarantee-items">
          <div className="guarantee-item">
            <span className="guarantee-icon">🔒</span>
            <div>
              <p className="guarantee-title">Pay only when happy</p>
              <p className="guarantee-desc">50% after approval, 50% after delivery</p>
            </div>
          </div>
          <div className="guarantee-divider" />
          <div className="guarantee-item">
            <span className="guarantee-icon">⚡</span>
            <div>
              <p className="guarantee-title">7 day delivery</p>
              <p className="guarantee-desc">Fast turnaround, no delays</p>
            </div>
          </div>
          <div className="guarantee-divider" />
          <div className="guarantee-item">
            <span className="guarantee-icon">🎨</span>
            <div>
              <p className="guarantee-title">Free mockup first</p>
              <p className="guarantee-desc">See design before paying anything</p>
            </div>
          </div>
          <div className="guarantee-divider" />
          <div className="guarantee-item">
            <span className="guarantee-icon">📞</span>
            <div>
              <p className="guarantee-title">Direct founder contact</p>
              <p className="guarantee-desc">Talk to us anytime on WhatsApp</p>
            </div>
          </div>
        </div>

        <button className="hiw-cta-btn" onClick={() => scrollTo("contact")}>
          Start Your Project Today
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </motion.div>

    </section>
  );
};

export default HowItWorks;