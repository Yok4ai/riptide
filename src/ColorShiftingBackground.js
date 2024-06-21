import React, { useState, useEffect } from 'react';
import './ColorShiftingBackground.css';

const ColorShiftingBackground = () => {
  const [hue, setHue] = useState(250); // Starting hue value for purple
  const [direction, setDirection] = useState(1); // 1 for increasing hue, -1 for decreasing hue

  useEffect(() => {
    const interval = setInterval(() => {
      // Update hue value based on direction
      setHue((prevHue) => {
        let newHue = prevHue + direction * 0.3; // Adjust the increment to control the speed and smoothness
        // Ensure hue stays within 250 to 290 range
        if (newHue >= 290) {
          newHue = 290;
          setDirection(-1); // Change direction to start moving towards purple
        } else if (newHue <= 250) {
          newHue = 250;
          setDirection(1); // Change direction to start moving towards violet
        }
        return newHue;
      });
    }, 50); // Increase interval duration to slow down color shift (100 milliseconds)

    return () => clearInterval(interval);
  }, [direction]);

  // Calculate the colors based on hue
  const purple = `hsl(${hue}, 100%, 60%)`;
  const violet = `hsl(${hue + 60}, 100%, 55%)`; // Adjust the hue difference to maintain the violet color

  return (
    <div className="color-shifting-background">
      {/* You can add other content or components here */}
      <div className="gradient-overlay" style={{ 
        background: `linear-gradient(90deg, ${purple}, ${violet})`
      }} />
    </div>
  );
};

export default ColorShiftingBackground;
