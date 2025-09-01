import { useEffect, useState } from "react";
import { ChevronDown, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Quantum Background Effects */}
      <div className="absolute inset-0 quantum-dots opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      
      {/* Neural Network Lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="neural-connection"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              width: `${200 + i * 100}px`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Professional Headshot */}
          <div className={`mb-8 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative inline-block">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
                alt="Ajay Miryala - Lead Data Scientist"
                className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary shadow-2xl quantum-float quantum-pulse"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Name */}
          <h1 className={`text-6xl md:text-7xl font-bold mb-4 transition-all duration-1000 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="gradient-text quantum-glow consciousness-expand">
              Ajay Miryala
            </span>
          </h1>

          {/* Title */}
          <h2 className={`text-2xl md:text-3xl text-muted-foreground mb-6 transition-all duration-1000 delay-400 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Lead Data Scientist
          </h2>

          {/* Bio */}
          <p className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed transition-all duration-1000 delay-600 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Lead AI Data Scientist with 8+ years of experience designing and deploying robust, production-grade data ecosystems. 
            Specializing in the full-stack infrastructure that powers modern AI, from scalable analytics platforms to operationalizing 
            complete lifecycle management of Generative AI models including RAG and multi-modal systems.
          </p>

          {/* Social Links */}
          <div className={`flex justify-center space-x-6 mb-12 transition-all duration-1000 delay-800 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <a
                href="https://www.linkedin.com/in/ajay-sai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary text-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <a
                href="https://github.com/ajay-sai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className={`transition-all duration-1000 delay-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleScrollToAbout}
              className="animate-bounce hover:text-primary transition-colors quantum-float"
            >
              <ChevronDown className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
