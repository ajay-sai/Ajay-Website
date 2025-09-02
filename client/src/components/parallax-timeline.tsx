import { useEffect, useRef, useState } from "react";
import { Calendar, TrendingUp, Award, Code, Target, Zap, Settings, GraduationCap, BookOpen } from "lucide-react";
import harleyDavidsonImage1 from "@assets/image_1756765291859.png";
import harleyDavidsonImage2 from "@assets/image_1756766255322.png";
import harleyDavidsonLogo from "@assets/image_1756766997358.png";
// Workplace images for Home Depot
const homeDepotImage1 = "/attached_assets/20250515_110951(0) (1)_1756775594777.jpg";
const homeDepotImage2 = "/attached_assets/IMG_2329-EDIT_1756777352943.jpg"; // Updated image
const homeDepotImage3 = "/attached_assets/20241023_132525_1756776021189.jpg"; // Moved from Senior Data Scientist

// Senior Data Scientist workplace images (swapped order of first two, removed third)
const seniorDataScientistImage1 = "/attached_assets/20241025_152323_1756776021189.jpg"; // Was image 2
const seniorDataScientistImage2 = "/attached_assets/20231215_095639_1756775804398.jpg"; // Was image 1
const seniorDataScientistImage3 = "/attached_assets/20240508_203952_1756776021190.jpg"; // Was image 4

