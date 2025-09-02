import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScrollVideoFrame {
  title: string;
  description: string;
  background: string;
  accent: string;
  content: {
    metric: string;
    value: string;
    subtitle: string;
  }[];
}

const videoFrames: ScrollVideoFrame[] = [
  {
    title: "Data Processing Excellence",
    description: "Processing massive datasets with quantum-enhanced algorithms",
    background: "from-blue-900/20 via-blue-800/10 to-transparent",
    accent: "text-blue-400",
    content: [
      { metric: "TB", value: "500+", subtitle: "Data Processed" },
      { metric: "ms", value: "<100", subtitle: "Response Time" },
      { metric: "%", value: "99.9", subtitle: "Accuracy Rate" }
    ]
  },
  {
    title: "Machine Learning Innovation",
    description: "Revolutionary neural networks transforming business intelligence",
    background: "from-green-900/20 via-green-800/10 to-transparent",
    accent: "text-green-400",
    content: [
      { metric: "Models", value: "150+", subtitle: "Deployed" },
      { metric: "Users", value: "1M+", subtitle: "Serving Daily" },
      { metric: "%", value: "40", subtitle: "Revenue Increase" }
    ]
  },
  {
    title: "AI Solutions Architecture",
    description: "Scalable AI infrastructure powering enterprise transformations",
    background: "from-purple-900/20 via-purple-800/10 to-transparent",
    accent: "text-purple-400",
    content: [
      { metric: "Systems", value: "50+", subtitle: "Integrated" },
      { metric: "Countries", value: "25", subtitle: "Global Reach" },
      { metric: "x", value: "10", subtitle: "Performance Boost" }
    ]
  },
  {
    title: "Quantum Computing Edge",
    description: "Pioneering quantum algorithms for next-generation computing",
    background: "from-cyan-900/20 via-cyan-800/10 to-transparent",
    accent: "text-cyan-400",
    content: [
      { metric: "Qubits", value: "1000+", subtitle: "Quantum States" },
      { metric: "x", value: "1000", subtitle: "Speed Improvement" },
      { metric: "Patents", value: "12", subtitle: "Filed" }
    ]
  }
];

export default function ScrollVideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through this section
      const start = -rect.height;
      const end = windowHeight;
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (end - start)));
      
      setScrollProgress(progress);

      // Determine current frame based on scroll position
      const frameIndex = Math.floor(progress * videoFrames.length);
      const clampedFrame = Math.max(0, Math.min(videoFrames.length - 1, frameIndex));
      setCurrentFrame(clampedFrame);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentFrame(prev => (prev + 1) % videoFrames.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentFrameData = videoFrames[currentFrame];

  return (
    <section 
      id="data-insights"
      ref={containerRef}
      className="min-h-screen py-12 relative overflow-hidden sticky top-0"
      style={{ zIndex: 1 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${currentFrameData.background} transition-all duration-1000`}
        />
        
        {/* Cascading particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${(i * 5) % 100}%`,
                top: `${Math.sin(scrollProgress * Math.PI * 2 + i) * 50 + 50}%`,
                animationDelay: `${i * 0.1}s`,
                transform: `translateY(${scrollProgress * -100}px)`,
                transition: 'all 0.3s ease-out'
              }}
            />
          ))}
        </div>

        {/* Cascading data streams */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(8)].map((_, i) => (
            <div
              key={`stream-${i}`}
              className="absolute h-full w-px bg-gradient-to-b from-transparent via-primary to-transparent"
              style={{
                left: `${10 + i * 12}%`,
                transform: `translateY(${(scrollProgress * 200 + i * 50) % 200 - 100}px)`,
                transition: 'transform 0.1s linear'
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Content Side */}
          <div className="space-y-8">
            {/* Video Controls */}
            <div className="flex items-center space-x-4 mb-6">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-black/20 border-white/20 hover:bg-white/10"
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4 text-white" />
                ) : (
                  <Play className="h-4 w-4 text-white" />
                )}
              </Button>
              
              {/* Progress Bar */}
              <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                  style={{ width: `${((currentFrame + 1) / videoFrames.length) * 100}%` }}
                />
              </div>
              
              <span className="text-white/70 text-sm min-w-fit">
                {currentFrame + 1} / {videoFrames.length}
              </span>
            </div>

            {/* Frame Content */}
            <div className="transform transition-all duration-1000">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${currentFrameData.accent}`}>
                {currentFrameData.title}
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                {currentFrameData.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6">
                {currentFrameData.content.map((item, index) => (
                  <div 
                    key={index}
                    className="text-center transform transition-all duration-700"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-end justify-center space-x-1 mb-2">
                      <span className={`text-3xl md:text-4xl font-bold ${currentFrameData.accent}`}>
                        {item.value}
                      </span>
                      <span className={`text-lg ${currentFrameData.accent} opacity-80`}>
                        {item.metric}
                      </span>
                    </div>
                    <div className="text-white/60 text-sm">
                      {item.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            {/* Holographic Display */}
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm border border-white/20" />
              
              {/* Cascading Code Effect */}
              <div className="absolute inset-0 font-mono text-xs text-green-400/60 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute whitespace-nowrap"
                    style={{
                      top: `${i * 6}%`,
                      left: '10px',
                      transform: `translateX(${Math.sin(scrollProgress * Math.PI + i) * 50}px)`,
                      opacity: Math.sin(scrollProgress * Math.PI * 2 + i) * 0.5 + 0.5,
                      transition: 'all 0.3s ease-out'
                    }}
                  >
                    {`import tensorflow as tf; model.predict(data_${i})`}
                  </div>
                ))}
              </div>

              {/* Central Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Rotating rings */}
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute border-2 border-${currentFrameData.accent.split('-')[1]}-400/30 rounded-full`}
                      style={{
                        width: `${100 + i * 40}px`,
                        height: `${100 + i * 40}px`,
                        left: `${-(50 + i * 20)}px`,
                        top: `${-(50 + i * 20)}px`,
                        transform: `rotate(${scrollProgress * 360 + i * 120}deg)`,
                        transition: 'transform 0.1s linear'
                      }}
                    />
                  ))}
                  
                  {/* Center node */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-${currentFrameData.accent.split('-')[1]}-400 to-${currentFrameData.accent.split('-')[1]}-600 flex items-center justify-center text-white font-bold`}>
                    AI
                  </div>
                </div>
              </div>

              {/* Scan lines */}
              <div className="absolute inset-0">
                <div 
                  className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  style={{
                    top: `${(scrollProgress * 100) % 100}%`,
                    transition: 'top 0.1s linear'
                  }}
                />
              </div>
            </div>

            {/* Frame indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {videoFrames.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFrame(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentFrame === index 
                      ? `bg-${currentFrameData.accent.split('-')[1]}-400` 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}