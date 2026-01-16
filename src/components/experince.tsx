import React from 'react';
import './experience.css';

interface ExperienceItem {
  icon: string;
  title: string;
  company: string;
  duration: string;
  description: string;
}

const experienceData: ExperienceItem[] = [
  {
    icon: '🌐',
    title: ' Fullstack Developer Intern',
    company: 'Samuel Gnanam IT Centre.',
    duration: '2025 - Present',
    description: 'Developed responsive web applications using React and TypeScript, improving performance and implementing interactive UI components.'
  }
];

const Experience: React.FC = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="experience-title">My Experience</h2>

        <div className="experience-grid">
          {experienceData.map((item, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-icon">{item.icon}</div>
              <div className="experience-content">
                <h3 className="experience-name">{item.title}</h3>
                <p className="experience-company">{item.company}</p>
                <p className="experience-duration">{item.duration}</p>
                <p className="experience-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
