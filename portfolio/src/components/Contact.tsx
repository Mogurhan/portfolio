import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Create mailto link
    const mailtoLink = `mailto:mohamuud972@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always interested in hearing about new projects and opportunities. Feel free to reach out!</p>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div className="contact-item-content">
                  <span className="contact-label">Email</span>
                  <a href="mailto:mohamuud972@gmail.com">mohamuud972@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <FaGithub className="contact-icon" />
                <div className="contact-item-content">
                  <span className="contact-label">GitHub</span>
                  <a href="https://github.com/Mogurhan" target="_blank" rel="noopener noreferrer">
                    @Mogurhan
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <FaLinkedinIn className="contact-icon" />
                <div className="contact-item-content">
                  <span className="contact-label">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/mohamoud-gurhan-77809b224/" target="_blank" rel="noopener noreferrer">
                    Mohamoud Gurhan
                  </a>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-btn"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 