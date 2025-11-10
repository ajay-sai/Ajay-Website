import { useState, useEffect } from "react";

export interface MotionProfile {
  isMobile: boolean;
  prefersReducedMotion: boolean;
  shouldReduceMotion: boolean;
}

export function useMotionProfile(): MotionProfile {
  const [profile, setProfile] = useState<MotionProfile>({
    isMobile: false,
    prefersReducedMotion: false,
    shouldReduceMotion: false,
  });

  useEffect(() => {
    const checkMotionProfile = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                      window.innerWidth <= 768;
      
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      const shouldReduceMotion = isMobile || prefersReducedMotion;

      setProfile({
        isMobile,
        prefersReducedMotion,
        shouldReduceMotion,
      });
    };

    checkMotionProfile();

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => checkMotionProfile();
    
    mediaQuery.addEventListener('change', handleChange);
    window.addEventListener('resize', checkMotionProfile);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('resize', checkMotionProfile);
    };
  }, []);

  return profile;
}
