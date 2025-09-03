import { useEffect, useRef, useState } from "react";
import { Calendar, TrendingUp, Award, Code, Target, Zap, Settings, GraduationCap, BookOpen, ChevronDown } from "lucide-react";
import harleyDavidsonImage1 from "@assets/image_1756765291859.png";
import harleyDavidsonImage2 from "@assets/image_1756766255322.png";
import harleyDavidsonLogo from "@assets/image_1756790102894.png";
import homeDepotLogo from "@assets/images_1756790566987.png";
import homeDepotMainLogo from "@assets/image_1756790646771.png";
import principalLogo from "@assets/image_1756790768889.png";
import universityOfMarylandLogo from "@assets/image_1756791087938.png";
import bridgeSolutionsLogo from "@assets/image_1756791219923.png";
import srmUniversityLogo from "@assets/image_1756791288961.png";
import stJosephsLogo from "@assets/image_1756791337929.png";
import stonedSantaLogo from "@assets/image_1756792379931.png";
import homeDepotStoreLogo from "@assets/image_1756791876151.png";
// Workplace images for Home Depot
const homeDepotImage1 = "/attached_assets/20250515_110951(0) (1)_1756775594777.jpg";
const homeDepotImage2 = "/attached_assets/IMG_2329-EDIT_1756777352943.jpg"; // Updated image
const homeDepotImage3 = "/attached_assets/20241023_132525_1756776021189.jpg"; // Moved from Senior Data Scientist

// Data Scientist images
const dataScientistImage1 = "/attached_assets/20240427_120651_1756788379977.jpg";
const dataScientistImage2 = "/attached_assets/IMG_20180811_194748_1756789697281.jpg";
const dataScientistImage3 = "/attached_assets/IMG-20191110-WA0025_1756789697282.jpg";
const dataScientistImage4 = "/attached_assets/Screenshot_20180831-101808__01_1756789720602.jpg";

// Marketing Analyst images
const marketingAnalystImage1 = "/attached_assets/20210521_131718_1756788953660.jpg";
const marketingAnalystImage2 = "/attached_assets/IMG_20190509_180536_1756789644236.jpg";
const marketingAnalystImage3 = "/attached_assets/IMG-20190908-WA0038_1756789644237.jpg";

// Bachelor's degree college images
const bachelorImage1 = "/attached_assets/IMG_20161106_212705_1756789364617.jpg";
const bachelorImage2 = "/attached_assets/IMG_20161030_232457_1756789364618.jpg";
const bachelorImage3 = "/attached_assets/Screenshot_20181124-163448__01_1756789364618.jpg";

// High school education image
const highSchoolImage1 = "/attached_assets/IMG_20160620_123802_1756789570118.jpg";

// Gen AI/ML Engineer workplace image
const genAIEngineerImage1 = "/attached_assets/IMG_2331_1756789866665.JPG";

// Senior Data Scientist workplace images (swapped order of first two, removed third)
const seniorDataScientistImage1 = "/attached_assets/20241025_152323_1756776021189.jpg"; // Was image 2
const seniorDataScientistImage2 = "/attached_assets/20231215_095639_1756775804398.jpg"; // Was image 1
const seniorDataScientistImage3 = "/attached_assets/20240508_203952_1756776021190.jpg"; // Was image 4

// Senior Data Analyst workplace images (added third image)
const seniorDataAnalystImage1 = "/attached_assets/IMG-20220807-WA0018_1756776767995.jpg";
const seniorDataAnalystImage2 = "/attached_assets/20220805_214208_1756776778383.jpg";
const seniorDataAnalystImage3 = "/attached_assets/IMG_1219_1756777552748.jpg"; // New image

// Graduate Assistant workplace images
const graduateAssistantImage1 = "/attached_assets/20240424_161717_1756780061878.jpg";
const graduateAssistantImage2 = "/attached_assets/Screenshot_20190129-080233_1756780061880.jpg";
const graduateAssistantImage3 = "/attached_assets/Generated Image September 01, 2025 - 10_25PM (1)_1756780361828.jpeg";

