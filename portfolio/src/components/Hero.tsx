import React from 'react';
import './Hero.css';
import profileImage from '../assets/profile.jpg';
import { FaGithub, FaLinkedinIn, FaDownload } from 'react-icons/fa';
import { SiPhp, SiMysql, SiJavascript, SiReact, SiNodedotjs, SiDjango } from 'react-icons/si';

const Hero: React.FC = () => {
  const techStack = [
    { icon: SiJavascript, name: 'JavaScript' },
    { icon: SiReact, name: 'React' },
    { icon: SiNodedotjs, name: 'Node.js' },
    { icon: SiPhp, name: 'PHP' },
    { icon: SiMysql, name: 'MySQL' },
    { icon: SiDjango, name: 'Django' }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="name-container">
          <h1 className="name">
            <span className="highlight">Mohamud Mohamed Gurhan</span>
          </h1>
        </div>
        
        <div className="hero-main">
          <div className="hero-image">
            <div className="profile-image-container">
              <div className="profile-glow"></div>
              <img 
                src={profileImage}
                alt="Mohamud Mohamed Gurhan"
                className="profile-image"
              />
            </div>
            <div className="tech-stack">
              {techStack.map((tech, index) => (
                <div key={index} className="tech-item" title={tech.name}>
                  <tech.icon className="tech-icon" />
                </div>
              ))}
            </div>
          </div>

          <div className="hero-text">
            <span className="greeting">Full Stack Developer</span>
            <div className="hero-subtitle">Crafting Digital Experiences</div>
            <p className="hero-description">
              Hello! I'm a passionate Full Stack Developer with expertise in building modern web applications.
              Based in Mogadishu, Somalia, I specialize in creating responsive, user-friendly applications 
              using React, Node.js, PHP, and other modern technologies. With over 2 years of experience,
              I combine clean code practices with innovative solutions to deliver exceptional digital experiences.
            </p>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a 
                href="/resume.pdf" 
                className="btn btn-secondary" 
                download="Mohamud_Mohamed_Gurhan_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload /> Download CV
              </a>
            </div>
            
            <div className="hero-social">
              <a 
                href="https://github.com/Mogurhan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
              >
                <FaGithub className="social-icon" />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/mohamoud-gurhan-77809b224/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
              >
                <FaLinkedinIn className="social-icon" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 