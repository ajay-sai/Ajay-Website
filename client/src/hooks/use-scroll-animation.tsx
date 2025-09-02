import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          const element = entry.target as HTMLElement;
          element.style.opacity = '1';
          element.style.transform = 'translate3d(0, 0, 0)';
          element.style.willChange = 'auto';
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.quantum-card, .gradient-text, .consciousness-expand, .reality-bend, .quantum-float'
    );
    
    animatedElements.forEach((el) => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translate3d(0, 30px, 0)';
      element.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      element.style.willChange = 'transform, opacity';
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}
