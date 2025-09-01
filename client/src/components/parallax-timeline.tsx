import { useEffect, useRef, useState } from "react";
import { Calendar, TrendingUp, Award, Code, Target, Zap, Settings } from "lucide-react";
import harleyDavidsonImage1 from "@assets/image_1756765291859.png";
import harleyDavidsonImage2 from "@assets/image_1756766255322.png";
import harleyDavidsonLogo from "@assets/image_1756766997358.png";

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
  workplaceImages?: string[];
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
    workplaceImages: [harleyDavidsonImage1, harleyDavidsonImage2],
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
    companyImage: harleyDavidsonLogo,
    workplaceImages: [harleyDavidsonImage1, harleyDavidsonImage2],
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover the evolution of expertise through immersive storytelling and dynamic visual experiences
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto animate-pulse"></div>
        </div>

        {/* Enhanced Timeline Container */}
        <div className="relative">
          {/* Central Neural Network Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-30" />
          
          {/* Quantum Field Lines */}
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={i}
              className={`absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent opacity-20`}
              style={{
                left: `calc(50% + ${(i - 1) * 2}px)`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
          
          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            const isActive = activeEvent >= index;
            const itemProgress = Math.max(0, Math.min(1, (scrollProgress - (index / timelineEvents.length)) * timelineEvents.length));
            const isEven = index % 2 === 0;
            const slideOffset = isActive ? 0 : (isEven ? -100 : 100);
            
            return (
              <div
                key={event.year}
                className={`relative mb-32 transition-all duration-1000 ease-out`}
                style={{
                  transform: `translateY(${isActive ? 0 : 80}px)`,
                  opacity: isActive ? 1 : 0.2
                }}
              >
                {/* Floating Timeline Node with Quantum Ring */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-20 z-30">
                  <div className={`relative w-20 h-20 transition-all duration-700 ${
                    isActive ? 'scale-110' : 'scale-100'
                  }`}>
                    {/* Quantum Ring Animation */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${event.color} animate-pulse opacity-20`} />
                    <div className={`absolute inset-2 rounded-full bg-gradient-to-r ${event.color} opacity-40 animate-spin`} style={{animationDuration: '8s'}} />
                    
                    {/* Central Node */}
                    <div className={`absolute inset-3 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center shadow-2xl border-2 border-background`}>
                      <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                    
                    {/* Neural Connections */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      {Array.from({ length: 6 }, (_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-8 bg-gradient-to-t from-primary/20 to-transparent"
                          style={{
                            transform: `rotate(${i * 60}deg) translateY(-20px)`,
                            opacity: isActive ? 0.6 : 0.2,
                            transition: 'opacity 0.5s ease'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Immersive Full-Width Layout */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  isEven ? 'lg:grid-flow-row' : 'lg:grid-flow-row-dense'
                }`}>
                  
                  {/* Visual Gallery Section */}
                  <div 
                    className={`${isEven ? 'lg:order-1' : 'lg:order-2'} relative`}
                    style={{
                      transform: `translateX(${slideOffset}px) scale(${isActive ? 1 : 0.9})`,
                      opacity: isActive ? 1 : 0.3,
                      transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    {/* Primary Company Visual */}
                    {event.companyImage && (
                      <div className="relative mb-6 group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                        <div 
                          className="relative h-80 rounded-3xl overflow-hidden shadow-2xl border border-border/50 group-hover:scale-105 transition-all duration-700"
                          style={{
                            backgroundImage: `url(${event.companyImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        >
                          {/* Dynamic Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />
                          
                          {/* Floating Year Badge */}
                          <div className="absolute top-6 left-6">
                            <div className={`px-6 py-3 rounded-2xl bg-gradient-to-r ${event.color} text-white font-bold text-xl shadow-2xl backdrop-blur-sm border border-white/20`}>
                              {event.year}
                            </div>
                          </div>
                          
                          {/* Parallax Orbs */}
                          <div 
                            className="absolute top-6 right-6 w-20 h-20 rounded-full bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm border border-white/30"
                            style={{
                              transform: `translateY(${scrollProgress * -40}px) rotate(${scrollProgress * 360}deg)`,
                              transition: 'transform 0.1s ease-out'
                            }}
                          />
                          <div 
                            className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm"
                            style={{
                              transform: `translateY(${scrollProgress * 20}px) rotate(${scrollProgress * -180}deg)`,
                              transition: 'transform 0.1s ease-out'
                            }}
                          />
                        </div>
                      </div>
                    )}
                    
                    {/* Workplace Gallery Masonry */}
                    {event.workplaceImages && (
                      <div className="grid grid-cols-2 gap-4">
                        {event.workplaceImages.slice(0, 4).map((image, imageIndex) => (
                          <div
                            key={imageIndex}
                            className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                              imageIndex === 0 ? 'col-span-2 h-32' : 'h-24'
                            }`}
                            style={{
                              transform: `translateY(${isActive ? 0 : 20}px)`,
                              opacity: isActive ? 1 : 0,
                              transitionDelay: `${imageIndex * 150}ms`
                            }}
                          >
                            <img 
                              src={image} 
                              alt={`${event.title} workspace ${imageIndex + 1}`}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-full">
                              {imageIndex + 1}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content Narrative Section */}
                  <div 
                    className={`${isEven ? 'lg:order-2' : 'lg:order-1'} relative`}
                    style={{
                      transform: `translateX(${-slideOffset}px) scale(${isActive ? 1 : 0.9})`,
                      opacity: isActive ? 1 : 0.3,
                      transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <div className="quantum-card p-8 rounded-3xl shadow-2xl border border-border/50 backdrop-blur-sm relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className={`w-full h-full bg-gradient-to-br ${event.color} opacity-10`} />
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Role Header */}
                        <div className="mb-6">
                          <h3 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                            {event.title}
                          </h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {event.description}
                          </p>
                        </div>

                        {/* Impact Highlights */}
                        <div className="space-y-4 mb-6">
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
                                className="flex items-start space-x-4 group"
                                style={{
                                  transform: `translateX(${isActive ? 0 : (isEven ? -30 : 30)}px)`,
                                  opacity: isActive ? 1 : 0,
                                  transition: 'all 0.6s ease-out',
                                  transitionDelay: `${achievementIndex * 200}ms`
                                }}
                              >
                                <div className={`flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-r ${event.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                  <IconComponent className="w-4 h-4 text-white" />
                                </div>
                                <div className="flex-1">
                                  <p className={`${
                                    isTechStack 
                                      ? 'text-sm text-muted-foreground leading-relaxed' 
                                      : 'text-base text-foreground leading-relaxed font-medium'
                                  }`}>
                                    {isTechStack && (
                                      <span className="inline-flex items-center px-3 py-1 bg-primary/15 text-primary text-xs font-semibold rounded-full mr-3 mb-2">
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

                        {/* Progress Visualization */}
                        <div className="relative">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-muted-foreground">Career Impact</span>
                            <span className="text-sm font-bold text-primary">{Math.round(itemProgress * 100)}%</span>
                          </div>
                          <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${event.color} transition-all duration-1500 ease-out`}
                              style={{ 
                                width: `${itemProgress * 100}%`,
                                boxShadow: `0 0 10px rgba(59, 130, 246, 0.5)`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Progress Indicator */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex items-center space-x-4 bg-black/30 backdrop-blur-2xl rounded-2xl px-6 py-4 border border-white/10 shadow-2xl">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-white/80 text-sm font-medium">Journey Progress</span>
            </div>
            
            <div className="relative w-32 h-3 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary transition-all duration-500 rounded-full"
                style={{ 
                  width: `${scrollProgress * 100}%`,
                  boxShadow: `0 0 20px rgba(59, 130, 246, 0.5)`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/20 rounded-full" />
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-white/90 text-sm font-bold">{Math.round(scrollProgress * 100)}%</span>
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Elements */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 space-y-4">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer ${
                activeEvent >= index 
                  ? `bg-gradient-to-r ${event.color} shadow-lg scale-125` 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              style={{
                boxShadow: activeEvent >= index ? `0 0 15px rgba(59, 130, 246, 0.6)` : 'none'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}