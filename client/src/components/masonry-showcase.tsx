import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Play, BarChart3, Brain, Database, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MasonryItem {
  id: string;
  title: string;
  description: string;
  type: 'project' | 'skill' | 'achievement' | 'demo';
  size: 'small' | 'medium' | 'large';
  media: {
    type: 'video' | 'image' | 'chart';
    url?: string;
    gradient: string;
  };
  icon: React.ElementType;
  tags: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

const masonryItems: MasonryItem[] = [
  {
    id: '1',
    title: 'Neural Network Architecture',
    description: 'Deep learning model achieving 99.7% accuracy in image classification',
    type: 'project',
    size: 'large',
    media: {
      type: 'chart',
      gradient: 'from-blue-500 via-purple-500 to-pink-500'
    },
    icon: Brain,
    tags: ['TensorFlow', 'Python', 'CNN'],
    metrics: [
      { label: 'Accuracy', value: '99.7%' },
      { label: 'Speed', value: '50ms' }
    ]
  },
  {
    id: '2',
    title: 'Real-time Analytics',
    description: 'Processing 1M+ events per second',
    type: 'achievement',
    size: 'medium',
    media: {
      type: 'chart',
      gradient: 'from-green-400 to-emerald-600'
    },
    icon: BarChart3,
    tags: ['Kafka', 'Spark', 'AWS'],
    metrics: [
      { label: 'Events/sec', value: '1M+' }
    ]
  },
  {
    id: '3',
    title: 'Quantum Computing',
    description: 'Research in quantum machine learning algorithms',
    type: 'skill',
    size: 'small',
    media: {
      type: 'image',
      gradient: 'from-cyan-400 to-blue-600'
    },
    icon: Zap,
    tags: ['Qiskit', 'Research']
  },
  {
    id: '4',
    title: 'Data Pipeline Architecture',
    description: 'Scalable ETL processing 500TB+ daily',
    type: 'project',
    size: 'medium',
    media: {
      type: 'chart',
      gradient: 'from-orange-400 to-red-600'
    },
    icon: Database,
    tags: ['Apache Airflow', 'Docker', 'Kubernetes'],
    metrics: [
      { label: 'Data Volume', value: '500TB' },
      { label: 'Uptime', value: '99.9%' }
    ]
  },
  {
    id: '5',
    title: 'AI Recommendation Engine',
    description: 'Collaborative filtering serving millions of users',
    type: 'demo',
    size: 'large',
    media: {
      type: 'video',
      gradient: 'from-purple-400 via-pink-500 to-red-500'
    },
    icon: Brain,
    tags: ['PyTorch', 'Redis', 'FastAPI'],
    metrics: [
      { label: 'Users', value: '2M+' },
      { label: 'CTR Increase', value: '40%' }
    ]
  },
  {
    id: '6',
    title: 'Computer Vision Pipeline',
    description: 'Quality control automation in manufacturing',
    type: 'project',
    size: 'medium',
    media: {
      type: 'image',
      gradient: 'from-teal-400 to-cyan-600'
    },
    icon: Brain,
    tags: ['OpenCV', 'YOLO', 'Edge Computing']
  },
  {
    id: '7',
    title: 'MLOps Excellence',
    description: 'Automated model training and deployment',
    type: 'skill',
    size: 'small',
    media: {
      type: 'chart',
      gradient: 'from-indigo-400 to-purple-600'
    },
    icon: Zap,
    tags: ['MLflow', 'Kubeflow']
  },
  {
    id: '8',
    title: 'Fraud Detection System',
    description: 'Real-time anomaly detection with 60% false positive reduction',
    type: 'achievement',
    size: 'large',
    media: {
      type: 'chart',
      gradient: 'from-red-400 via-orange-500 to-yellow-500'
    },
    icon: BarChart3,
    tags: ['Isolation Forest', 'Real-time', 'Kafka'],
    metrics: [
      { label: 'False Positives', value: '-60%' },
      { label: 'Detection Speed', value: '<100ms' }
    ]
  }
];

// Mobile detection utility
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         (window.innerWidth <= 768);
};

