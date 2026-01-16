// src/components/Skills.tsx
import React from 'react';
import './skills.css';

interface Skill {
    icon: string;
    title: string;
    description: string;
}

const skillsData: Skill[] = [
     {
        icon: '💻',
        title: 'Frontend Development',
        description: 'Building responsive and modern UIs using React (TypeScript), Vue 3, Tailwind CSS, HTML, and JavaScript with strong form handling and validation.'
    },
     {
        icon: '⚙️',
        title: 'Backend Development',
        description: 'Developing scalable backend applications using Spring Boot, Laravel (REST APIs), and Python with secure authentication and role-based access control.'
    },
    
    {
        icon: '🛠️',
        title: 'Tools & Version Control',
        description: 'Proficient in Git and GitHub for version control, pull requests, and collaborative development workflows.'
    },{
        icon: '🗄️',
        title: 'Database Management',
        description: 'Hands-on experience with MySQL and MongoDB, including schema design, CRUD operations, pagination, and filtering.'
    } 
    
];

const Skills: React.FC = () => {
    return (
        <section className="skills" id="skills">
            <div className="skills-container">
                <h2 className="skills-title">My Skills</h2>

                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-icon">{skill.icon}</div>
                            <h3 className="skill-name">{skill.title}</h3>
                            <p className="skill-description">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
