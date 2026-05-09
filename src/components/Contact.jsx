import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">

        {/* Left */}
        <div className="contact-left">
          <span className="contact-badge">
            <span className="badge-dot" />
            Get In Touch
          </span>

          <h2 className="contact-title">
            Let's build something <span className="title-accent">great together</span>
          </h2>

          <p className="contact-desc">
            Have an idea? Want to grow your business or build your digital presence?
            Let's talk — free consultation included.
          </p>

          {/* Info items */}
          <div className="contact-info">
            <a className="info-item" href="mailto:zarrarsync@gmail.com">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
              </div>
              <div>
                <p className="info-label">Email us</p>
                <p className="info-value">zarrarsync@gmail.com</p>
              </div>
            </a>

            <a className="info-item" href="tel:+919538074648">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <p className="info-label">Call us</p>
                <p className="info-value">+91 95380 74648</p>
              </div>
            </a>

            <div className="info-item">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div>
                <p className="info-label">Response time</p>
                <p className="info-value">Within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Trust row */}
          <div className="contact-trust">
            <span>✅ Free consultation</span>
            <span>🔒 100% confidential</span>
            <span>🚀 Quick turnaround</span>
          </div>
        </div>

        {/* Right — Form */}
        <div className="contact-right">
          {submitted ? (
            <div className="success-card">
              <div className="success-icon">✓</div>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
              <button className="reset-btn" onClick={() => setSubmitted(false)}>
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Send us a message</h3>
                <p>We'll respond within 24 hours</p>
              </div>

              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Abdul Zarrar" required />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="you@example.com" required />
              </div>

              <div className="form-group">
                <label>What are you looking for?</label>
                <select>
                  <option value="">Select a service...</option>
                  <option>Business Website</option>
                  <option>Sales Management System</option>
                  <option>Online Delivery System</option>
                  <option>Student Portfolio</option>
                  <option>Wedding Digital Page</option>
                  <option>Custom Project</option>
                </select>
              </div>

              <div className="form-group">
                <label>Your Message</label>
                <textarea placeholder="Tell us about your project or idea..." rows="4" required></textarea>
              </div>

              <button type="submit" className={`submit-btn ${loading ? "loading" : ""}`} disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;