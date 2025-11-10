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
      threshold: mobile ? 0.2 : 0.15,
      rootMargin: mobile ? '0px 0px -20px 0px' : '0px 0px -30px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('animate-in')) {
          // Only animate once - add animate-in and never remove it
          entry.target.classList.add('animate-in');
          // Stop observing this element since it's already animated
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Only observe elements with specific scroll animation class
    const animatedElements = document.querySelectorAll('.scroll-animate');
    
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
