import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/pricing.css";

const plans = [
  {
    name: "Starter",
    tag: "For Individuals",
    price: "₹1,999",
    period: "one-time",
    desc: "Perfect for freelancers, students & small businesses.",
    features: [
      "Up to 3 Pages",
      "Clean Basic Design",
      "Mobile Responsive",
      "Contact Form",
      "1 Week Delivery",
      "1 Revision Round",
    ],
    accent: "#2563eb",
    accentBg: "#eff6ff",
    accentBorder: "#bfdbfe",
  },
  {
    name: "Pro",
    tag: "Most Popular",
    price: "₹4,999",
    period: "one-time",
    desc: "Best for growing businesses that need a strong presence.",
    features: [
      "Multiple Pages (up to 8)",
      "Premium UI Design",
      "Sales Dashboard",
      "Delivery System",
      "Priority Support",
      "3 Revision Rounds",
      "1 Month Free Maintenance",
    ],
    highlight: true,
    accent: "#2563eb",
    accentBg: "#eff6ff",
    accentBorder: "#bfdbfe",
  },
  {
    name: "Enterprise",
    tag: "Full Suite",
    price: "₹15,000+",
    period: "custom quote",
    desc: "Fully custom digital system built around your business.",
    features: [
      "Unlimited Pages",
      "Custom Features & Logic",
      "Advanced UI / Animations",
      "Full Backend Integration",
      "Admin Panel",
      "3 Months Support",
      "Dedicated Project Manager",
    ],
    accent: "#7c3aed",
    accentBg: "#f5f3ff",
    accentBorder: "#ddd6fe",
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

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">

      {/* Header */}
      <div className="pricing-header">
        <span className="pricing-badge">
          <span className="badge-dot" />
          Pricing Plans
        </span>
        <h2 className="pricing-title">
          Simple pricing, <span className="title-accent">no surprises</span>
        </h2>
        <p className="pricing-sub">
          One-time payment. No subscriptions. No hidden fees.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        className="pricing-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Popular badge */}
            {plan.highlight && (
              <div className="popular-badge">⚡ Most Popular</div>
            )}

            {/* Top */}
            <div className="card-top">
              <span className="plan-tag">{plan.tag}</span>
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-desc">{plan.desc}</p>
            </div>

            {/* Price */}
            <div className="plan-price-wrap">
              <span className="plan-price">{plan.price}</span>
              <span className="plan-period">{plan.period}</span>
            </div>

            {/* Divider */}
            <div className="plan-divider" />

            {/* Features */}
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <span className="check-icon">
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className={`pricing-btn ${plan.highlight ? "btn-highlight" : ""}`}>
              Get Started
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom note */}
      <p className="pricing-note">
        🔒 Secure payment &nbsp;·&nbsp; 📦 Delivery as promised &nbsp;·&nbsp; 💬 Free consultation included
      </p>

    </section>
  );
};

export default Pricing;