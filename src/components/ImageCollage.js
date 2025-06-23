import React, { useState, useEffect } from 'react';
import './ImageCollage.css';

const ImageCollage = ({ images }) => {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    // Preload images and filter out any that fail to load
    const loadImages = async () => {
      const validImages = [];
      for (const image of images) {
        try {
          await new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = image;
          });
          validImages.push(image);
        } catch (error) {
          console.warn(`Failed to load image: ${image}`);
        }
      }
      setLoadedImages(validImages);
    };

    loadImages();
  }, [images]);

  return (
    <div className="image-collage">
      {loadedImages.map((image, index) => {
        // Generate random positions and rotations
        const rotation = Math.random() * 30 - 15; // Random rotation between -15 and 15 degrees
        const translateX = Math.random() * 20 - 10; // Random X offset between -10% and 10%
        const translateY = Math.random() * 20 - 10; // Random Y offset between -10% and 10%
        const zIndex = index; // Layer images based on their order

        const style = {
          transform: `rotate(${rotation}deg) translate(${translateX}%, ${translateY}%)`,
          zIndex,
        };

        return (
          <div 
            key={image} 
            className="collage-image-container"
            style={style}
          >
            <img 
              src={image} 
              alt={`Collage item ${index + 1}`} 
              className="collage-image"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageCollage; 