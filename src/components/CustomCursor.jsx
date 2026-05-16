import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      if (dotRef.current) {
        dotRef.current.style.left = x + 'px';
        dotRef.current.style.top = y + 'px';
      }
      if (ringRef.current) {
        setTimeout(() => {
          ringRef.current.style.left = x + 'px';
          ringRef.current.style.top = y + 'px';
        }, 80);
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
};

export default CustomCursor;
