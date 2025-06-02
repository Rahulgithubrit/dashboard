import React from 'react';
import { FaCode, FaMobileAlt, FaChartLine, FaHandshake, FaServer, FaRobot } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaCode className="service-icon" />,
      title: "Web Development",
      description: "We build responsive, high-performance websites and web applications using modern technologies like React, Next.js, and Node.js. Our solutions are SEO-friendly and optimized for conversions.",
      highlights: [
        "Custom CMS Development",
        "E-commerce Solutions",
        "Progressive Web Apps",
        "API Integrations"
      ]
    },
    {
      icon: <FaMobileAlt className="service-icon" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences and drive engagement.",
      highlights: [
        "React Native Applications",
        "Flutter Development",
        "App Store Optimization",
        "Push Notification Systems"
      ]
    },
    {
      icon: <FaChartLine className="service-icon" />,
      title: "Data Visualization",
      description: "Transform your complex data into beautiful, interactive visualizations that tell compelling stories and drive data-informed decisions.",
      highlights: [
        "Dashboard Development",
        "Real-time Data Streams",
        "Custom Chart Libraries",
        "Business Intelligence Tools"
      ]
    },
    {
      icon: <FaHandshake className="service-icon" />,
      title: "Consulting Services",
      description: "Our expert consultants help you navigate technology challenges and develop strategies for digital transformation.",
      highlights: [
        "Technical Architecture Review",
        "Digital Strategy Development",
        "Process Optimization",
        "Technology Stack Selection"
      ]
    },
    {
      icon: <FaServer className="service-icon" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and serverless architectures to power your business growth.",
      highlights: [
        "AWS/Azure/GCP Migration",
        "Serverless Applications",
        "Container Orchestration",
        "DevOps Automation"
      ]
    },
    {
      icon: <FaRobot className="service-icon" />,
      title: "AI & Automation",
      description: "Leverage artificial intelligence and automation to streamline operations and gain competitive advantage.",
      highlights: [
        "Chatbot Development",
        "Process Automation",
        "Predictive Analytics",
        "Machine Learning Models"
      ]
    }
  ];

  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Our Comprehensive Services</h1>
        <p className="subtitle">
          We deliver cutting-edge solutions tailored to your business needs, helping you stay ahead in the digital landscape.
        </p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon-container">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="highlights">
              <h4>Key Features:</h4>
              <ul>
                {service.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
            <button className="learn-more-btn">
              Learn More →
            </button>
          </div>
        ))}
      </div>
      
      <div className="cta-section">
        <h2>Ready to Transform Your Business?</h2>
        <p>Contact us today to discuss how we can help you achieve your digital goals.</p>
        <button className="cta-button">Get in Touch</button>
      </div>
    </div>
  );
};

export default Services;