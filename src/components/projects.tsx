
import React from 'react';
import './projects.css';
import projectImg1 from '../assets/Restarent.png';


interface Project {
    image: string;
    title: string;
    description: string;
    tags: string[];
}

const projectsData: Project[] = [
    {
        image: projectImg1,
        title: 'Restaurant Management System',
        description:  'A full-stack Restaurant Management System built using React (TypeScript), Spring Boot, and MySQL. Includes restaurant CRUD operations, food ordering, customer and user management, JWT authentication, role-based access control, and email configuration.',
           tags: ['React', 'TypeScript', 'Spring Boot', 'MySQL', 'JWT', 'Tailwind CSS']
    }
    //  {
    //     image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
    //     title: 'Leave Management System',
    //     description:
    //         'A full-stack Leave Management System developed using Laravel REST APIs, Vue 3, and MySQL. Includes role-based authentication, leave request and approval workflows, dashboards, pagination, and filtering.',
    //     tags: ['Laravel', 'Vue 3', 'MySQL', 'REST API', 'Tailwind CSS']
    // }
   
];

const Projects: React.FC = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <h2 className="projects-title">Featured Projects</h2>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                            </div>
                            <div className="project-content">
                                <h3 className="project-name">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span className="project-tag" key={tagIndex}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
