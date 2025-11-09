import { useEffect } from "react";
import { Link } from "wouter";
import { ThemeProvider } from "@/contexts/theme-context";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useCursorEffects } from "@/hooks/use-cursor-effects";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ParticleSystem from "@/components/particle-system";
import QuantumBackground from "@/components/quantum-background";
import SEOHead from "@/components/seo/SEOHead";
import { personSchema, breadcrumbSchema } from "@/components/seo/schemas";

export default function Home() {
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
        title="Ajay Miryala - Generative AI and ML Engineer | AI & Machine Learning Expert"
        description="Experienced Generative AI and ML Engineer specializing in RAG systems, LLM orchestration, knowledge graphs, and production-grade machine learning solutions. 8+ years building scalable AI infrastructure for enterprise applications."
        keywords={["Generative AI", "ML Engineer", "LLM", "RAG", "Machine Learning", "AI Systems", "Knowledge Graphs", "Production ML", "Data Science"]}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            personSchema,
            breadcrumbSchema([
              { name: "Home", url: window.location.origin }
            ])
          ]
        }}
      />
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
        <QuantumBackground />
        <ParticleSystem />
        
        <Navigation />
        
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          
          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Ready to explore more?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover my professional journey, detailed project case studies, and let's connect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/journey" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" data-testid="link-view-journey">
                  View My Journey
                </Link>
                <Link href="/projects" className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" data-testid="link-explore-projects">
                  Explore Projects
                </Link>
                <Link href="/contact" className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" data-testid="link-get-in-touch">
                  Get In Touch
                </Link>
              </div>
            </div>
          </section>
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
              
              <div className="flex justify-center space-x-8">
                <a 
                  href="https://www.linkedin.com/in/ajay-sai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-all duration-300"
                  data-testid="link-footer-linkedin"
                >
                  <div className="p-3 rounded-full bg-secondary group-hover:bg-primary/20 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                
                <a 
                  href="https://github.com/ajay-sai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center space-y-2 text-muted-foreground hover:text-foreground transition-all duration-300"
                  data-testid="link-footer-github"
                >
                  <div className="p-3 rounded-full bg-secondary group-hover:bg-foreground/20 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">GitHub</span>
                </a>
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
