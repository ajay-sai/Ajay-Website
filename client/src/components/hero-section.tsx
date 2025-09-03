import { useEffect, useState } from "react";
import { ChevronDown, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ajayPhoto from "@assets/image_1756764365127.png";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleResumeDownload = async () => {
    try {
      const response = await fetch('/api/download/resume');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Ajay_Miryala_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        toast({
          title: "✓ Downloaded",
          duration: 2000,
        });
      } else {
        throw new Error('Failed to download resume');
      }
    } catch (error) {
      toast({
        title: "Download Failed",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  return (
    <section id="home" className="pt-16 pb-4 flex items-center justify-center relative overflow-hidden">
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
          <h1 className={`text-6xl md:text-8xl lg:text-9xl font-black mb-6 gradient-text scroll-animate ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} data-testid="heading-hero-name">
            Ajay Miryala
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 scroll-animate"></div>

          {/* Title */}
          <h2 className={`text-2xl md:text-3xl text-muted-foreground mb-6 transition-all duration-1000 delay-400 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Lead Data Scientist
          </h2>

          {/* Social Links */}
          <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 transition-all duration-1000 delay-600 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 rounded-xl min-w-[140px]">
              <a
                href="https://www.linkedin.com/in/ajay-sai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 relative z-10 px-8 py-4"
                data-testid="button-linkedin"
              >
                <Linkedin className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold tracking-wide">LinkedIn</span>
              </a>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 rounded-xl min-w-[140px]">
              <button
                onClick={handleResumeDownload}
                className="flex items-center justify-center space-x-3 relative z-10 px-8 py-4 w-full bg-transparent border-0 text-white cursor-pointer"
                data-testid="button-resume-download"
              >
                <Download className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold tracking-wide">Resume</span>
              </button>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            </div>
            
            <div className="group relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white border border-gray-600 hover:border-gray-500 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 rounded-xl min-w-[140px]">
              <a
                href="https://github.com/ajay-sai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 relative z-10 px-8 py-4"
                data-testid="button-github"
              >
                <Github className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold tracking-wide">GitHub</span>
              </a>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`transition-all duration-1000 delay-800 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleScrollToAbout}
              className="animate-bounce hover:text-primary transition-colors bg-background/50 backdrop-blur-sm border border-border shadow-lg hover:bg-primary/10"
            >
              <ChevronDown className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
