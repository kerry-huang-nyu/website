import React from 'react';
import './AboutMe.css';
import ImageCollage from './ImageCollage';
import { getPublicPath } from '../utils/pathUtils';

function AboutMe() {
  const images = [
    getPublicPath('/aboutme-images/IMG_0262.jpg'),
    getPublicPath('/aboutme-images/IMG_4408.jpg'),
    getPublicPath('/aboutme-images/IMG_6766.jpg'),
    getPublicPath('/aboutme-images/IMG_8512.jpg'),
    getPublicPath('/aboutme-images/IMG_7680.jpg'),
    getPublicPath('/aboutme-images/IMG_8352.jpg'),
    getPublicPath('/aboutme-images/IMG_5469.jpg'),
    getPublicPath('/aboutme-images/罗兰271.jpg'),
    // Add more image paths as needed
  ];

  return (
    <div className="about-me">
      <div className="about-content">
        {/*
        <div className="quote-section">
          <blockquote>
            Foolish consistency is the hobgoblin of little minds.
          </blockquote>
        </div>
        */}

       {/*
        <div className="about-section">
          
          <p className="about-text">
            Welcome to my personal website! I'm Kerry Huang, a student at NYU, and this is where I showcase my work, 
            hobbies, and experiences. I'm interested in computer science, algorithms, economics, rock climbing, much more. 
          </p> 
        </div> */}
        <h2>About Me</h2>

        <p>
        Hi everyone! I’m Kerry Huang, a student at NYU. I was born in Chengdu, China and moved to the U.S. When I was eight.
        I was introduced to chess early on as a way to help curb my impulsiveness. 
        There’s a rule in chess called “touch move”-— if you touch a piece, you have to move it. 
        Whether it was that rule or just growing up, I learned to slow down and think before I act. 
        Along the way, I fell in love with the game. 
        In high school, I started by competing in my state but pivoted to teaching  
        once I realized how much of higher level games boiled down to pattern recognition. 
        In college, I've picked up new hobbies like climbing, historical garment reconstruction, and reading. 
        Lately, I've been drawn to nonfiction-- books like 
        Poor Economics, The Dictator's Handbook, and The Glass Castle that change how I think about the world.
        I'm pursuing a bachelors incomputer science with an interest in computer science theory and machine learning. 
        I enjoy puzzles, brain teasers, and anything that challenges me to see problems differently. 
        At the core of everything I do is a desire to grow: to ask better questions and to keep learning.
        </p>

        <div className="image-section">
          <h2>My Journey in Pictures</h2>
          <ImageCollage images={images} />
        </div>

        <div className="social-links-section" id="connect">
          <h2>Connect With Me</h2>
          <div className="links-grid">
            <a 
              href="https://github.com/kerry-huang-nyu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link github"
            >
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/yue-kerry-huang/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="mailto:yue.huang@nyu.edu" 
              className="social-link email"
            >
              <i className="fas fa-envelope"></i>
              <span>Email</span>
            </a>
            
            <a 
              href="https://www.goodreads.com/kerryhuang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link goodreads"
            >
              <i className="fab fa-goodreads-g"></i>
              <span>Goodreads</span>
            </a>
            
            <a 
              href="https://drive.google.com/file/d/1BssyOc6_x6BUTSyPEP9iV-DCu5EO-WaE/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link resume"
            >
              <i className="fas fa-file-alt"></i>
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe; 