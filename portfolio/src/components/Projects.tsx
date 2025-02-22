import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import benaadirZone from '../assets/benaadir_zone.png';
import travelImage from '../assets/travel.png';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Travel Agency Management',
      type: 'Full Stack Project',
      description: 'A comprehensive travel agency management system featuring user management, destination listings, flight bookings, and financial tracking. The dashboard provides real-time analytics for users, customers, destinations, and account management with an intuitive interface.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'jQuery', 'Chart.js'],
      image: travelImage,
      github: 'https://github.com/Mogurhan/travel-agency',
      liveDemo: 'https://gurhan-travel.herokuapp.com'
    },
    {
      title: 'School Management System',
      type: 'Full Stack Project',
      description: 'A comprehensive school management system built with modern technologies. Features include student registration, attendance tracking, grade management, financial reporting, and a responsive dashboard with real-time analytics. The system supports multiple user roles and provides detailed reporting capabilities.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'Bootstrap', 'Chart.js'],
      image: benaadirZone,
      github: 'https://github.com/Mogurhan/benaadir-zone',
      liveDemo: 'https://benaadir-zone.herokuapp.com'
    },
    {
      title: 'Modern Real Estate Platform',
      type: 'Full Stack Project',
      description: 'A full-stack real estate platform built with the MERN stack. Features include advanced property search with filters, user authentication, real-time updates, image upload with cloud storage, and responsive design. Implements RESTful API architecture and MongoDB for flexible data modeling.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Bootstrap', 'JWT'],
      image: '/real-estate.jpg',
      github: 'https://github.com/Mogurhan/Real-Estate',
      liveDemo: 'https://mern-real-estate.herokuapp.com'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-label">{project.type}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    <FaGithub className="link-icon" />
                    <span>Source Code</span>
                  </a>
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link project-link-demo"
                  >
                    <HiExternalLink className="link-icon" />
                    <span>Live Preview</span>
                  </a>
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