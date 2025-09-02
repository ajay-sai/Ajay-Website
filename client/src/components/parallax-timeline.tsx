import { useEffect, useRef, useState } from "react";
import { Calendar, TrendingUp, Award, Code, Target, Zap, Settings, GraduationCap, BookOpen } from "lucide-react";
import harleyDavidsonImage1 from "@assets/image_1756765291859.png";
import harleyDavidsonImage2 from "@assets/image_1756766255322.png";
import harleyDavidsonLogo from "@assets/image_1756766997358.png";

interface TimelineEvent {
  year: string;
  sortOrder: number;
  title: string;
  description: string;
  dateRange: string;
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
    sortOrder: 1,
    title: "Gen AI/ML Engineer",
    description: "The Home Depot Management Company",
    dateRange: "January 2025 - Present",
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
    sortOrder: 2,
    title: "Senior Data Scientist - Decision Analytics",
    description: "The Home Depot Management Company",
    dateRange: "June 2023 - January 2025",
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
    sortOrder: 3,
    title: "Senior Data Analyst",
    description: "The Home Depot Management Company",
    dateRange: "March 2022 - June 2023",
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
    sortOrder: 4,
    title: "Data Analyst and Engineer",
    description: "Harley Davidson Motor Company",
    dateRange: "February 2020 - March 2022",
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
    year: "2019",
    sortOrder: 5,
    title: "Data Scientist",
    description: "Principal Financial Group",
    dateRange: "August 2019 - December 2019",
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
    year: "2019",
    sortOrder: 6,
    title: "Marketing Analyst",
    description: "Anahata Art and Design Pvt",
    dateRange: "May 2019 - December 2019",
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
    year: "2019",
    sortOrder: 7,
    title: "Graduate Assistant",
    description: "University of Maryland",
    dateRange: "May 2019 - December 2019",
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
    year: "2019",
    sortOrder: 8,
    title: "Master of Science in Business Analytics",
    description: "University of Maryland, College Park - Robert H Smith School of Business",
    dateRange: "Graduated May 2019",
    icon: GraduationCap,
    color: "from-emerald-500 to-teal-500",
    companyLogo: "🎓",
    companyColor: "#dc2626",
    achievements: [
      "Specialized in Big Data and Artificial Intelligence with comprehensive analytics training",
      "Core coursework: Data Mining, Predictive Analytics, Database Management, Operations Analytics",
      "Technologies: Python, Data Models & Decision Making, Google Analytics, Price Optimization, Revenue Management"
    ]
  },
  {
    year: "2017",
    sortOrder: 9,
    title: "Data Analyst",
    description: "Bridge Solutions",
    dateRange: "May 2017 - May 2018",
    icon: Calendar,
    color: "from-teal-500 to-cyan-500",
    companyLogo: "🌉",
    companyColor: "#00796b",
    achievements: [
      "Created visually impactful interactive dashboards reporting key KPIs for multiple clients",
      "Achieved $1M cost reduction through analytical inventory targeting and optimization",
      "Technologies: Tableau, Excel, Microsoft SQL Server, Python, Docker, IBM OMS 9.5, WMS 9.5"
    ]
  },
  {
    year: "2017",
    sortOrder: 10,
    title: "Bachelor of Technology in Computer Science",
    description: "SRM University, Kattankulathur - Computer Science Engineering",
    dateRange: "Graduated May 2017",
    icon: BookOpen,
    color: "from-amber-500 to-orange-500",
    companyLogo: "🎓",
    companyColor: "#1976d2",
    achievements: [
      "Comprehensive computer science foundation with focus on systems and AI",
      "Core studies: Data Structures, Algorithms, Database Systems, AI & Expert Systems, Data Mining",
      "Technologies: Web Technology, Software Engineering, Operating Systems, Network Security, Linux Internals"
    ]
  },
  {
    year: "2015",
    sortOrder: 11,
    title: "High School Education",
    description: "St Joseph's Public School & Sri Chaitanya Junior Kalasa",
    dateRange: "Until 10th: St Joseph's | 11th-12th: Sri Chaitanya",
    icon: BookOpen,
    color: "from-gray-500 to-slate-500",
    companyLogo: "🏫",
    companyColor: "#6b7280",
    achievements: [
      "Completed foundational education with focus on science and mathematics",
      "Strong academic performance leading to engineering admission",
      "Technologies: Mathematics, Physics, Chemistry, Computer Science fundamentals"
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
            Professional & Educational Journey
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
                key={event.sortOrder}
                className={`relative mb-16 transition-all duration-1000`}
                style={{
                  transform: `translateY(${isActive ? 0 : 50}px)`,
                  opacity: isActive ? 1 : 0.3
                }}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 z-20">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center border-4 border-background transition-all duration-500 ${
                    isActive ? 'scale-110 shadow-lg shadow-primary/30' : 'scale-100'
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Container for both Content Card and Workplace Gallery */}
                <div className={`flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } max-w-6xl mx-auto px-4`}>
                  
                  {/* Content Card */}
                  <div className="w-full lg:flex-1 lg:max-w-md">
                    <div className="quantum-card p-6 rounded-xl shadow-lg overflow-hidden">
                      {/* Company Logo Header */}
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
                      

                      
                      <h3 className={`text-2xl font-bold mb-3 transition-all duration-700 ${isActive ? 'animate-highlight-title' : ''}`}
                          style={{
                            fontWeight: isActive ? '800' : '700',
                            color: isActive ? 'rgb(59, 130, 246)' : 'inherit'
                          }}>
                        {event.title}
                      </h3>
                      
                      {/* Year and Date Range Pills */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${event.color} text-white shadow-sm`}>
                          {event.year}
                        </span>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${isActive ? 'border-primary/50 bg-primary/10 text-primary' : 'border-border bg-secondary/50 text-muted-foreground'} transition-all duration-300`}>
                          📅 {event.dateRange}
                        </span>
                      </div>
                      
                      <p className={`text-muted-foreground mb-4 leading-relaxed transition-all duration-500 ${isActive ? 'animate-highlight-text' : ''}`}
                         style={{
                           fontWeight: isActive ? '500' : '400',
                           opacity: isActive ? '1' : '0.8'
                         }}>
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
                                  <span 
                                    className={`transition-all duration-500 ${isActive ? 'animate-highlight' : ''}`}
                                    style={{
                                      animationDelay: `${achievementIndex * 300}ms`,
                                      fontWeight: isActive ? '600' : 'inherit'
                                    }}
                                  >
                                    {isTechStack ? achievement.replace('Technologies: ', '') : achievement}
                                  </span>
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

                  {/* Workplace Gallery - Separate Container */}
                  <div className="w-full lg:flex-1 lg:max-w-sm">
                    {event.workplaceImages ? (
                      <div className="bg-background/95 backdrop-blur-sm border border-border rounded-xl overflow-hidden shadow-xl">
                        <div className="p-4 pb-2">
                          <h4 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center">
                            <Target className="w-4 h-4 mr-2" />
                            Workplace Gallery
                          </h4>
                        </div>
                        
                        {/* Main Image Display */}
                        <div className="relative h-64 overflow-hidden">
                          {event.workplaceImages?.slice(0, 5).map((image, imageIndex) => {
                            // Calculate which image should be visible based on scroll progress
                            const imageProgress = (scrollProgress * 10 + index * 2) % (event.workplaceImages?.length || 1);
                            const currentImageIndex = Math.floor(imageProgress);
                            const isCurrentImage = imageIndex === currentImageIndex;
                            
                            return (
                              <div
                                key={imageIndex}
                                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                                  isCurrentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                                }`}
                                style={{
                                  transform: `translateX(${isCurrentImage ? 0 : (imageIndex < currentImageIndex ? -100 : 100)}px) scale(${isCurrentImage ? 1 : 0.95})`,
                                  zIndex: isCurrentImage ? 10 : 1
                                }}
                              >
                                <img 
                                  src={image} 
                                  alt={`${event.title} workplace ${imageIndex + 1}`}
                                  className="w-full h-full object-cover"
                                />
                                
                                {/* Image overlay with parallax effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                
                                {/* Image counter */}
                                <div className="absolute bottom-4 right-4 bg-black/80 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                                  {imageIndex + 1} of {event.workplaceImages?.length || 0}
                                </div>
                                
                                {/* Progress indicator for current image */}
                                {isCurrentImage && (
                                  <div className="absolute bottom-4 left-4">
                                    <div className="flex space-x-1">
                                      {event.workplaceImages?.slice(0, 5).map((_, dotIndex) => (
                                        <div
                                          key={dotIndex}
                                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            dotIndex === currentImageIndex 
                                              ? 'bg-white shadow-lg' 
                                              : 'bg-white/40'
                                          }`}
                                        />
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      /* Placeholder Gallery */
                      <div className="bg-background/95 backdrop-blur-sm border border-border rounded-xl overflow-hidden shadow-xl opacity-60">
                        <div className="p-4 pb-2">
                          <h4 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center">
                            <Target className="w-4 h-4 mr-2" />
                            Workplace Gallery
                          </h4>
                        </div>
                        
                        <div className="relative h-64 bg-gradient-to-br from-secondary/20 to-muted/30 flex items-center justify-center">
                          <div className="text-center space-y-2">
                            <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto">
                              <Target className="w-8 h-8 text-muted-foreground/50" />
                            </div>
                            <p className="text-sm text-muted-foreground/70">
                              Workplace photos coming soon
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
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