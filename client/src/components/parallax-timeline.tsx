import { useEffect, useRef, useState } from "react";
import { Calendar, TrendingUp, Award, Code } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  achievements: string[];
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2024",
    title: "Lead Data Scientist",
    description: "Spearheading AI transformation initiatives across Fortune 500 companies",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
    achievements: [
      "40% revenue increase through predictive analytics",
      "1M+ users served by recommendation systems",
      "Led team of 15+ data scientists"
    ]
  },
  {
    year: "2022",
    title: "Senior ML Engineer",
    description: "Architected scalable machine learning pipelines and MLOps infrastructure",
    icon: Code,
    color: "from-green-500 to-emerald-500",
    achievements: [
      "99.9% model accuracy in production",
      "50+ ML models deployed",
      "Built automated training pipelines"
    ]
  },
  {
    year: "2020",
    title: "Data Science Innovator",
    description: "Pioneered computer vision solutions for manufacturing quality control",
    icon: Award,
    color: "from-purple-500 to-violet-500",
    achievements: [
      "60% reduction in false positives",
      "Real-time fraud detection system",
      "12 patents filed in AI/ML"
    ]
  },
  {
    year: "2018",
    title: "Career Foundation",
    description: "Started journey in data science with focus on statistical modeling",
    icon: Calendar,
    color: "from-orange-500 to-red-500",
    achievements: [
      "Master's in Data Science",
      "First ML model in production",
      "Published 5 research papers"
    ]
  }
];

export default function ParallaxTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeEvent, setActiveEvent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through this section
      const start = -rect.height / 2;
      const end = windowHeight;
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (end - start)));
      
      setScrollProgress(progress);

      // Determine active event based on scroll position
      const eventIndex = Math.floor(progress * timelineEvents.length);
      const clampedEvent = Math.max(0, Math.min(timelineEvents.length - 1, eventIndex));
      setActiveEvent(clampedEvent);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="timeline"
      ref={containerRef}
      className="min-h-[200vh] py-20 relative overflow-hidden"
    >
      {/* Fixed Background with Parallax */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        {/* Dynamic gradient background */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${timelineEvents[activeEvent].color} opacity-10 transition-all duration-1000`}
        />
        
        {/* Floating data visualization */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${(i * 17) % 100}%`,
                top: `${(i * 23) % 100}%`,
                transform: `translateY(${scrollProgress * -200 + (i * 10)}px) scale(${0.5 + Math.sin(scrollProgress * Math.PI + i) * 0.5})`,
                opacity: 0.3 + Math.sin(scrollProgress * Math.PI * 2 + i) * 0.3,
                transition: 'all 0.3s ease-out'
              }}
            />
          ))}
        </div>

        {/* Neural network connections */}
        <svg className="absolute inset-0 w-full h-full">
          {[...Array(10)].map((_, i) => (
            <line
              key={i}
              x1={`${(i * 20) % 100}%`}
              y1={`${(i * 30) % 100}%`}
              x2={`${((i + 3) * 20) % 100}%`}
              y2={`${((i + 3) * 30) % 100}%`}
              stroke="rgba(59, 130, 246, 0.2)"
              strokeWidth="1"
              style={{
                transform: `translateY(${scrollProgress * -100}px)`,
                opacity: 0.5 + Math.sin(scrollProgress * Math.PI + i) * 0.3
              }}
            />
          ))}
        </svg>
      </div>

      {/* Timeline Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        {/* Timeline Line */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-50" />
          
          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            const isActive = activeEvent >= index;
            const itemProgress = Math.max(0, Math.min(1, (scrollProgress - (index / timelineEvents.length)) * timelineEvents.length));
            
            return (
              <div
                key={event.year}
                className={`relative mb-16 transition-all duration-1000 ${
                  index % 2 === 0 ? 'text-left' : 'text-right'
                }`}
                style={{
                  transform: `translateY(${isActive ? 0 : 50}px)`,
                  opacity: isActive ? 1 : 0.3
                }}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center border-4 border-background transition-all duration-500 ${
                    isActive ? 'scale-110 shadow-lg shadow-primary/30' : 'scale-100'
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`relative ${
                  index % 2 === 0 ? 'mr-auto pr-16' : 'ml-auto pl-16'
                } max-w-md`}>
                  <div className="quantum-card p-6 rounded-xl shadow-lg">
                    {/* Year Badge */}
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${event.color} text-white font-bold text-lg mb-4`}>
                      {event.year}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Achievements with Progress Animation */}
                    <div className="space-y-2">
                      {event.achievements.map((achievement, achievementIndex) => (
                        <div
                          key={achievementIndex}
                          className="flex items-center space-x-2 transform transition-all duration-500"
                          style={{
                            transform: `translateX(${isActive ? 0 : (index % 2 === 0 ? -20 : 20)}px)`,
                            opacity: isActive ? 1 : 0,
                            transitionDelay: `${achievementIndex * 200}ms`
                          }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${event.color}`} />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 h-1 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${event.color} transition-all duration-1000`}
                        style={{ width: `${itemProgress * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
            <span className="text-white/70 text-sm">Timeline Progress</span>
            <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
            <span className="text-white/70 text-sm">{Math.round(scrollProgress * 100)}%</span>
          </div>
        </div>
      </div>
    </section>
  );
}