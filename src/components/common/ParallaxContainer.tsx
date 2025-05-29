import { ReactNode, useRef, useEffect, useState } from 'react';

interface ParallaxContainerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxContainer = ({ children, speed = 0.3, className = '' }: ParallaxContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top } = containerRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (top <= windowHeight && top + containerRef.current.offsetHeight >= 0) {
        const parallaxOffset = (scrollPosition - (scrollPosition + top - windowHeight)) * speed;
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div
        style={{ transform: `translateY(${offset}px)` }}
        className="transition-transform duration-100 ease-linear"
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxContainer;