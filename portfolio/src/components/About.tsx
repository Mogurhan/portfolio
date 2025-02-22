import React from 'react';
import './About.css';
import { FaGraduationCap, FaBriefcase, FaCertificate, FaCode } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Hello, I'm Mohamud Mohamed Gurhan</h3>
            <p className="about-intro">
              A passionate Full Stack Developer based in Mogadishu, Somalia. With over 2 years of experience,
              I specialize in building responsive, user-centric web applications using modern technologies.
            </p>

            <div className="about-section">
              <h4><FaBriefcase className="section-icon" /> Work Experience</h4>
              <div className="experience-item">
                <h5>Full Stack Developer</h5>
                <p className="company">Kaafiye Technology, Bakaaro, Somalia</p>
                <p className="duration">May 2023 – October 2023</p>
              </div>
            </div>

            <div className="about-section">
              <h4><FaGraduationCap className="section-icon" /> Education</h4>
              <div className="education-item">
                <h5>Bachelor of Science in Computer Science</h5>
                <p className="institution">Jamhuriya University, Benadir, Mogadishu, Somalia</p>
                <p className="duration">Expected 2025</p>
                <p className="details">Relevant Coursework: Web Development, Database Systems, Software Engineering</p>
              </div>
              <div className="education-item">
                <h5>Vocational Diploma in Software Engineering</h5>
                <p className="institution">Kaafiye Technology, Mogadishu, Somalia</p>
                <p className="duration">2023</p>
              </div>
            </div>

            <div className="about-section">
              <h4><FaCertificate className="section-icon" /> Certifications</h4>
              <div className="certification-item">
                <h5>Full Stack Developer Certification</h5>
                <p className="institution">Kaafiye Technology Center, Somalia</p>
              </div>
            </div>

            <div className="about-section">
              <h4><FaCode className="section-icon" /> Technical Expertise</h4>
              <div className="expertise-grid">
                <div className="expertise-category">
                  <h5>Frontend</h5>
                  <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>HTML/CSS</li>
                    <li>Bootstrap</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
                <div className="expertise-category">
                  <h5>Backend</h5>
                  <ul>
                    <li>PHP</li>
                    <li>Node.js</li>
                    <li>Django</li>
                  </ul>
                </div>
                <div className="expertise-category">
                  <h5>Databases & Tools</h5>
                  <ul>
                    <li>MySQL</li>
                    <li>Database Design</li>
                    <li>Git</li>
                    <li>RESTful APIs</li>
                  </ul>
                </div>
              </div>
            </div>

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