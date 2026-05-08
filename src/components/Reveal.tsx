
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Important: Disconnect immediately to free up resources and prevent re-triggering
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        // Trigger animation 100px BEFORE element enters viewport to prevent blank spaces on fast scroll
        rootMargin: '100px' 
      } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    // Smaller transform distance (20px) reduces layout shift calculation costs
    switch (direction) {
      case 'up': return 'translate-y-5'; 
      case 'down': return '-translate-y-5';
      case 'left': return 'translate-x-5';
      case 'right': return '-translate-x-5';
      default: return 'translate-y-5';
    }
  };

  return (
    <div
      ref={ref}
      // REMOVED 'will-change' property to fix scrolling lag/flashing on mobile & low-end devices
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible 
          ? 'opacity-100 transform-none' 
          : `opacity-0 ${getTransform()}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
