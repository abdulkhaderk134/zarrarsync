import React from "react";
import { motion } from "framer-motion";
import "../styles/about.css";

const skills = [
  { name: "React.js", icon: "⚛️" },
  { name: "Java", icon: "☕" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "MySQL", icon: "🗄️" },
  { name: "REST APIs", icon: "🔗" },
  { name: "UI/UX Design", icon: "🎨" },
];

const vision = [
  {
    icon: "🌐",
    title: "Web Agency",
    desc: "Building powerful websites and digital systems for businesses across India.",
    status: "Active Now",
    color: "#eff6ff",
    border: "#bfdbfe",
    accent: "#2563eb",
  },
  {
    icon: "🤖",
    title: "AI Agents",
    desc: "Developing intelligent automation agents to help businesses work smarter.",
    status: "Coming Soon",
    color: "#f0fdf4",
    border: "#bbf7d0",
    accent: "#16a34a",
  },
  {
    icon: "🏢",
    title: "Real Estate Tech",
    desc: "Bringing technology to real estate — smarter search, listings and management.",
    status: "Coming Soon",
    color: "#fdf4ff",
    border: "#e9d5ff",
    accent: "#7c3aed",
  },
];

const About = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const phone = "919538074648";
  const message = "Hi Abdul! I visited ZarrarSync and would like to discuss a project.";
  const waUrl = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

  return (
    <section className="about-section" id="about">

      <div className="about-header">
        <span className="about-badge">
          <span className="badge-dot" />
          About Us
        </span>
        <h2 className="about-title">
          The person behind <span className="title-accent">ZarrarSync</span>
        </h2>
      </div>

      <div className="about-content">

        <motion.div className="about-left" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>

          <div className="about-photo-wrap">
            <div className="about-photo">
              <span className="photo-initials">AK</span>
            </div>
            <div className="about-photo-badge">
              <span className="status-dot" />
              Available for projects
            </div>
          </div>

          <div className="about-info-card">
            <h3 className="about-name">Abdul Khader</h3>
            <p className="about-role">Founder & Developer — ZarrarSync</p>

            <div className="about-divider" />

            <div className="about-detail-row">
              <span className="detail-icon">🎓</span>
              <span>B.E. Computer Science Engineering</span>
            </div>
            <div className="about-detail-row">
              <span className="detail-icon">📍</span>
              <span>Hyderabad, India</span>
            </div>
            <div className="about-detail-row">
              <span className="detail-icon">💼</span>
              <span>Web Developer & Entrepreneur</span>
            </div>
            <div className="about-detail-row">
              <span className="detail-icon">🚀</span>
              <span>Building since 2024</span>
            </div>

            <div className="about-divider" />

            <div className="about-actions">
              <a href={waUrl} target="_blank" rel="noreferrer" className="about-wa-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
              <button className="about-contact-btn" onClick={() => scrollTo("contact")}>
                Send Message
              </button>
            </div>
          </div>

        </motion.div>

        <motion.div className="about-right" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>

          <div className="about-story">
            <h3 className="story-title">My Story</h3>
            <p>
              Hi, I am <strong>Abdul Khader</strong> — founder of ZarrarSync and
              a Computer Science graduate with a passion for building things that matter.
            </p>
            <p>
              I always knew I wanted to be an entrepreneur — not just work for someone
              else but build something of my own. ZarrarSync is my first step toward that.
              I started it to help small businesses, students, and individuals get a
              powerful digital presence without spending a fortune.
            </p>
            <p>
              Every website I build is more than just a design — it is a system built
              to help your business grow. I handle everything personally so you always
              get quality, speed, and direct communication.
            </p>
            <p className="story-vision-text">
              ZarrarSync is just the beginning. My vision is to build a tech company
              that expands into <strong>AI agents</strong> and <strong>real estate technology</strong> —
              using my skills to solve real problems across industries.
            </p>
          </div>

          {/* <div className="about-skills-wrap">
            <h4 className="skills-label">Technical Skills</h4>
            <div className="about-skills">
              {skills.map((skill, i) => (
                <div key={i} className="skill-pill">
                  <span>{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div> */}

          <div className="about-vision">
            <h4 className="vision-label">Future Vision</h4>
            <div className="vision-cards">
              {vision.map((item, i) => (
                <motion.div key={i} className="vision-card" style={{ "--v-bg": item.color, "--v-border": item.border, "--v-accent": item.accent }} whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                  <div className="vision-card-top">
                    <span className="vision-icon">{item.icon}</span>
                    <span className="vision-status">{item.status}</span>
                  </div>
                  <h5 className="vision-title">{item.title}</h5>
                  <p className="vision-desc">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default About;