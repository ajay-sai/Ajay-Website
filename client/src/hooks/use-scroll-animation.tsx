import { useEffect } from "react";

// Detect mobile device for optimized animations
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         (window.innerWidth <= 768);
};

export function useScrollAnimation() {
  useEffect(() => {
    const mobile = isMobile();
    
    const observerOptions = {
      threshold: mobile ? 0.15 : 0.1,
      rootMargin: mobile ? '0px 0px -30px 0px' : '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          const element = entry.target as HTMLElement;
          
          // Mobile-optimized smooth animations
          if (mobile) {
            element.style.opacity = '1';
            element.style.transform = 'translate3d(0, 0, 0)';
            element.style.willChange = 'auto';
          } else {
            element.style.opacity = '1';
            element.style.transform = 'translate3d(0, 0, 0)';
            element.style.willChange = 'auto';
          }
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.quantum-card, .gradient-text, .consciousness-expand, .reality-bend, .mobile-smooth'
    );
    
    animatedElements.forEach((el, index) => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      
      if (mobile) {
        // Mobile: gentler transforms and longer delays for smoothness
        element.style.transform = 'translate3d(0, 15px, 0)';
        element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)';
        element.style.transitionDelay = `${index * 80}ms`;
      } else {
        // Desktop: standard animations
        element.style.transform = 'translate3d(0, 30px, 0)';
        element.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        element.style.transitionDelay = `${index * 50}ms`;
      }
      
      element.style.willChange = 'transform, opacity';
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}