// Master's degree images
const mastersImage1 = "/attached_assets/IMG-20191122-WA0013_1756780506778.jpg";
const mastersImage2 = "/attached_assets/IMG-20181105-WA0008_1756780506780.jpg";
const mastersImage3 = "/attached_assets/IMG-20200111-WA0007_1756780521102.jpg";
const mastersImage4 = "/attached_assets/20210521_213843_1756780555219.jpg";

// Bridge Solutions Data Analyst images
const bridgeSolutionsImage1 = "/attached_assets/IMG_20170820_163622_1756780825081.jpg";
const bridgeSolutionsImage2 = "/attached_assets/IMG-20170814-WA0017_1756780825082.jpg";
const bridgeSolutionsImage3 = "/attached_assets/IMG-20170814-WA0013_1756780825082.jpg";
const bridgeSolutionsImage4 = "/attached_assets/IMG-20170811-WA0004_1756789814799.jpg";

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
    workplaceImages: [homeDepotImage1, homeDepotImage2, homeDepotImage3, genAIEngineerImage1],
    achievements: [
      "Designed scalable generative AI systems for text summarization, Q&A bots, and contract parsing",
      "<strong class='text-blue-400'>55% reduction</strong> in analytics turnaround time through custom prompt optimization frameworks",
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
    workplaceImages: [
      seniorDataScientistImage1,
      seniorDataScientistImage2,
      seniorDataScientistImage3
    ],
    achievements: [
      "Architected dynamic image generation pipeline transforming Home Depot's guided search",
      "<strong class='text-blue-400'>87% accuracy</strong> in house renovation prediction targeting <strong class='text-blue-400'>$20M</strong> marketing budget savings",
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
    workplaceImages: [
      seniorDataAnalystImage1,
      seniorDataAnalystImage2,
      seniorDataAnalystImage3
    ],
    achievements: [
      "Analyzed customer behavior across platforms providing insights to <strong class='text-blue-400'>300+ associates</strong>",
      "Led Voice of Associates initiative reducing onboarding time by <strong class='text-blue-400'>20%</strong> and satisfaction by <strong class='text-blue-400'>10%</strong>",
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

    workplaceImages: [harleyDavidsonImage1, harleyDavidsonImage2],
    achievements: [
      "Built optimized data models and ETL pipelines reducing data processing time by <strong class='text-blue-400'>80%</strong>",
      "Decreased open purchase orders by <strong class='text-blue-400'>55%</strong> and inventory mismatches by <strong class='text-blue-400'>30%</strong>",
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
    workplaceImages: [dataScientistImage1, dataScientistImage2, dataScientistImage3, dataScientistImage4],
    achievements: [
      "Predicted market regime of Russell 1000 companies for investment evaluation",
      "Achieved <strong class='text-blue-400'>78% accuracy</strong> in ML models and <strong class='text-blue-400'>5% improvement</strong> in client investment confidence",
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
    workplaceImages: [marketingAnalystImage1, marketingAnalystImage2, marketingAnalystImage3],
    achievements: [
      "Managed Google Ads campaign achieving <strong class='text-blue-400'>200% website traffic increase</strong>",
      "Generated <strong class='text-blue-400'>$3100 revenue</strong> with 113 product sales from $300 budget",
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
    workplaceImages: [graduateAssistantImage1, graduateAssistantImage2, graduateAssistantImage3],
    achievements: [
      "Assessed and maintained student records for <strong class='text-blue-400'>4000+ students</strong> to improve academic standing",
      "Led team of 10 undergraduate students improving satisfaction rate by <strong class='text-blue-400'>10%</strong>",
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
    workplaceImages: [mastersImage1, mastersImage2, mastersImage3, mastersImage4],
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
    workplaceImages: [bridgeSolutionsImage1, bridgeSolutionsImage2, bridgeSolutionsImage3, bridgeSolutionsImage4],
    achievements: [
      "Created visually impactful interactive dashboards reporting key KPIs for multiple clients",
      "Achieved <strong class='text-blue-400'>$1M cost reduction</strong> through analytical inventory targeting and optimization",
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
    workplaceImages: [bachelorImage1, bachelorImage2, bachelorImage3],
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
    workplaceImages: [highSchoolImage1],
    achievements: [
      "Completed foundational education with focus on science and mathematics",
      "Strong academic performance leading to engineering admission",
      "Technologies: Mathematics, Physics, Chemistry, Computer Science fundamentals"
    ]
  }
];

// Mobile detection utility
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         (window.innerWidth <= 768);
};

export default function ParallaxTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeEvent, setActiveEvent] = useState(0);
  const [mobile, setMobile] = useState(false);
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  
  // State for manual image navigation and touch handling
  const [manualImageIndices, setManualImageIndices] = useState<{[key: number]: number}>({});
  const [touchStart, setTouchStart] = useState<{x: number, y: number} | null>(null);
  const [touchEnd, setTouchEnd] = useState<{x: number, y: number} | null>(null);
  
  // Auto-scroll state
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [userScrolledManually, setUserScrolledManually] = useState(false);
  const autoScrollRef = useRef<number>();
  const lastManualScrollTime = useRef<number>(0);
  const hasStartedAutoScroll = useRef<boolean>(false);

  useEffect(() => {
    setMobile(isMobile());
  }, []);
  
  // Function to handle manual image navigation
  const handleImageClick = (eventIndex: number, imageIndex: number) => {
    setManualImageIndices(prev => ({
      ...prev,
      [eventIndex]: imageIndex
    }));
  };

  // Touch handlers for swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const handleTouchEnd = (eventIndex: number, imageCount: number) => {
    if (!touchStart || !touchEnd) return;
    
    const distanceX = touchStart.x - touchEnd.x;
    const distanceY = touchStart.y - touchEnd.y;
    const isLeftSwipe = distanceX > 50;
    const isRightSwipe = distanceX < -50;
    const isVerticalSwipe = Math.abs(distanceY) > Math.abs(distanceX);

    // Only handle horizontal swipes, ignore vertical scrolling
    if (isVerticalSwipe) return;

    const currentIndex = manualImageIndices[eventIndex] || 0;
    
    if (isLeftSwipe && currentIndex < imageCount - 1) {
      handleImageClick(eventIndex, currentIndex + 1);
    } else if (isRightSwipe && currentIndex > 0) {
      handleImageClick(eventIndex, currentIndex - 1);
    } else if (isLeftSwipe && currentIndex === imageCount - 1) {
      // Loop to first image
      handleImageClick(eventIndex, 0);
    } else if (isRightSwipe && currentIndex === 0) {
      // Loop to last image
      handleImageClick(eventIndex, imageCount - 1);
    }
  };



  // Button-triggered auto-scroll functionality with smooth scrolling
  const startAutoScroll = () => {
    if (!containerRef.current || isAutoScrolling) return;
    
    setIsAutoScrolling(true);
    setUserScrolledManually(false);
    
    const rect = containerRef.current.getBoundingClientRect();
    const startScrollY = window.scrollY;
    
    // Calculate proper target - scroll to the end of the timeline section
    const timelineTop = rect.top + startScrollY; // Absolute position of timeline start
    const timelineHeight = rect.height;
    const targetScrollY = timelineTop + timelineHeight - window.innerHeight + 100; // End with some padding
    
    console.log('Auto-scroll starting:', {
      startScrollY,
      timelineTop,
      timelineHeight,
      targetScrollY,
      rectTop: rect.top
    });
    
    const duration = 30000; // 30 seconds for very slow, relaxed journey
    const startTime = performance.now();
    
    const smoothScroll = (currentTime: number) => {
      if (userScrolledManually) {
        console.log('Auto-scroll stopped by user interaction');
        setIsAutoScrolling(false);
        return;
      }
      
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Linear progression for consistent scroll speed
      const currentScrollY = startScrollY + (targetScrollY - startScrollY) * progress;
      
      console.log('Auto-scrolling:', { progress: (progress * 100).toFixed(1) + '%', currentScrollY });
      
      // Use smooth scrollTo for better performance
      window.scrollTo({
        top: currentScrollY,
        behavior: 'auto' // Use 'auto' to avoid conflicts with browser smooth scrolling
      });
      
      if (progress < 1) {
        autoScrollRef.current = requestAnimationFrame(smoothScroll);
      } else {
        console.log('Auto-scroll completed');
        setIsAutoScrolling(false);
      }
    };
    
    autoScrollRef.current = requestAnimationFrame(smoothScroll);
  };

  // Detect user interaction to stop auto-scroll
  useEffect(() => {
    const stopAutoScroll = (e: Event) => {
      // Only stop on actual scroll attempts, not just any interaction
      if (e.type === 'wheel') {
        const wheelEvent = e as WheelEvent;
        // Only stop if there's significant wheel movement
        if (Math.abs(wheelEvent.deltaY) > 10) {
          setUserScrolledManually(true);
          setIsAutoScrolling(false);
          if (autoScrollRef.current) {
            cancelAnimationFrame(autoScrollRef.current);
          }
        }
      } else if (e.type === 'touchstart') {
        // Only stop on touch moves that are meant for scrolling (not clicking)
        const touchEvent = e as TouchEvent;
        const startY = touchEvent.touches[0].clientY;
        
        const handleTouchMove = (moveEvent: TouchEvent) => {
          const currentY = moveEvent.touches[0].clientY;
          const deltaY = Math.abs(currentY - startY);
          
          // Only stop if user is trying to scroll (significant vertical movement)
          if (deltaY > 30) {
            setUserScrolledManually(true);
            setIsAutoScrolling(false);
            if (autoScrollRef.current) {
              cancelAnimationFrame(autoScrollRef.current);
            }
            window.removeEventListener('touchmove', handleTouchMove);
          }
        };
        
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        
        // Clean up after touch ends
        const handleTouchEnd = () => {
          window.removeEventListener('touchmove', handleTouchMove);
          window.removeEventListener('touchend', handleTouchEnd);
        };
        window.addEventListener('touchend', handleTouchEnd, { passive: true });
      } else if (e.type === 'keydown') {
        const keyEvent = e as KeyboardEvent;
        // Only stop on scroll-related keys
        if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', 'Space'].includes(keyEvent.key)) {
          setUserScrolledManually(true);
          setIsAutoScrolling(false);
          if (autoScrollRef.current) {
            cancelAnimationFrame(autoScrollRef.current);
          }
        }
      }
    };

    // Listen for user scroll interactions during auto-scroll
    if (isAutoScrolling) {
      window.addEventListener('wheel', stopAutoScroll, { passive: true });
      window.addEventListener('touchstart', stopAutoScroll, { passive: true });
      window.addEventListener('keydown', stopAutoScroll);
    }

    return () => {
      window.removeEventListener('wheel', stopAutoScroll);
      window.removeEventListener('touchstart', stopAutoScroll);  
      window.removeEventListener('keydown', stopAutoScroll);
    };
  }, [isAutoScrolling]);

  useEffect(() => {
    let ticking = false;
    let lastScrollTime = 0;

    const handleScroll = () => {
      const now = performance.now();
      
      // Enhanced throttling for mobile performance
      const throttleDelay = mobile ? 20 : 16; // Slower for mobile
      if (now - lastScrollTime < throttleDelay) return;
      lastScrollTime = now;

      if (!ticking) {
        requestAnimationFrame(() => {
          if (!containerRef.current) {
            ticking = false;
            return;
          }

          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const containerHeight = rect.height;
          
          // Simplified scroll progress calculation
          const sectionTop = rect.top;
          const startProgress = windowHeight;
          const endProgress = -containerHeight;
          
          const rawProgress = (startProgress - sectionTop) / (startProgress - endProgress);
          const progress = Math.max(0, Math.min(1, rawProgress));
          
          setScrollProgress(progress);

          // Check if timeline section is visible on screen
          const isVisible = sectionTop < windowHeight && (sectionTop + containerHeight) > 0;
          setIsTimelineVisible(isVisible);

          // Simplified active event calculation for smoother mobile performance
          const totalEvents = timelineEvents.length;
          const eventProgress = progress * totalEvents;
          const activeIndex = Math.round(eventProgress);
          const clampedEvent = Math.max(0, Math.min(totalEvents - 1, activeIndex));
          
          setActiveEvent(clampedEvent);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listeners for better mobile performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section 
      id="timeline"
      ref={containerRef}
      className="min-h-[200vh] py-12 relative overflow-hidden"
    >
      {/* Fixed Background with Parallax */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        {/* Dynamic gradient background */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${timelineEvents[activeEvent].color} opacity-10 transition-all duration-1000`}
        />
        
        {/* Simplified floating data visualization for better mobile performance */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${(i * 25) % 100}%`,
                top: `${(i * 35) % 100}%`,
                transform: `translate3d(0, ${scrollProgress * -100 + (i * 5)}px, 0) scale(${0.5 + Math.sin(scrollProgress * Math.PI + i) * 0.3})`,
                opacity: 0.2 + Math.sin(scrollProgress * Math.PI + i) * 0.2,
                transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
                willChange: 'transform'
              }}
            />
          ))}
        </div>

        {/* Simplified neural network connections for mobile */}
        <svg className="absolute inset-0 w-full h-full">
          {[...Array(6)].map((_, i) => (
            <line
              key={i}
              x1={`${(i * 30) % 100}%`}
              y1={`${(i * 40) % 100}%`}
              x2={`${((i + 2) * 30) % 100}%`}
              y2={`${((i + 2) * 40) % 100}%`}
              stroke="rgba(59, 130, 246, 0.15)"
              strokeWidth="1"
              style={{
                transform: `translate3d(0, ${scrollProgress * -50}px, 0)`,
                opacity: 0.3 + Math.sin(scrollProgress * Math.PI + i) * 0.2,
                willChange: 'transform'
              }}
            />
          ))}
        </svg>
      </div>

      {/* Timeline Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text scroll-animate">
            Professional & Educational Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 scroll-animate"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto scroll-animate">
            A comprehensive timeline showcasing my evolution from student to Lead Data Scientist across diverse industries
          </p>
          
          {/* Auto-scroll button and indicator */}
          <div className="mt-6 flex flex-col items-center space-y-3">
            {!isAutoScrolling ? (
              <button
                onClick={startAutoScroll}
                className="animate-bounce hover:text-primary transition-colors bg-background/50 backdrop-blur-sm border border-border shadow-lg hover:bg-primary/10 rounded-full p-4"
                data-testid="button-auto-scroll-timeline"
              >
                <ChevronDown className="h-8 w-8" />
              </button>
            ) : (
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground animate-pulse">
                <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                <span>Auto-scrolling through timeline...</span>
                <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
              </div>
            )}
            <p className="text-xs text-muted-foreground text-center max-w-md">
              {!isAutoScrolling 
                ? "Click to automatically scroll through my professional journey" 
                : "Touch anywhere to take manual control"
              }
            </p>
          </div>
        </div>

        {/* Timeline Line */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-50" />
          
          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            const isActive = activeEvent >= index;
            const itemProgress = Math.max(0, Math.min(1, (scrollProgress - (index / timelineEvents.length)) * timelineEvents.length));
            
            // Simplified activation logic - just use visibility-based animation
            const shouldAnimate = isActive;
            
            return (
              <div
                key={event.sortOrder}
                className={`relative mb-16 mobile-smooth`}
                style={{
                  transform: `translate3d(0, ${shouldAnimate ? 0 : (mobile ? 25 : 50)}px, 0)`,
                  opacity: shouldAnimate ? 1 : 0.3,
                  transition: mobile 
                    ? 'all 1s cubic-bezier(0.25, 0.1, 0.25, 1)' 
                    : 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  willChange: shouldAnimate ? 'auto' : 'transform, opacity'
                }}
              >
                {/* Timeline Node - Adjusted for mobile */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 md:top-8 sm:top-12 z-20">
                  {event.description.includes("Harley Davidson") ? (
                    /* Larger node for Harley Davidson with prominent logo */
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center border-4 border-background transition-all duration-500 shadow-lg overflow-hidden ${
                      isActive ? 'scale-110 shadow-2xl' : 'scale-100'
                    }`}>
                      <img 
                        src={harleyDavidsonLogo} 
                        alt="Harley Davidson Logo" 
                        className="w-8 h-8 md:w-12 md:h-12 object-contain"
                      />
                    </div>
                  ) : event.description.includes("Home Depot") && event.title.includes("Gen AI") ? (
                    /* Larger node for Home Depot Supply Chain with prominent logo */
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center border-4 border-background transition-all duration-500 shadow-lg overflow-hidden ${
                      isActive ? 'scale-110 shadow-2xl' : 'scale-100'
                    }`}>
                      <img 
                        src={homeDepotLogo} 
                        alt="Home Depot Supply Chain Logo" 
                        className="w-8 h-8 md:w-12 md:h-12 object-contain"
                      />
                    </div>
                  ) : event.description.includes("Home Depot") ? (
                    /* Larger node for Home Depot main logo - use store front for other positions */
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center border-4 border-background transition-all duration-500 shadow-lg overflow-hidden ${
                      isActive ? 'scale-110 shadow-2xl' : 'scale-100'
                    }`}>
                      <img 
                        src={event.title.includes("Lead Data Scientist") ? homeDepotStoreLogo : homeDepotMainLogo} 
                        alt="Home Depot Logo" 
                        className="w-8 h-8 md:w-12 md:h-12 object-contain"
                      />
                    </div>
                  ) : event.description.includes("Principal Financial") ? (
                    /* Larger node for Principal Financial Group logo */
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center border-4 border-background transition-all duration-500 shadow-lg overflow-hidden ${
                      isActive ? 'scale-110 shadow-2xl' : 'scale-100'
                    }`}>
                      <img 
                        src={principalLogo} 
                        alt="Principal Financial Group Logo" 
                        className="w-8 h-8 md:w-12 md:h-12 object-contain"
                      />
                    </div>
                  ) : event.description.includes("University of Maryland") ? (
                    /* Larger node for University of Maryland logo */
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center border-4 border-background transition-all duration-500 shadow-lg overflow-hidden ${
                      isActive ? 'scale-110 shadow-2xl' : 'scale-100'
                    }`}>
                      <img 
                        src={universityOfMarylandLogo} 
                        alt="University of Maryland Logo" 
                        className="w-8 h-8 md:w-12 md:h-12 object-contain"
                      />
                    </div>
                  ) : event.description.includes("Bridge Solutions") ? (
                    /* Larger node for Bridge Solutions logo */
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center border-4 border-background transition-all duration-500 shadow-lg overflow-hidden ${
                      isActive ? 'scale-110 shadow-2xl' : 'scale-100'
                    }`}>
                      <img 
                        src={bridgeSolutionsLogo} 
                        alt="Bridge Solutions Group Logo" 
                        className="w-8 h-8 md:w-12 md:h-12 object-contain"
                      />
                    </div>
                  ) : event.description.includes("SRM University") ? (
                    /* Larger node for SRM University logo */
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center border-4 border-background transition-all duration-500 shadow-lg overflow-hidden ${
                      isActive ? 'scale-110 shadow-2xl' : 'scale-100'
                    }`}>
                      <img 
                        src={srmUniversityLogo} 
                        alt="SRM University Logo" 
                        className="w-8 h-8 md:w-12 md:h-12 object-contain"
                      />
                    </div>
                  ) : event.description.includes("St Joseph's") ? (
                    /* Larger node for St Joseph's School logo */
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center border-4 border-background transition-all duration-500 shadow-lg overflow-hidden ${
                      isActive ? 'scale-110 shadow-2xl' : 'scale-100'
                    }`}>
                      <img 
                        src={stJosephsLogo} 
                        alt="St Joseph's Public School Logo" 
                        className="w-8 h-8 md:w-12 md:h-12 object-contain"
                      />
                    </div>
                  ) : event.description.includes("Anahata") || event.title.includes("Anahata") ? (
                    /* Larger node for Anahata Art and Design logo */
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center border-4 border-background transition-all duration-500 shadow-lg overflow-hidden ${
                      isActive ? 'scale-110 shadow-2xl' : 'scale-100'
                    }`}>
                      <img 
                        src={stonedSantaLogo} 
                        alt="Anahata Art and Design Logo" 
                        className="w-8 h-8 md:w-12 md:h-12 object-contain"
                      />
                    </div>
                  ) : (
                    /* Regular sized node for other entries */
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center border-4 border-background transition-all duration-500 ${
                      isActive ? 'scale-110 shadow-lg shadow-primary/30' : 'scale-100'
                    }`}>
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  )}
                </div>

                {/* Container for both Content Card and Workplace Gallery */}
                <div className={`flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } max-w-6xl mx-auto px-4 pt-8 md:pt-4`}>
                  
                  {/* Content Card */}
                  <div className="w-full lg:flex-1 lg:max-w-2xl">
                    <div className="quantum-card p-6 rounded-xl shadow-lg overflow-hidden"
                         style={{
                           opacity: shouldAnimate ? 1 : 0.4,
                           transform: `translate3d(0, ${shouldAnimate ? 0 : 30}px, 0)`,
                           transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                           willChange: shouldAnimate ? 'auto' : 'transform, opacity'
                         }}>
                      {/* Company Logo Header */}
                      {event.companyImage && (
                        <div className="relative -m-6 mb-6">
                          <div 
                            className="h-48 bg-cover bg-center relative overflow-hidden"
                            style={{
                              backgroundImage: `url(${event.companyImage})`,
                              transform: `translate3d(0, ${shouldAnimate ? 0 : 20}px, 0) scale(${shouldAnimate ? 1 : 0.95})`,
                              opacity: shouldAnimate ? 1 : 0.7,
                              transition: 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                              willChange: shouldAnimate ? 'transform, opacity' : 'auto'
                            }}
                          >
                            {/* Overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            
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
                      

                      
                      <h3 className="text-2xl font-bold mb-3">
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
                              className="flex items-start space-x-3"
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
                    {event.workplaceImages && event.workplaceImages.length > 0 ? (
                      <div className="bg-background/95 backdrop-blur-sm border border-border rounded-xl overflow-hidden shadow-xl">
                        <div className="p-4 pb-2">
                          <h4 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center">
                            <Target className="w-4 h-4 mr-2" />
                            Workplace Gallery
                          </h4>
                        </div>
                        
                        {/* Main Image Display with Touch Support */}
                        <div 
                          className="relative h-64 overflow-hidden"
                          onTouchStart={handleTouchStart}
                          onTouchMove={handleTouchMove}
                          onTouchEnd={() => handleTouchEnd(index, event.workplaceImages?.length || 0)}
                        >
                          {event.workplaceImages?.slice(0, 5).map((image, imageIndex) => {
                            // Use manual selection if available, otherwise use scroll-based selection
                            const manualIndex = manualImageIndices[index];
                            const imageCount = event.workplaceImages?.length || 1;
                            
                            let currentImageIndex;
                            if (manualIndex !== undefined) {
                              currentImageIndex = manualIndex;
                            } else {
                              // Mobile-optimized scroll-based cycling with reduced sensitivity
                              const scrollMultiplier = imageCount > 1 ? imageCount * 1.5 : 1;
                              const baseProgress = scrollProgress * 8; // Reduced sensitivity for smoother mobile
                              const offsetProgress = baseProgress + (index * 2); // Less aggressive timing per event
                              const cycleProgress = offsetProgress % (imageCount * 3); // Much slower cycling
                              currentImageIndex = Math.floor(cycleProgress / 3) % imageCount;
                            }
                            
                            const isCurrentImage = imageIndex === currentImageIndex;
                            
                            return (
                              <div
                                key={imageIndex}
                                className={`absolute inset-0 transition-all duration-800 ease-out ${
                                  isCurrentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                                }`}
                                style={{
                                  transform: `translate3d(${isCurrentImage ? 0 : (imageIndex < currentImageIndex ? -100 : 100)}px, 0, 0) scale(${isCurrentImage ? 1 : 0.95})`,
                                  zIndex: isCurrentImage ? 10 : 1,
                                  willChange: isCurrentImage ? 'transform' : 'auto'
                                }}
                              >
                                <img 
                                  src={image} 
                                  alt={`${event.title} workplace ${imageIndex + 1}`}
                                  className="w-full h-full object-contain object-center bg-gradient-to-br from-secondary/20 to-muted/20"
                                />
                                
                                {/* Image overlay with parallax effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                                
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

        {/* Progress Indicator - Only show when timeline is visible */}
        {isTimelineVisible && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-300">
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
        )}
      </div>
    </section>
  );
}