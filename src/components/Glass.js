import React from 'react';
import './Glass.css';

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
          images: ["IMG_5088.JPG", "IMG_5299.JPG", "IMG_6100.JPG", "IMG_6203.JPG"]
        }
      ]
    },
    commitmentToService: {
      title: "Commitment to Service",
      imagesDir: "/glass-images/service",
      cards: [
        {
          title: "Creating Data Structure and Algorithm Videos",
          description: "As a former DSA TA, I created videos covering DSA topics that I found to be particularly confusing to students. Creating DSA videos enhanced my presentation skills and my ability to simplify complex topics.",
          images: ["bigO.png"]
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
          images: ["IMG_7147.JPG", "IMG_7186.JPG", "IMG_9346.JPG"]
        }
      ]
    },
    academicExcellence: {
      title: "Academic Excellence",
      imagesDir: "/glass-images/academic",
      cards: [
        {
          title: "Research with Professor Hellerstein",
          description: "Working on advanced research projects in computer science and data analysis.",
          images: ["research-visual.jpg"]
        }
      ]
    },
    professionalDevelopment: {
      title: "Professional Development",
      imagesDir: "/glass-images/professional",
      cards: [
        {
          title: "Grace Hopper 2023",
          description: "Participated in the world's largest gathering of women in computing, networking with peers and securing an internship with Cisco.",
          images: ["IMG_4639.JPG", "IMG_4657.JPG"]
        },
        {
          title: "Cisco Internship 2023",
          description: "During my 12 weeks at Cisco, I built lasting friendships and found mentors who guided me. I worked on developing APIs and improving their performance, and streamlined data management for internal systems.",
          images: ["IMG_5469.JPG", "IMG_6490.JPG"]
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

        <div className="mission-statement">
          <h3>Mission Statement</h3>
          <div className="mission-content">
            <p>Advancing technology and research in computer science while addressing global challenges and sustainability goals.</p>
          </div>
        </div>

        <div className="areas-excellence">
          <h3>Areas of Excellence</h3>
          {glassProjectInfo.areasOfExcellence.map((area, index) => (
            <div key={index} className="area-card">
              <h4>{area.title}</h4>
              <p>{area.description}</p>
            </div>
          ))}
        </div>

        <div className="sustainability-goals">
          <h3>UN Sustainability Development Goals/NAE Grand Challenges</h3>
          {glassProjectInfo.sustainabilityGoals.map((goal, index) => (
            <div key={index} className="goal-card">
              <h4>{goal.title}</h4>
              <p>{goal.description}</p>
            </div>
          ))}
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
                        src={`${section.imagesDir}/${image}`} 
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