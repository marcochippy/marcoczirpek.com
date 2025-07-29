import { useState, useEffect } from 'react';

export const useResponsiveDrag = () => {
  const [isMdOrLarger, setIsMdOrLarger] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMdOrLarger(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const dragValues = {
    whileHover: { scale: 1.015 },
    whileTap: { scale: 0.95 },
    whileDrag: { scale: 0.98 },
    drag: isMdOrLarger,
    dragConstraints: { top: -70, bottom: 70, left: -70, right: 70 },
  };

  return dragValues;
};
