import { useEffect } from "react";
import { Link } from "wouter";
import { ThemeProvider } from "@/contexts/theme-context";
import { useCursorEffects } from "@/hooks/use-cursor-effects";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import JourneyPreview from "@/components/journey-preview";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ServicesSection from "@/components/services-section";
import FAQSection from "@/components/faq-section";
import ParticleSystem from "@/components/particle-system";
import QuantumBackground from "@/components/quantum-background";
import SEOHead from "@/components/seo/SEOHead";
import { personSchema, breadcrumbSchema, faqSchema, webPageSchema, organizationSchemas, workExperienceSchemas } from "@/components/seo/schemas";
import { faqData } from "@/data/faq-data";

export default function Home() {
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
            webPageSchema({
              name: "Ajay Miryala - Generative AI and ML Engineer",
              description: "Professional portfolio showcasing expertise in Generative AI, LLM systems, RAG architectures, and production machine learning",
              url: window.location.origin,
              dateModified: "2025-11-10"
            }),
            ...organizationSchemas,
            ...workExperienceSchemas,
            breadcrumbSchema([
              { name: "Home", url: window.location.origin }
            ]),
            faqSchema(faqData)
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
          <JourneyPreview />
          <SkillsSection />
          <ProjectsSection />
          <ServicesSection />
          <FAQSection />
          
          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to collaborate on innovative data science projects? Let's discuss how advanced analytics and machine learning can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" data-testid="link-lets-connect">
                  Let's Connect
                </Link>
              </div>
            </div>
          </section>
        </main>
      
        {/* Footer */}
        <footer className="relative z-10 py-8 bg-gradient-to-t from-neural-primary via-background to-background border-t border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 max-w-3xl mx-auto">
              {/* Email */}
              <a 
                href="mailto:sai.ajaysai@gmail.com"
                className="group flex flex-col items-center p-3 bg-card hover:bg-card/80 rounded-lg border border-border transition-all duration-300"
                data-testid="link-footer-email"
              >
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors mb-2">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-xs font-semibold mb-0.5">Email</div>
                <div className="text-xs text-muted-foreground text-center leading-tight">sai.ajaysai@gmail.com</div>
              </a>

              {/* Phone */}
              <a 
                href="tel:240-360-7905"
                className="group flex flex-col items-center p-3 bg-card hover:bg-card/80 rounded-lg border border-border transition-all duration-300"
                data-testid="link-footer-phone"
              >
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors mb-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-xs font-semibold mb-0.5">Phone</div>
                <div className="text-xs text-muted-foreground">(240) 360-7905</div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/ajay-sai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-3 bg-card hover:bg-card/80 rounded-lg border border-border transition-all duration-300"
                data-testid="link-footer-linkedin"
              >
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors mb-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="text-xs font-semibold mb-0.5">LinkedIn</div>
                <div className="text-xs text-muted-foreground">ajay-sai</div>
              </a>
              
              {/* GitHub */}
              <a 
                href="https://github.com/ajay-sai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-3 bg-card hover:bg-card/80 rounded-lg border border-border transition-all duration-300"
                data-testid="link-footer-github"
              >
                <div className="w-8 h-8 bg-foreground/20 rounded-full flex items-center justify-center group-hover:bg-foreground/30 transition-colors mb-2">
                  <svg className="w-4 h-4 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="text-xs font-semibold mb-0.5">GitHub</div>
                <div className="text-xs text-muted-foreground">ajay-sai</div>
              </a>
            </div>

            <div className="text-center pt-4 border-t border-border/30">
              <div className="text-xs text-muted-foreground">
                © 2024 Ajay Miryala. Crafted with advanced web technologies and quantum-inspired design.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
