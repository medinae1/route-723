import React, { useEffect, useRef } from 'react';
import walkGif from './walk.gif'; // Import the walk.gif file
import walkGif2 from './walk2.gif'; // Import the walk2.gif file

const WalkCycle = () => {
  const spriteRef = useRef(null); // Ref to the sprite element
  const velocity = 2; // Velocity of the sprite

  useEffect(() => {
    const sprite = spriteRef.current;
    const navElement = document.querySelector('nav');
    const navWidth = navElement.offsetWidth; // Get the width of the navigation bar

    let animationId;
    let direction = 1; // Initial direction: 1 (moving right)

    const updateAnimation = () => {
      const spriteRect = sprite.getBoundingClientRect();
      

      if (spriteRect.right >= navWidth) {
        direction = -1; // Reverse direction when hitting the right edge
        sprite.style.transform = 'scaleX(-1)'; // Mirror sprite when changing direction
        sprite.src = walkGif2; // Switch walk animation
      } else if (spriteRect.left <= 0) {
        direction = 1; // Reverse direction when hitting the left edge
        sprite.style.transform = 'scaleX(1)'; // Reset sprite transformation
        sprite.src = walkGif; // Switch walk animation
      }

      sprite.style.left = `${spriteRect.left + velocity * direction}px`; // Update sprite position
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      updateAnimation();
    };

    animate(); // Start animation loop

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationId); // Stop the animation when component unmounts
    };
  }, []);

  return (
    <div className="walk-cycle">
      <img ref={spriteRef} src={walkGif} alt="Walk Cycle" style={{ position: 'absolute', top: '0' }} />
    </div>
  );
};

export default WalkCycle;
