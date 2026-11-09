"use client";
import { useEffect, useState } from 'react';
import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  
  const colors = [
    'linear-gradient(45deg, #070a13, #0b1120)',
    'linear-gradient(45deg, #070a13, #0f172a)',
    'linear-gradient(45deg, #070a13, #111c35)',
    'linear-gradient(45deg, #070a13, #0d1e30)',
    'linear-gradient(to right, #070a13, #0b1120, #070a13)',
    'linear-gradient(to bottom right, #070a13, #111a2e, #070a13)',
    'radial-gradient(circle at center, #0b1120, #070a13)',
    'radial-gradient(circle at top left, #101c36, #070a13)',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [colors.length]);

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
