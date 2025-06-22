import React from 'react';
import './Glass.css';

function Glass() {
  // Sample components data - replace with your actual components
  const components = [
    {
      name: "Component 1",
      description: "Description of the first component you worked on for GLASS project."
    },
    {
      name: "Component 2", 
      description: "Description of the second component you worked on for GLASS project."
    },
    {
      name: "Component 3",
      description: "Description of the third component you worked on for GLASS project."
    }
  ];

  // Sample travel photos - replace with your actual photos
  const travelPhotos = [
    {
      id: 1,
      src: "https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=Travel+Photo+1",
      alt: "Travel Photo 1",
      caption: "Beautiful location 1"
    },
    {
      id: 2,
      src: "https://via.placeholder.com/300x200/50C878/FFFFFF?text=Travel+Photo+2", 
      alt: "Travel Photo 2",
      caption: "Amazing place 2"
    },
    {
      id: 3,
      src: "https://via.placeholder.com/300x200/F39C12/FFFFFF?text=Travel+Photo+3",
      alt: "Travel Photo 3", 
      caption: "Incredible destination 3"
    }
  ];

  return (
    <div className="glass">
      <div className="glass-content">
        <h2>GLASS Project</h2>
        
        {/* Travel Photos Section */}
        <section className="travel-section">
          <h3>Travel Photos</h3>
          <div className="photo-gallery">
            {travelPhotos.map(photo => (
              <div key={photo.id} className="photo-item">
                <img src={photo.src} alt={photo.alt} />
                <p className="photo-caption">{photo.caption}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Components Section */}
        <section className="components-section">
          <h3>Project Components</h3>
          <div className="components-list">
            {components.map((component, index) => (
              <div key={index} className="component-item">
                <h4>{component.name}</h4>
                <p>{component.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Thesis Link Section */}
        <section className="thesis-section">
          <h3>Final Thesis</h3>
          <div className="thesis-link">
            <a 
              href="/thesis.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="thesis-button"
            >
              <i className="fas fa-file-pdf"></i>
              View Final Thesis
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Glass; 