// Senior Data Analyst workplace images (added third image)
const seniorDataAnalystImage1 = "/attached_assets/IMG-20220807-WA0018_1756776767995.jpg";
const seniorDataAnalystImage2 = "/attached_assets/20220805_214208_1756776778383.jpg";
const seniorDataAnalystImage3 = "/attached_assets/IMG_1219_1756777552748.jpg"; // New image

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
    workplaceImages: [homeDepotImage1, homeDepotImage2, homeDepotImage3],
    achievements: [
      "Designed scalable <strong class='text-blue-400'>generative AI systems</strong> for text summarization, Q&A bots, and contract parsing",
      "<strong class='text-blue-400'>55% reduction</strong> in analytics turnaround time through custom prompt optimization frameworks",
      "Technologies: <strong class='text-blue-400'>GPT-4, BERT, Gemini, Longformer, LoRA/QLoRA</strong>, HuggingFace, TFX, Vertex AI, MLflow"
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
    workplaceImages: [
      seniorDataScientistImage1,
      seniorDataScientistImage2,
      seniorDataScientistImage3
    ],
    achievements: [
      "Architected <strong class='text-blue-400'>dynamic image generation pipeline</strong> transforming Home Depot's guided search",
      "<strong class='text-blue-400'>87% accuracy</strong> in house renovation prediction targeting <strong class='text-blue-400'>$20M</strong> marketing budget savings",
      "Technologies: <strong class='text-blue-400'>Google Image Gen-3, Stable Diffusion, Gemini-1.5 Pro</strong>, ResNet, Vision Transformers, BigQuery"
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
    workplaceImages: [
      seniorDataAnalystImage1,
      seniorDataAnalystImage2,
      seniorDataAnalystImage3
    ],
    achievements: [
      "Analyzed <strong class='text-blue-400'>customer behavior</strong> across platforms providing insights to <strong class='text-blue-400'>300+ associates</strong>",
      "Led <strong class='text-blue-400'>Voice of Associates initiative</strong> reducing onboarding time by <strong class='text-blue-400'>20%</strong> and satisfaction by <strong class='text-blue-400'>10%</strong>",
      "Technologies: <strong class='text-blue-400'>Adobe Analytics, Tableau, Google Data Studio</strong>, BigQuery, Python, Liftoff platform"
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
      "Built <strong class='text-blue-400'>optimized data models and ETL pipelines</strong> reducing data processing time by <strong class='text-blue-400'>80%</strong>",
      "Decreased open purchase orders by <strong class='text-blue-400'>55%</strong> and inventory mismatches by <strong class='text-blue-400'>30%</strong>",
      "Technologies: <strong class='text-blue-400'>Tableau, Power BI, SAP Analytics Cloud</strong>, SQL, Alteryx, FLEX PLM, EDI transactions"
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
      "Predicted <strong class='text-blue-400'>market regime of Russell 1000 companies</strong> for investment evaluation",
      "Achieved <strong class='text-blue-400'>78% accuracy</strong> in ML models and <strong class='text-blue-400'>5% improvement</strong> in client investment confidence",
      "Technologies: <strong class='text-blue-400'>Python, R, SQL Server, Logistic Regression</strong>, Random Forest, XGBoost, keras, sklearn"
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
      "Managed <strong class='text-blue-400'>Google Ads campaign</strong> achieving <strong class='text-blue-400'>200% website traffic increase</strong> (<strong class='text-blue-400'>92% new users/week</strong>)",
      "Generated <strong class='text-blue-400'>$3100 revenue</strong> with <strong class='text-blue-400'>113 product sales</strong> from <strong class='text-blue-400'>$300 budget</strong>",
      "Technologies: <strong class='text-blue-400'>Google Ads, 110 ad copies, 6,000 keywords</strong>, web analytics, cost-per-click optimization"
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
      "Assessed and maintained student records for <strong class='text-blue-400'>4000+ students</strong> to improve academic standing",
      "Led team of <strong class='text-blue-400'>10 undergraduate students</strong> improving satisfaction rate by <strong class='text-blue-400'>10%</strong>",
      "Technologies: <strong class='text-blue-400'>SQL data extraction, academic advisory programs</strong>, student performance analytics"
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
      "Created <strong class='text-blue-400'>visually impactful interactive dashboards</strong> reporting key KPIs for multiple clients",
      "Achieved <strong class='text-blue-400'>$1M cost reduction</strong> through analytical inventory targeting and optimization",
      "Technologies: <strong class='text-blue-400'>Tableau, Excel, Microsoft SQL Server</strong>, Python, Docker, IBM OMS 9.5, WMS 9.5"
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
  
  // State for manual image navigation
  const [manualImageIndices, setManualImageIndices] = useState<{[key: number]: number}>({});
  
  // Function to handle manual image navigation
  const handleImageClick = (eventIndex: number, imageIndex: number) => {
    setManualImageIndices(prev => ({
      ...prev,
      [eventIndex]: imageIndex
    }));
  };



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
                  <div className="w-full lg:flex-1 lg:max-w-2xl">
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
                      

                      
                      <h3 className="text-2xl font-bold mb-3 transition-all duration-700">
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
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed transition-all duration-500">
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
                                    className="transition-all duration-500"
                                    dangerouslySetInnerHTML={{
                                      __html: isTechStack ? achievement.replace('Technologies: ', '') : achievement
                                    }}
                                  />
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
                    {/* Debug: {JSON.stringify(event.workplaceImages)} */}
                    {event.workplaceImages && event.workplaceImages.length > 0 && 
                     event.title !== "Data Scientist" && 
                     event.title !== "Marketing Analyst" ? (
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
                            // Use manual selection if available, otherwise use scroll-based selection
                            const manualIndex = manualImageIndices[index];
                            const imageCount = event.workplaceImages?.length || 1;
                            
                            let currentImageIndex;
                            if (manualIndex !== undefined) {
                              currentImageIndex = manualIndex;
                            } else {
                              // Improved scroll-based cycling with better timing
                              const scrollMultiplier = imageCount > 1 ? imageCount * 2 : 1;
                              const baseProgress = scrollProgress * 20; // Increased sensitivity
                              const offsetProgress = baseProgress + (index * 3); // Different timing per event
                              const cycleProgress = offsetProgress % (imageCount * 2); // Slower cycling
                              currentImageIndex = Math.floor(cycleProgress / 2) % imageCount;
                            }
                            
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
                                  className="w-full h-full object-cover object-center"
                                />
                                
                                {/* Image overlay with parallax effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                
                                {/* Image counter */}
                                <div className="absolute bottom-4 right-4 bg-black/80 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                                  {currentImageIndex + 1} of {event.workplaceImages?.length || 0}
                                </div>
                                
                                {/* Clickable Progress indicator for current image */}
                                {isCurrentImage && (
                                  <div className="absolute bottom-4 left-4">
                                    <div className="flex space-x-1">
                                      {event.workplaceImages?.slice(0, 5).map((_, dotIndex) => (
                                        <button
                                          key={dotIndex}
                                          onClick={() => handleImageClick(index, dotIndex)}
                                          className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer ${
                                            dotIndex === currentImageIndex 
                                              ? 'bg-white shadow-lg' 
                                              : 'bg-white/40 hover:bg-white/60'
                                          }`}
                                          aria-label={`View image ${dotIndex + 1} of ${event.workplaceImages?.length}`}
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