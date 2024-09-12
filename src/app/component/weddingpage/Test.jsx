'use client'
import React, { useState } from "react";
import "./test.css"; // Import the CSS file for styling

const Test = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    "https://via.placeholder.com/400x200?text=Image+1",
    "https://via.placeholder.com/400x200?text=Image+2",
    "https://via.placeholder.com/400x200?text=Image+3",
    "https://via.placeholder.com/400x200?text=Image+4",
  ];

  const handleScroll = (event) => {
    if (!isTransitioning) {
      setIsTransitioning(true);

      if (event.deltaY > 0) {
        setImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      } else {
        setImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      }

      setTimeout(() => setIsTransitioning(false), 800); // Match this with the transition duration
    }
  };

  return (
    <div onWheel={handleScroll} className="image-container">
      <img
        key={imageIndex} // Change the key to trigger re-render
        src={images[imageIndex]}
        alt={`Image ${imageIndex + 1}`}
        className={`image ${isTransitioning ? "fade-in" : ""}`}
      />
    </div>
  );
};

export default Test;
