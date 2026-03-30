import React from 'react';
import './Glass.css';
import { getPublicPath } from '../utils/pathUtils';

function Glass() {
  const glassProjectInfo = {
    about: "The projects for Tandon Honors students in the Global Leaders & Scholars in STEM program consists of a culmination of various experiences, research, and interests related to the Tandon Areas of Research Excellence. Scholars are also required to address the NAE Grand Challenges and think about the United Nations Sustainability Development Goals when doing so. At the end of the 3 years in the GLASS Program, students have a better understanding of the impact they can have on changing the world for the better. GLASS students enter the world as globally competent and socially responsible innovators and engineers!",
    areasOfExcellence: [
      {
        title: "Research Excellence",
        description: "Connecting research areas to the mission of improving global technology and sustainability."
      }
    ],
    sustainabilityGoals: [
      {
        title: "UN Sustainability Goals",
        description: "Working towards sustainable development through technology and innovation."
      }
    ]
  };

  const experienceComponents = {
    globalCompetency: {
      title: "Global Competency",
      imagesDir: "/glass-images/global",
      cards: [
        {
          title: "Study Abroad NYU Abu Dhabi",
          description: "Studying at NYU Abu Dhabi was a significant personal growth experience for me. I was immersed in a new culture and was surprised by the diversity in the UAE. Experiencing Ramadan was especially eye-opening, as I saw how different cultures and religions can peacefully coexist.",
          images: ["IMG_5088.JPG", "IMG_5299.JPG", "IMG_6100.jpg", "IMG_6203.JPG"]
        }, 
        {
          title: "AI Dev Open Source Summit",
          description: "A convention where tech enthusiasts and industry leaders alike share tools and resources in the advancement of AI. I was able to have conversations with leaders and hear how they incorporate AI into their businesses. ",
          images: ["IMG_9649.JPG", "IMG_9620.JPG", "IMG_9621.JPG", "IMG_9685.JPG"]
        },
        {
          title: "Study Abroad Vin University",
          description: "Study abroad at VinUniversity for 2 weeks. Investigated solutions for improving air quality within Hanoi through digital twin technologies. Immersed in Vietnamese culure and visited Ha Long Bay and Hanoi Old Quarter. ",
          images: ["vietnam_church.jpg", "vietnam_lanterns.jpeg", "vietnam_temple.jpg", "vietnam_vinuni.jpg"]
        }
      ]
    },
    commitmentToService: {
      title: "Commitment to Service",
      imagesDir: "/glass-images/service",
      cards: [
        {
          title: "Creating Data Structure and Algorithm Videos",
          description: "Created videos covering DSA topics that I found to be particularly confusing to students. Creating DSA videos enhanced my presentation skills and my ability to simplify complex topics.",
          images: ["bigO.png", "dll.png"]
        }
      ]
    },
    leadership: {
      title: "Leadership",
      imagesDir: "/glass-images/leadership",
      cards: [
        {
          title: "Poly Programming Club",
          description: "I founded the Intro Team at PPC, focusing on teaching competitive programming concepts to beginners. Additionally, I played a key role in organizing ICPC and advocating for the club to gain official recognition as a Tandon Student Organization.",
          images: ["IMG_7147.JPG", "IMG_7186.JPG", "IMG_0087.JPG", "IMG_9346.jpg"]
        }
      ]
    },
    academicExcellence: {
      title: "Academic Excellence",
      imagesDir: "/glass-images/academics",
      cards: [
        {
          title: "Research with Professor Hellerstein",
          description: "Worked on Stochastic Boolean Function Evaluation in computer science theory. We were able to prove a linear approximation algorithm for the representation problem.",
          images: ["Strategy_visualization.jpg", "graph.jpg"]
        },
        {
          title: "ChessBot SLDP Project",
          description: "Built a chess playing robot suitable for mobility impaired users. My focus is on the daemon, the board reset algorithm, and the robot software. This SLDP project won Tandon's Gunter Georgi award.",
          images: ["bot.JPG", "chess.jpg"]
        }
      ]
    },
    professionalDevelopment: {
      title: "Professional Development",
      imagesDir: "/glass-images/professional",
      cards: [
        {
          title: "Grace Hopper 2023-2025",
          description: "Participated in the world's largest gathering of women in computing, networking with peers and securing an internship with Cisco.",
          images: ["IMG_4657.JPG", "IMG_3497.jpeg"]
        },
        {
          title: "Cisco Internship 2024",
          description: "During my 12 weeks at Cisco, I built lasting friendships and found mentors who guided me. I worked on developing APIs and improving their performance, and streamlined data management for internal systems.",
          images: ["IMG_5469.jpg", "IMG_6490.JPG"]
        },
        {
          title: "Qualcomm Internship 2025",
          description: "During my 14 weeks at Qualcomm, I worked on multithreaded C++ server to test subsystem restarts. My team was PDT and we conducted stability testing and automated test cases for a variety of chipsets at Qualcomm.", 
          images: ["IMG_9389.JPG", "IMG_9471.JPG"]
        }
      ]
    }
  };

  return (
    <div className="glass">
      {/* GLASS Project Section */}
      <section className="glass-project">
        <h2>GLASS Project</h2>
        
        <div className="about-glass">
          <h3>About GLASS Projects</h3>
          <p>{glassProjectInfo.about}</p>
        </div>

        <div className="glass-external-links">
          <div className="glass-external-section">
            <h3>Glass Abstract</h3>
            <p>View the GLASS abstract.</p>
            <a
              className="glass-link-button"
              href="https://abstract.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Abstract
            </a>
          </div>

          <div className="glass-external-section">
            <h3>Glass Final Paper</h3>
            <p>View the GLASS final paper.</p>
            <a
              className="glass-link-button"
              href="https://paper.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Final Paper
            </a>
          </div>
        </div>

        
      </section>

      {/* Experience Components Section */}
      <section className="experience-components">
        <h2>Experience Components</h2>
        
        {Object.entries(experienceComponents).map(([key, section]) => (
          <div key={key} className="experience-section">
            <h3>{section.title}</h3>
            <div className="card-grid">
              {section.cards.map((card, index) => (
                <div key={index} className="experience-card">
                  <div className="card-images">
                    {card.images.map((image, imgIndex) => (
                      <img 
                        key={imgIndex} 
                        src={`${getPublicPath(section.imagesDir)}/${image}`} 
                        alt={`${card.title} illustration ${imgIndex + 1}`} 
                      />
                    ))}
                  </div>
                  <div className="card-content">
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Glass; 