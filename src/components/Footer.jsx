import React from "react";
import "../styles/footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">

      {/* Top CTA Banner */}
      <div className="footer-cta-banner">
        <div className="footer-cta-content">
          <h3>Ready to build your digital system?</h3>
          <p>Free consultation. No commitment. Let's talk about your idea.</p>
        </div>
        <button className="footer-cta-btn" onClick={() => scrollTo("contact")}>
          Get Started Free
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Main Footer */}
      <div className="footer-main">

        {/* Brand col */}
        <div className="footer-brand">
          <div className="footer-logo" onClick={() => scrollTo("home")}>
            <img src={logo} alt="ZarrarSync" className="footer-logo-img" />
            <div className="footer-brand-text">
              <span className="footer-brand-name">ZarrarSync</span>
              <span className="footer-brand-tag">Think. Build. Grow.</span>
            </div>
          </div>
          <p className="footer-brand-desc">
            Building powerful digital systems for businesses, students, and personal events.
          </p>
          <div className="footer-status">
            <span className="status-dot" />
            All systems operational
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Product</h4>
          <ul>
            {["services", "solutions", "pricing", "contact"].map((item) => (
              <li key={item} onClick={() => scrollTo(item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div className="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li>BizSync</li>
            <li>EduSync</li>
            <li>WeddingSync</li>
            <li>Custom Project</li>
          </ul>
        </div>

        {/* Connect */}
        <div className="footer-col">
          <h4>Connect</h4>
          <ul>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
                Instagram
              </a>
            </li>
            <li>
              <a href="mailto:zarrarsync@gmail.com">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
                Email Us
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© 2026 ZarrarSync. All rights reserved.</p>
        <div className="footer-bottom-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Made in 🇮🇳 India</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;