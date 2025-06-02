import React from 'react';
import { FaRocket, FaUsers, FaChartLine, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './AboutUs.css';

const AboutUs = () => {
  const stats = [
    { icon: <FaRocket />, number: '150+', label: 'Projects Completed' },
    { icon: <FaUsers />, number: '50+', label: 'Satisfied Clients' },
    { icon: <FaChartLine />, number: '95%', label: 'Client Retention' },
    { icon: <FaAward />, number: '10+', label: 'Industry Awards' }
  ];

  const teamMembers = [
    { name: 'Alex Johnson', role: 'CEO & Founder', bio: 'Tech visionary with 15+ years in digital transformation', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Sarah Williams', role: 'CTO', bio: 'Software architect specializing in scalable solutions', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Michael Chen', role: 'Lead Developer', bio: 'Full-stack wizard with a passion for clean code', img: 'https://randomuser.me/api/portraits/men/22.jpg' },
    { name: 'Emily Rodriguez', role: 'UX Designer', bio: 'User experience expert focused on intuitive interfaces', img: 'https://randomuser.me/api/portraits/women/63.jpg' }
  ];

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Our Company
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pioneering digital solutions since 2012
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="section-container">
          <motion.div 
            className="story-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Our Story</h2>
            <p>
              Founded in a small co-working space with just three people, we've grown into a leading digital agency with over 50 professionals. 
              Our journey has been fueled by a passion for innovation and a commitment to delivering exceptional results for our clients.
            </p>
            <p>
              What started as a web development studio has evolved into a full-service digital transformation partner, helping businesses 
              of all sizes navigate the complexities of the digital landscape.
            </p>
          </motion.div>
          <motion.div 
            className="story-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-placeholder"></div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2>Our Mission & Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Innovation</h3>
                <p>We constantly push boundaries to deliver cutting-edge solutions that give our clients a competitive edge.</p>
              </div>
              <div className="value-card">
                <h3>Integrity</h3>
                <p>Honesty and transparency guide every decision we make and every relationship we build.</p>
              </div>
              <div className="value-card">
                <h3>Excellence</h3>
                <p>We settle for nothing less than exceptional quality in everything we do.</p>
              </div>
              <div className="value-card">
                <h3>Collaboration</h3>
                <p>We believe the best results come from working closely with our clients as partners.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-container">
          <h2>Meet Our Leadership</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="team-image">
                  <img src={member.img} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>Ready to Start Your Project?</h2>
          <p>Get in touch with our team to discuss how we can help bring your vision to life.</p>
          <button className="cta-button">Contact Us</button>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;