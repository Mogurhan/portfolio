import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      skills: [
        { name: 'PHP', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Django', level: 75 },
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Bootstrap', level: 85 },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'RESTful APIs', level: 80 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Database Design', level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 