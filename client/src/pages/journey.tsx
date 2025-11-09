import { useEffect } from "react";
import { ThemeProvider } from "@/contexts/theme-context";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useCursorEffects } from "@/hooks/use-cursor-effects";
import Navigation from "@/components/navigation";
import ParallaxTimeline from "@/components/parallax-timeline";
import ParticleSystem from "@/components/particle-system";
import QuantumBackground from "@/components/quantum-background";
import SEOHead from "@/components/seo/SEOHead";
import { personSchema, breadcrumbSchema } from "@/components/seo/schemas";

export default function Journey() {
  useScrollAnimation();
  useCursorEffects();

  useEffect(() => {
    document.body.classList.add('quantum-reality');
    
    return () => {
      document.body.classList.remove('quantum-reality');
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <SEOHead
        title="Professional Journey - Ajay Miryala | Career Timeline"
        description="Explore my professional and educational journey from student to Generative AI and ML Engineer, featuring roles at The Home Depot, Harley Davidson, Principal Financial, and degrees from University of Maryland and SRM University."
        keywords={["Career Journey", "Professional Timeline", "AI Engineer Career", "The Home Depot", "Machine Learning Career", "Data Science Experience"]}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            personSchema,
            breadcrumbSchema([
              { name: "Home", url: window.location.origin },
              { name: "Journey", url: `${window.location.origin}/journey` }
            ])
          ]
        }}
      />
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
        <QuantumBackground />
        <ParticleSystem />
        
        <Navigation />
        
        <main className="relative z-10">
          <ParallaxTimeline />
        </main>
      
        {/* Footer */}
        <footer className="relative z-10 py-16 bg-gradient-to-t from-neural-primary via-background to-background border-t border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <div className="text-3xl font-bold gradient-text">Ajay Miryala</div>
                <p className="text-xl text-muted-foreground">Generative AI and ML Engineer | AI Innovator</p>
                <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
                  Building scalable AI systems and transforming businesses through cutting-edge machine learning solutions.
                </p>
              </div>
              
              <div className="pt-8 border-t border-border/30">
                <div className="text-sm text-muted-foreground">
                  © 2024 Ajay Miryala. Crafted with advanced web technologies and quantum-inspired design.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
