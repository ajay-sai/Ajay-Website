import { useEffect } from "react";

export function useCursorEffects() {
  useEffect(() => {
    // Custom cursor that follows mouse
    const cursor = document.createElement('div');
    cursor.className = 'quantum-cursor';
    document.body.appendChild(cursor);

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
    };

    const hideCursor = () => {
      cursor.style.opacity = '0';
    };

    const showCursor = () => {
      cursor.style.opacity = '1';
    };

    // Add hover effects for interactive elements
    const addHoverEffects = () => {
      const interactiveElements = document.querySelectorAll(
        'button, a, .quantum-card, input, textarea'
      );

      interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
          cursor.style.transform = 'scale(1.5)';
          cursor.style.background = 'var(--quantum-green)';
        });

        element.addEventListener('mouseleave', () => {
          cursor.style.transform = 'scale(1)';
          cursor.style.background = 'var(--quantum-blue)';
        });
      });
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseout', hideCursor);
    document.addEventListener('mouseover', showCursor);

    // Add hover effects after a short delay to ensure elements are rendered
    setTimeout(addHoverEffects, 1000);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseout', hideCursor);
      document.removeEventListener('mouseover', showCursor);
      document.body.removeChild(cursor);
    };
  }, []);
}
