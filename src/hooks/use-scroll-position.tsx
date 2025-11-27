'use client';

import { useEffect, useState } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

export function useScrollPosition(): ScrollPosition {
  // Initialize the state
  const [position, setPosition] = useState<ScrollPosition>({ x: 0, y: 0 });

  // Update the position when the window scrolls
  useEffect(() => {
    // Update the position when the window scrolls
    const updatePosition = () => {
      setPosition({ x: window.scrollX, y: window.scrollY });
    };

    // Add the event listener
    window.addEventListener('scroll', updatePosition);

    // Update the position
    updatePosition();

    // Return the cleanup function
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  // Return the position
  return position;
}
