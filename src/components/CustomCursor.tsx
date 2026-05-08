import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);
  const requestRef = useRef<number | undefined>(undefined);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    // Only run on client-side and non-touch devices
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const { x, y } = mousePos.current;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      
      if (followerRef.current) {
        // Add a slight delay/smoothing to the follower if desired, 
        // but for "zero lag" requested previously, we keep it direct.
        // To make it smoother (higher FPS feel), we can use linear interpolation (lerp).
        // However, the user asked for "smoothness" and "not weak frames".
        // Direct mapping is fastest, but lerp feels "smoother".
        // Let's add a very subtle lerp for the follower to give it that "fluid" feel.
        
        // Get current position
        const currentTransform = followerRef.current.style.transform;
        // Parse current X/Y (simplified) or just use previous known position
        // For simplicity and performance, let's stick to direct update inside rAF 
        // which is already much better than mousemove event loop.
        followerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check for clickable elements to trigger hover state
      const isLink = target.tagName === 'A' || 
                     target.tagName === 'BUTTON' || 
                     target.tagName === 'INPUT' || 
                     target.tagName === 'TEXTAREA' ||
                     target.closest('a') || 
                     target.closest('button') ||
                     target.getAttribute('role') === 'button';
      
      setIsHovering(!!isLink);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          body, a, button, input, textarea, select, [role="button"], .yarl__root, .yarl__root * {
            cursor: none !important;
          }
        }
      `}</style>
      
      {/* Inner Dot */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-secondary rounded-full pointer-events-none z-[999999] shadow-sm will-change-transform"
        style={{ marginLeft: '-5px', marginTop: '-5px' }}
      />
      
      {/* Outer Ring */}
      <div 
        ref={followerRef}
        className={`fixed top-0 left-0 border rounded-full pointer-events-none z-[999998] flex items-center justify-center transition-[width,height,background-color,border-color] duration-200 ease-out will-change-transform ${
          isHovering 
            ? 'w-12 h-12 bg-primary/10 border-primary/40' 
            : 'w-8 h-8 border-primary/30'
        }`}
        style={{ 
          marginLeft: isHovering ? '-24px' : '-16px', 
          marginTop: isHovering ? '-24px' : '-16px',
        }}
      />
    </>
  );
};
