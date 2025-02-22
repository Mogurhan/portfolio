import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Hello, I'm Mohamud Mohamed Gurhan</h3>
            <p>
              I am a passionate Full Stack Developer with expertise in building modern web applications.
              My journey in software development has equipped me with a strong foundation in both
              frontend and backend technologies.
            </p>
            <p>
              I specialize in creating responsive, user-friendly applications using modern technologies
              like React, Node.js, and PHP. My approach combines clean code practices with innovative
              solutions to deliver exceptional digital experiences.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">2+</span>
                <span className="highlight-label">Years Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">10+</span>
                <span className="highlight-label">Projects Completed</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">5+</span>
                <span className="highlight-label">Technologies Mastered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 