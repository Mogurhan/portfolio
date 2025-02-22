import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'projects', 'skills', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, 'home')}>
          <span className="logo-text">MG</span>
          <span className="logo-dot"></span>
        </a>
        
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {[
            { id: 'home', label: 'Home' },
            { id: 'projects', label: 'Projects' },
            { id: 'skills', label: 'Skills' },
            { id: 'about', label: 'About' },
            { id: 'contact', label: 'Contact' }
          ].map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, id)}
            >
              {label}
              <span className="nav-link-highlight"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 