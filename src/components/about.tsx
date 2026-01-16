// src/components/About.tsx
import React from 'react';
import './about.css';

import profileImg from '../assets/about.jpeg';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <div className="about-image-wrapper">
          <img
            src={profileImg}
            alt="Profile"
            className="about-profile-img"
          />
        </div>

        <div className="about-text">
          <p>
           Hello! I’m Tharmathurai Kajagoban, a Full Stack Developer and Computer Science graduate with practical experience in designing and developing modern web applications. I have worked on multiple full-stack projects using technologies such as Spring Boot, React, TypeScript, Laravel, Vue 3, and RESTful APIs.

I enjoy building efficient backend systems, secure authentication flows, and responsive frontend interfaces that work seamlessly together. My development approach focuses on scalability, maintainability, and performance, while ensuring a smooth user experience.

Currently, I’m gaining industry experience as a Full Stack Developer Intern, where I collaborate with teams, manage source code using Git/GitHub, and continuously improve application architecture and UI functionality. I’m passionate about learning new technologies, solving real-world problems, and growing as a software engineer.

When I’m not coding, I explore new development tools, improve my problem-solving skills, and refine my projects to deliver better digital solutions
          </p>
          <p>
           <br />          Thank you for visiting my portfolio! I’m excited to connect with like-minded professionals and explore opportunities to contribute to impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;