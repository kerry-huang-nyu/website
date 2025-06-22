import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-text">
          <p>
            "Foolish consistency is the hobgoblin of little minds."
          </p>
          <p>
            Welcome to my personal website! I'm Kerry Huang, and this is where I showcase my work, 
            interests, and experiences.
          </p>
        </div>
        
        <div className="social-links">
          <h3>Connect With Me</h3>
          <div className="links-grid">
            <a 
              href="https://github.com/kerry-huang-nyu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link github"
            >
              <i className="fab fa-github"></i>
              GitHub
            </a>
            
            <a 
              href="https://www.linkedin.com/in/yue-kerry-huang/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
            
            <a 
              href="mailto:yue.huang@nyu.edu" 
              className="social-link email"
            >
              <i className="fas fa-envelope"></i>
              Email
            </a>
            
            <a 
              href="https://www.goodreads.com/kerryhuang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link goodreads"
            >
              <i className="fab fa-goodreads-g"></i>
              Goodreads
            </a>
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link resume"
            >
              <i className="fas fa-file-alt"></i>
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe; 