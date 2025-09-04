import { useEffect, useRef } from "react";

interface FloatingElementProps {
  left: string;
  top: string;
  color: string;
  shape: 'sphere' | 'cube' | 'octahedron' | 'torus';
  size: string;
  animationDelay: string;
  animationDuration: string;
}

function FloatingElement({ left, top, color, shape, size, animationDelay, animationDuration }: FloatingElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Apply random initial rotation
    const randomRotateX = Math.random() * 360;
    const randomRotateY = Math.random() * 360;
    element.style.transform = `rotateX(${randomRotateX}deg) rotateY(${randomRotateY}deg)`;
  }, []);

  const getShapeStyles = () => {
    const baseStyles = {
      width: size,
      height: size,
      backgroundColor: color,
      boxShadow: `0 0 20px ${color}40, inset 0 0 10px ${color}20`,
      border: `1px solid ${color}60`,
    };

    switch (shape) {
      case 'sphere':
        return { ...baseStyles, borderRadius: '50%' };
      case 'cube':
        return { ...baseStyles, borderRadius: '8px' };
      case 'octahedron':
        return { 
          ...baseStyles, 
          borderRadius: '50%',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          transform: 'rotate(45deg)',
        };
      case 'torus':
        return { 
          ...baseStyles, 
          borderRadius: '50%',
          border: `4px solid ${color}`,
          backgroundColor: 'transparent',
          boxShadow: `0 0 15px ${color}60`,
        };
      default:
        return { ...baseStyles, borderRadius: '50%' };
    }
  };

  return (
    <div
      ref={elementRef}
      className="absolute animate-floating-3d"
      style={{
        left,
        top,
        animationDelay,
        animationDuration,
        ...getShapeStyles(),
      }}
    />
  );
}

export default function Floating3DElements() {
  const elements = [
    // Data nodes around the hero
    { left: '15%', top: '20%', color: '#3b82f6', shape: 'sphere', size: '24px', animationDelay: '0s', animationDuration: '8s' },
    { left: '85%', top: '25%', color: '#10b981', shape: 'cube', size: '20px', animationDelay: '1s', animationDuration: '10s' },
    { left: '20%', top: '70%', color: '#8b5cf6', shape: 'octahedron', size: '28px', animationDelay: '2s', animationDuration: '7s' },
    { left: '80%', top: '60%', color: '#f59e0b', shape: 'torus', size: '16px', animationDelay: '3s', animationDuration: '9s' },
    
    // Neural network connections
    { left: '25%', top: '10%', color: '#06b6d4', shape: 'sphere', size: '12px', animationDelay: '4s', animationDuration: '6s' },
    { left: '75%', top: '15%', color: '#ef4444', shape: 'cube', size: '16px', animationDelay: '5s', animationDuration: '11s' },
    { left: '10%', top: '45%', color: '#84cc16', shape: 'octahedron', size: '22px', animationDelay: '6s', animationDuration: '8s' },
    { left: '90%', top: '40%', color: '#f97316', shape: 'torus', size: '14px', animationDelay: '7s', animationDuration: '7s' },
    
    // Additional ambient elements
    { left: '40%', top: '85%', color: '#ec4899', shape: 'sphere', size: '18px', animationDelay: '8s', animationDuration: '9s' },
    { left: '60%', top: '80%', color: '#6366f1', shape: 'cube', size: '14px', animationDelay: '9s', animationDuration: '10s' },
    { left: '50%', top: '5%', color: '#14b8a6', shape: 'octahedron', size: '16px', animationDelay: '10s', animationDuration: '8s' },
    { left: '5%', top: '75%', color: '#a855f7', shape: 'torus', size: '12px', animationDelay: '11s', animationDuration: '7s' },
  ] as const;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 5 }}>
      {elements.map((element, index) => (
        <FloatingElement key={index} {...element} />
      ))}
    </div>
  );
}