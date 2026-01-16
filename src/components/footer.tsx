import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">About Me</h3>
            <p className="footer-text">
               I’m a Computer Science graduate and Junior Full Stack Developer with hands-on experience in designing and developing scalable web applications using Spring Boot, React, and RESTful APIs. I’m passionate about building clean, responsive, and efficient user interfaces while ensuring strong backend integration. Proficient in Git and GitHub, I enjoy collaborating in team environments, solving real-world problems, and continuously learning new technologies to create maintainable and high-quality software solutions. 
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
              {/* <li><a href="#contact">Contact</a></li> */}
            </ul>
          </div>
  
          <div className="footer-section">
            <h3 className="footer-title">Connect</h3>
            <div className="footer-socials">
              <a href="tkajagoban19@gmail.com" className="social-icon" title="Email">
                Email
              </a>
              <a href="https://www.linkedin.com/in/tharmathurai-kajagoban-18b39b312" className="social-icon" title="LinkedIn">
                LinkedIn
              </a>
              <a href="https://github.com/Tkajagoban" className="social-icon" title="GitHub">
                GitHub
              </a>
             
        
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} My Portfolio. All rights reserved.
          </p>
          <p className="footer-credit">
            Designed & Built by Me
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
