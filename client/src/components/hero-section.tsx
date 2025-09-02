import { useEffect, useState } from "react";
import { ChevronDown, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ajayPhoto from "@assets/image_1756764365127.png";

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
      {/* Minimal Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-accent rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Professional Headshot */}
          <div className={`mb-8 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative inline-block">
              <img
                src={ajayPhoto}
                alt="Ajay Miryala - Lead Data Scientist"
                className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Name */}
          <h1 className={`text-6xl md:text-7xl font-bold mb-4 gradient-text scroll-animate transition-all duration-1000 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Ajay Miryala
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 scroll-animate"></div>

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
              className="animate-bounce hover:text-primary transition-colors"
            >
              <ChevronDown className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
