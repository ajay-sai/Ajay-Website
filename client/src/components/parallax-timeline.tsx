import { useEffect, useRef, useState } from "react";
import { Calendar, TrendingUp, Award, Code, Target, Zap, Settings } from "lucide-react";
import harleyDavidsonImage1 from "@assets/image_1756765291859.png";
import harleyDavidsonImage2 from "@assets/image_1756766255322.png";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  achievements: string[];
  companyImage?: string;
  companyImages?: string[];
  companyLogo?: string;
  companyColor?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2025",
    title: "Gen AI/ML Engineer",
    description: "The Home Depot Management Company (Jan 2025 - Present)",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
    companyLogo: "🏠",
    companyColor: "#f96302",
    achievements: [
      "Designed scalable generative AI systems for text summarization, Q&A bots, and contract parsing",
      "55% reduction in analytics turnaround time through custom prompt optimization frameworks",
      "Technologies: GPT-4, BERT, Gemini, Longformer, LoRA/QLoRA, HuggingFace, TFX, Vertex AI, MLflow"
    ]
  },
  {
    year: "2023",
    title: "Senior Data Scientist - Decision Analytics",
    description: "The Home Depot Management Company (Jun 2023 - Jan 2025)",
    icon: Code,
    color: "from-green-500 to-emerald-500",
    companyLogo: "🏠",
    companyColor: "#f96302",
    achievements: [
      "Architected dynamic image generation pipeline transforming Home Depot's guided search",
      "87% accuracy in house renovation prediction targeting $20M marketing budget savings",
      "Technologies: Google Image Gen-3, Stable Diffusion, Gemini-1.5 Pro, ResNet, Vision Transformers, BigQuery"
    ]
  },
  {
    year: "2022",
    title: "Senior Data Analyst",
    description: "The Home Depot Management Company (Mar 2022 - Jun 2023)",
    icon: Award,
    color: "from-purple-500 to-violet-500",
    companyLogo: "🏠",
    companyColor: "#f96302",
    achievements: [
      "Analyzed customer behavior across platforms providing insights to 300+ associates",
      "Led Voice of Associates initiative reducing onboarding time by 20% and satisfaction by 10%",
      "Technologies: Adobe Analytics, Tableau, Google Data Studio, BigQuery, Python, Liftoff platform"
    ]
  },
  {
    year: "2020",
    title: "Data Analyst and Engineer",
    description: "Harley Davidson Motor Company (Feb 2020 - Mar 2022)",
    icon: Calendar,
    color: "from-orange-500 to-red-500",
    companyImage: harleyDavidsonImage1,
    companyImages: [harleyDavidsonImage1, harleyDavidsonImage2],
    achievements: [
      "Built optimized data models and ETL pipelines reducing data processing time by 80%",
      "Decreased open purchase orders by 55% and inventory mismatches by 30%",
      "Technologies: Tableau, Power BI, SAP Analytics Cloud, SQL, Alteryx, FLEX PLM, EDI transactions"
    ]
  },
  {
    year: "2019a",
    title: "Marketing Analyst",
    description: "Anahata Art and Design Pvt (May 2019 - Dec 2019)",
    icon: TrendingUp,
    color: "from-pink-500 to-rose-500",
    companyLogo: "🎨",
    companyColor: "#e91e63",
    achievements: [
      "Managed Google Ads campaign achieving 200% website traffic increase (92% new users/week)",
      "Generated $3100 revenue with 113 product sales from $300 budget",
      "Technologies: Google Ads, 110 ad copies, 6,000 keywords, web analytics, cost-per-click optimization"
    ]
  },
  {
    year: "2019b",
    title: "Data Scientist",
    description: "Principal Financial Group (Aug 2019 - Dec 2019)",
    icon: Code,
    color: "from-indigo-500 to-purple-500",
    companyLogo: "💼",
    companyColor: "#1976d2",
    achievements: [
      "Predicted market regime of Russell 1000 companies for investment evaluation",
      "Achieved 78% accuracy in ML models and 5% improvement in client investment confidence",
      "Technologies: Python, R, SQL Server, Logistic Regression, Random Forest, XGBoost, keras, sklearn"
    ]
  },
  {
    year: "2019c",
    title: "Graduate Assistant",
    description: "University of Maryland (May 2019 - Dec 2019)",
    icon: Award,
    color: "from-emerald-500 to-teal-500",
    companyLogo: "🎓",
    companyColor: "#d32f2f",
    achievements: [
      "Assessed and maintained student records for 4000+ students to improve academic standing",
      "Led team of 10 undergraduate students improving satisfaction rate by 10%",
      "Technologies: SQL data extraction, academic advisory programs, student performance analytics"
    ]
  },
  {
    year: "2017",
    title: "Data Analyst",
    description: "Bridge Solutions (May 2017 - May 2018)",
    icon: Calendar,
    color: "from-teal-500 to-cyan-500",
    companyLogo: "🌉",
    companyColor: "#00796b",
    achievements: [
      "Created visually impactful interactive dashboards reporting key KPIs for multiple clients",
      "Achieved $1M cost reduction through analytical inventory targeting and optimization",
      "Technologies: Tableau, Excel, Microsoft SQL Server, Python, Docker, IBM OMS 9.5, WMS 9.5"
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

                {/* Centered Scrolling Image Flipper */}
                {(event.companyImages || event.companyImage || event.companyLogo) && (
                  <div 
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
                    style={{
                      transform: `translate(-50%, -50%) scale(${isActive ? 1 : 0.8})`,
                      opacity: isActive ? 1 : 0.4,
                      transition: 'all 0.8s ease-out'
                    }}
                  >
                    {/* Large Centered Image Container */}
                    <div className="relative w-[500px] h-[600px]">
                      {event.companyImages ? (
                        (() => {
                          // Calculate which image to show based on scroll progress
                          // Each timeline event gets 1/8 of total scroll (8 events)
                          const eventScrollStart = index / timelineEvents.length;
                          const eventScrollEnd = (index + 1) / timelineEvents.length;
                          const eventScrollProgress = Math.max(0, Math.min(1, 
                            (scrollProgress - eventScrollStart) / (eventScrollEnd - eventScrollStart)
                          ));
                          
                          // Within each event, divide scroll into image segments
                          // 3 scrolls = next job, so each image gets 1/3 of event scroll
                          const imageCount = event.companyImages.length;
                          const currentImageIndex = Math.floor(eventScrollProgress * imageCount);
                          const clampedIndex = Math.min(currentImageIndex, imageCount - 1);
                          
                          // Calculate flip progress for smooth transitions
                          const imageProgress = (eventScrollProgress * imageCount) % 1;
                          const isFlipping = imageProgress > 0.8; // Start flip at 80% through scroll
                          
                          return event.companyImages.map((image, imageIndex) => {
                            const isCurrentImage = imageIndex === clampedIndex;
                            const isNextImage = imageIndex === clampedIndex + 1;
                            
                            // Calculate flip rotation
                            let rotateY = 0;
                            if (isCurrentImage && isFlipping && isNextImage) {
                              rotateY = (imageProgress - 0.8) / 0.2 * -90; // Flip out
                            } else if (isNextImage && isFlipping) {
                              rotateY = ((imageProgress - 0.8) / 0.2 * 90) - 90; // Flip in
                            } else if (!isCurrentImage) {
                              rotateY = imageIndex < clampedIndex ? -90 : 90; // Hidden positions
                            }
                            
                            return (
                              <div
                                key={imageIndex}
                                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 backdrop-blur-sm"
                                style={{
                                  transform: `rotateY(${rotateY}deg)`,
                                  opacity: (isCurrentImage || (isNextImage && isFlipping)) ? 1 : 0,
                                  zIndex: isCurrentImage ? 10 : (isNextImage ? 9 : 1),
                                  transition: 'transform 0.6s ease-out, opacity 0.3s ease-out',
                                  transformStyle: 'preserve-3d',
                                  backfaceVisibility: 'hidden'
                                }}
                              >
                                <img 
                                  src={image} 
                                  alt={`${event.title} company ${imageIndex + 1}`}
                                  className="w-full h-full object-cover filter brightness-95 hover:brightness-100 transition-all duration-500"
                                />
                                
                                {/* Image Overlay with Company Info */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8">
                                  <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${event.color} text-white font-bold text-xl shadow-lg mb-3`}>
                                    {event.year}
                                  </div>
                                  <h4 className="text-white font-bold text-2xl mb-2">{event.title}</h4>
                                  <p className="text-white/90 text-base">{event.description.split(' (')[0]}</p>
                                  <div className="mt-4 flex items-center space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-white/60" />
                                    <span className="text-white/80 text-sm">Image {imageIndex + 1} of {imageCount}</span>
                                  </div>
                                </div>
                                
                                {/* Scroll indicator */}
                                <div className="absolute top-8 right-8">
                                  <div className="flex flex-col items-center space-y-1">
                                    {event.companyImages.map((_, dotIndex) => (
                                      <div 
                                        key={dotIndex}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                          dotIndex === clampedIndex 
                                            ? 'bg-white shadow-lg scale-125' 
                                            : 'bg-white/40'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                            );
                          });
                        })()
                      ) : event.companyImage ? (
                        <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 backdrop-blur-sm">
                          <img 
                            src={event.companyImage} 
                            alt={`${event.title} company`}
                            className="w-full h-full object-cover filter brightness-95 hover:brightness-100 transition-all duration-500"
                          />
                          
                          {/* Image Overlay with Company Info */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          <div className="absolute bottom-8 left-8 right-8">
                            <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${event.color} text-white font-bold text-xl shadow-lg mb-3`}>
                              {event.year}
                            </div>
                            <h4 className="text-white font-bold text-2xl mb-2">{event.title}</h4>
                            <p className="text-white/90 text-base">{event.description.split(' (')[0]}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white to-gray-100 shadow-2xl border-4 border-white/30 flex items-center justify-center">
                          <div 
                            className="text-9xl font-bold animate-pulse"
                            style={{ 
                              color: event.companyColor,
                              animationDuration: '3s'
                            }}
                          >
                            {event.companyLogo}
                          </div>
                        </div>
                      )}
                      
                      {/* Floating Accent Elements */}
                      <div className="absolute -inset-16 pointer-events-none">
                        {[...Array(8)].map((_, particleIndex) => (
                          <div
                            key={particleIndex}
                            className="absolute w-4 h-4 bg-primary/30 rounded-full blur-sm"
                            style={{
                              left: `${15 + (particleIndex * 25) % 70}%`,
                              top: `${15 + (particleIndex * 35) % 70}%`,
                              transform: `
                                translateY(${Math.sin(scrollProgress * Math.PI * 3 + particleIndex) * 40}px)
                                translateX(${Math.cos(scrollProgress * Math.PI * 2 + particleIndex) * 30}px)
                                scale(${0.6 + Math.sin(scrollProgress * Math.PI + particleIndex) * 0.4})
                              `,
                              opacity: 0.8,
                              animationDelay: `${particleIndex * 0.4}s`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Content Card */}
                <div className={`relative ${
                  index % 2 === 0 ? 'mr-auto pr-16' : 'ml-auto pl-16'
                } max-w-md`}>
                  <div className="quantum-card p-6 rounded-xl shadow-lg overflow-hidden">
                    {/* Company Image Header */}
                    {event.companyImage && (
                      <div className="relative -m-6 mb-6">
                        <div 
                          className="h-48 bg-cover bg-center relative overflow-hidden"
                          style={{
                            backgroundImage: `url(${event.companyImage})`,
                            transform: `translateY(${isActive ? 0 : 20}px) scale(${isActive ? 1 : 0.95})`,
                            opacity: isActive ? 1 : 0.7,
                            transition: 'all 0.8s ease-out'
                          }}
                        >
                          {/* Overlay for text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          
                          {/* Year Badge Overlay */}
                          <div className="absolute bottom-4 left-4">
                            <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${event.color} text-white font-bold text-lg shadow-lg`}>
                              {event.year}
                            </div>
                          </div>
                          
                          {/* Parallax Effect Elements */}
                          <div 
                            className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                            style={{
                              transform: `translateY(${scrollProgress * -30}px) rotate(${scrollProgress * 180}deg)`,
                              opacity: 0.6
                            }}
                          />
                        </div>
                      </div>
                    )}
                    
                    {/* Year Badge for entries without images */}
                    {!event.companyImage && (
                      <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${event.color} text-white font-bold text-lg mb-4`}>
                        {event.year}
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Achievements with Clean Icons */}
                    <div className="space-y-3">
                      {event.achievements.map((achievement, achievementIndex) => {
                        const getIcon = () => {
                          if (achievementIndex === 0) return Target;
                          if (achievementIndex === 1) return Zap;
                          return Settings;
                        };
                        
                        const IconComponent = getIcon();
                        const isTechStack = achievementIndex === 2;
                        
                        return (
                          <div
                            key={achievementIndex}
                            className="flex items-start space-x-3 transform transition-all duration-500"
                            style={{
                              transform: `translateX(${isActive ? 0 : (index % 2 === 0 ? -20 : 20)}px)`,
                              opacity: isActive ? 1 : 0,
                              transitionDelay: `${achievementIndex * 200}ms`
                            }}
                          >
                            <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center mt-0.5 shadow-sm`}>
                              <IconComponent className="w-3 h-3 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className={`${
                                isTechStack 
                                  ? 'text-xs text-muted-foreground leading-relaxed' 
                                  : 'text-sm text-foreground leading-relaxed'
                              }`}>
                                {isTechStack && (
                                  <span className="inline-flex items-center px-2 py-1 bg-primary/15 text-primary text-xs font-medium rounded mr-2 mb-1">
                                    <Settings className="w-3 h-3 mr-1" />
                                    Tech Stack
                                  </span>
                                )}
                                {achievement}
                              </p>
                            </div>
                          </div>
                        );
                      })}
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