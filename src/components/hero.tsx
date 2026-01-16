// src/components/Hero.tsx
import React from 'react';
import './hero.css';

import heroImg from '../assets/profile koban image.png';
import resume from '../assets/Kajagoban_fullstack developer.pdf';

const Hero: React.FC = () => {
  return (
    <section className="hero section" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="highlight">Tharmathurai Kajagoban</span>,
            <br />
            Full Stack Developer
          </h1>
          <p>
            I’m a Full Stack Developer with hands-on experience building scalable, secure, and user-focused web applications using Spring Boot, Reactand MySQL. I enjoy developing complete end-to-end solutions—from backend APIs to responsive frontend interfaces—while following clean code practices and modern development standards
          </p>
          <div className="hero-buttons">
            <button className="hero-btn">
              <a href={resume} download="Kajagoban_fullstack developer.pdf">
                Download Resume
              </a>
            </button>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn outline-btn"
            >
              Review Resume
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-card">
            <img
              src={heroImg}
              alt="3D Developer Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;