export default function MasonryShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isMobile());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      setScrollProgress(progress);

      // Observe individual items
      const items = containerRef.current.querySelectorAll('[data-masonry-item]');
      const newVisibleItems = new Set<string>();

      items.forEach(item => {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top < windowHeight && itemRect.bottom > 0) {
          const itemId = item.getAttribute('data-masonry-item');
          if (itemId) newVisibleItems.add(itemId);
        }
      });

      setVisibleItems(newVisibleItems);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return 'col-span-1 row-span-1 h-64';
      case 'medium':
        return 'col-span-1 row-span-2 h-80';
      case 'large':
        return 'col-span-2 row-span-2 h-96';
      default:
        return 'col-span-1 row-span-1 h-64';
    }
  };

  const renderMedia = (item: MasonryItem) => {
    const Icon = item.icon;
    
    switch (item.media.type) {
      case 'video':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            <Button
              variant="ghost"
              size="icon"
              className="relative z-10 w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300"
            >
              <Play className="w-8 h-8 text-white" />
            </Button>
          </div>
        );
      
      case 'chart':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Animated chart visualization */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bottom-4 bg-white/30 rounded-t"
                  style={{
                    left: `${10 + i * 10}%`,
                    width: '8%',
                    height: `${20 + Math.sin(scrollProgress * Math.PI * 2 + i) * 30}%`,
                    transition: 'height 0.3s ease-out',
                    animationDelay: `${i * 100}ms`
                  }}
                />
              ))}
            </div>
            <Icon className="w-16 h-16 text-white/80 relative z-10" />
          </div>
        );
      
      default:
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <Icon className="w-16 h-16 text-white/80" />
            {/* Floating particles */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/40 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + Math.sin(scrollProgress * Math.PI + i) * 20}%`,
                    transform: `scale(${0.5 + Math.sin(scrollProgress * Math.PI * 2 + i) * 0.5})`,
                    transition: 'all 0.3s ease-out'
                  }}
                />
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <section 
      id="showcase"
      ref={containerRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 quantum-dots opacity-10"></div>
      
      {/* Floating particles for quantum effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full quantum-float"
            style={{
              left: `${(i * 19) % 100}%`,
              top: `${(i * 23) % 100}%`,
              animationDelay: `${i * 150}ms`,
              animationDuration: `${4 + (i % 4)}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced cascading grid overlay - static version */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-primary via-accent to-transparent"
            style={{
              left: `${(i * 4) % 100}%`,
              top: `${Math.sin(scrollProgress * Math.PI + i * 0.1) * 100}%`,
              transform: `translateY(${scrollProgress * -200 + (i * 5)}px)`,
              opacity: 0.3,
              transition: 'all 0.2s ease-out'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text consciousness-expand">
            Interactive Portfolio Showcase
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my work through an immersive, cascading layout that reveals projects, achievements, and innovations
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max">
          {masonryItems.map((item, index) => {
            const isVisible = visibleItems.has(item.id);
            const itemProgress = isVisible ? 1 : 0;
            
            return (
              <div
                key={item.id}
                data-masonry-item={item.id}
                className={`${getSizeClasses(item.size)} hover:scale-105 mobile-smooth`}
                style={{
                  transform: `translate3d(0, ${isVisible ? 0 : (mobile ? 15 : 30)}px, 0) scale(${isVisible ? 1 : 0.95})`,
                  opacity: isVisible ? 1 : 0.3,
                  transition: mobile 
                    ? `all 0.9s cubic-bezier(0.25, 0.1, 0.25, 1) ${index * 80}ms`
                    : `all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 50}ms`,
                  willChange: isVisible ? 'auto' : 'transform, opacity'
                }}
              >
                <div className="quantum-card h-full rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:scale-105 transition-all duration-500 reality-bend">
                  {/* Quantum hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                  
                  {/* Media Section */}
                  <div className={`relative h-2/3 bg-gradient-to-br ${item.media.gradient} overflow-hidden`}>
                    {renderMedia(item)}
                    
                    {/* Enhanced hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    
                    {/* Type badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-white text-xs font-medium capitalize">
                        {item.type}
                      </span>
                    </div>

                    {/* Size indicator */}
                    <div className="absolute top-4 left-4">
                      <div className={`w-3 h-3 rounded-full ${
                        item.size === 'large' ? 'bg-green-400' :
                        item.size === 'medium' ? 'bg-yellow-400' : 'bg-blue-400'
                      }`} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="h-1/3 p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300 consciousness-expand">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2 group-hover:text-foreground transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>

                    {/* Metrics with quantum effects */}
                    {item.metrics && (
                      <div className="flex space-x-4 mb-3">
                        {item.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-center group-hover:scale-110 transition-transform duration-300">
                            <div className="text-primary font-bold text-sm group-hover:text-accent transition-colors duration-300">{metric.value}</div>
                            <div className="text-muted-foreground text-xs">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags with quantum effects */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-secondary/80 hover:bg-secondary text-foreground text-xs rounded transition-all duration-300 hover:scale-105 reality-bend cursor-pointer"
                          style={{ animationDelay: `${tagIndex * 50}ms` }}
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="px-2 py-1 bg-secondary/80 text-muted-foreground text-xs rounded transition-all duration-300 hover:scale-105">
                          +{item.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <Button variant="outline" size="sm" className="flex-1 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View
                      </Button>
                      {item.type === 'project' && (
                        <Button variant="outline" size="sm" className="hover:bg-accent/10 hover:border-accent/50 transition-all duration-300">
                          <Github className="w-3 h-3" />
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                      style={{ width: `${itemProgress * 100}%` }}
                    />
                  </div>
                  
                  {/* Subtle border glow on hover */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating stats with quantum effects */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Projects', value: '50+', color: 'text-blue-400' },
            { label: 'Technologies', value: '25+', color: 'text-green-400' },
            { label: 'Achievements', value: '15+', color: 'text-purple-400' },
            { label: 'Demos', value: '8+', color: 'text-orange-400' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-4 quantum-card rounded-lg transform transition-all duration-1000 hover:scale-105 reality-bend group cursor-pointer"
              style={{
                transitionDelay: `${index * 200}ms`,
                transform: `translateY(${scrollProgress > 0.5 ? 0 : 20}px)`,
                opacity: scrollProgress > 0.5 ? 1 : 0.5
              }}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              
              <div className="relative z-10">
                <div className={`text-3xl font-bold ${stat.color} mb-2 consciousness-expand`}>{stat.value}</div>
                <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.label}</div>
              </div>
              
              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}