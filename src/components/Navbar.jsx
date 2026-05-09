import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const sections = ["home", "services", "solutions", "pricing", "contact"];

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) current = id;
        }
      });
      setActive(current);
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <span className="ann-badge">Free</span>
        Get a free website mockup before you pay anything.
        <span className="ann-link" onClick={() => scrollTo("contact")}>
          Claim yours →
        </span>
      </div>

      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

        {/* Logo */}
        <div className="logo" onClick={() => scrollTo("home")}>
          <img src={logo} alt="ZarrarSync Logo" className="logo-img" />
          <div className="brand-text">
            <span className="brand-name">ZarrarSync</span>
            <span className="brand-tagline">Think. Build. Grow.</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          {sections.map((item) => (
            <li
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => scrollTo(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {item === "pricing" && <span className="new-badge">New</span>}
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="nav-right">
          <div className="status-pill">
            <span className="status-dot" />
            Available for projects
          </div>
          <div className="nav-divider" />
          <button className="btn-ghost" onClick={() => scrollTo("contact")}>
            Free Mockup
          </button>
          <button className="btn-cta" onClick={() => scrollTo("contact")}>
            Get Started
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {sections.map((item) => (
                <p
                  key={item}
                  className={active === item ? "active" : ""}
                  onClick={() => scrollTo(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  {item === "pricing" && <span className="new-badge">New</span>}
                </p>
              ))}
              <div className="mobile-menu-divider" />
              <p className="mobile-cta" onClick={() => scrollTo("contact")}>
                Get Free Mockup →
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </>
  );
};

export default Navbar;