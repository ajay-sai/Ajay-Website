import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScrollNavigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      // Show buttons after scrolling 300px
      setIsVisible(scrollTop > 300);
      
      // Check if can scroll down (not at bottom)
      setCanScrollDown(scrollTop + windowHeight < documentHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        variant="outline"
        className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-md border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/20 group"
        data-testid="scroll-to-top-button"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
      </Button>

      {/* Scroll to Bottom Button */}
      {canScrollDown && (
        <Button
          onClick={scrollToBottom}
          size="icon"
          variant="outline"
          className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-md border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/20 group"
          data-testid="scroll-to-bottom-button"
          aria-label="Scroll to bottom"
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        </Button>
      )}
    </div>
  );
}