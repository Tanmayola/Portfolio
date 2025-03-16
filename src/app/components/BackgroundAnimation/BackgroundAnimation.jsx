"use client";
import { useEffect, useState } from 'react';
import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  
  const colors = [
    'linear-gradient(45deg, #111111, #1a1a1a)',
    'linear-gradient(45deg, #111111, #2d1a1a)',
    'linear-gradient(45deg, #111111, #1a2d1a)',
    'linear-gradient(45deg, #111111, #1a1a2d)',
    'linear-gradient(to right, #111111, #1a1a1a, #111111)',
    'linear-gradient(to bottom right, #111111, #2d1a1a, #111111)',
    'radial-gradient(circle at center, #111111, #1a1a1a)',
    'radial-gradient(circle at top left, #111111, #1a1a2d)',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 8000); // Change color every 8 seconds for a more subtle effect

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div 
        className="background-animation"
        style={{
          background: colors[currentColorIndex],
          transition: 'background 3s ease-in-out'
        }}
      />
      <div className="background-overlay" />
    </>
  );
};

export default BackgroundAnimation; 