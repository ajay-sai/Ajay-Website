import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Play, BarChart3, Brain, Database, Zap, Award, TrendingUp, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MasonryItem {
  id: string;
  title: string;
  description: string;
  category: 'ml-project' | 'data-pipeline' | 'ai-research' | 'case-study' | 'achievement' | 'demo';
  size: 'small' | 'medium' | 'large' | 'wide';
  media: {
    type: 'video' | 'image' | 'interactive' | 'visualization';
    url: string;
    thumbnail?: string;
    aspectRatio?: string;
  };
  icon: React.ElementType;
  tags: string[];
  metrics: {
    label: string;
    value: string;
    trend?: 'up' | 'down' | 'stable';
  }[];
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
    dataset?: string;
  };
  impact: string;
  year: string;
}

const masonryItems: MasonryItem[] = [
  {
    id: '1',
    title: 'Neural Network Architecture Visualization',
    description: 'Interactive deep learning model achieving 99.7% accuracy in medical image classification with real-time inference',
    category: 'ml-project',
    size: 'large',
    media: {
      type: 'video',
      url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      aspectRatio: '16:9'
    },
    icon: Brain,
    tags: ['TensorFlow', 'Python', 'Medical AI', 'CNN', 'GPU Computing'],
    metrics: [
      { label: 'Accuracy', value: '99.7%', trend: 'up' },
      { label: 'Inference Time', value: '12ms', trend: 'down' },
      { label: 'Model Size', value: '84MB', trend: 'stable' }
    ],
    links: {
      github: 'https://github.com/ajay-sai/neural-architecture',
      demo: 'https://neural-demo.vercel.app',
      paper: 'https://arxiv.org/abs/medical-ai-2024'
    },
    impact: 'Reduced diagnostic time by 75% in clinical trials',
    year: '2024'
  },
  {
    id: '2',
    title: 'Real-time Data Processing Pipeline',
    description: 'Scalable streaming analytics processing 2M+ events per second with sub-millisecond latency',
    category: 'data-pipeline',
    size: 'wide',
    media: {
      type: 'visualization',
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400',
      aspectRatio: '3:1'
    },
    icon: Database,
    tags: ['Apache Kafka', 'Spark Streaming', 'AWS Kinesis', 'Redis', 'Elasticsearch'],
    metrics: [
      { label: 'Events/sec', value: '2.1M', trend: 'up' },
      { label: 'Latency', value: '0.8ms', trend: 'down' },
      { label: 'Uptime', value: '99.99%', trend: 'stable' }
    ],
    links: {
      github: 'https://github.com/ajay-sai/real-time-pipeline',
      demo: 'https://pipeline-dashboard.vercel.app'
    },
    impact: '$2.5M saved in infrastructure costs annually',
    year: '2024'
  },
  {
    id: '3',
    title: 'Quantum ML Research',
    description: 'Breakthrough quantum machine learning algorithm for optimization problems',
    category: 'ai-research',
    size: 'medium',
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800',
      aspectRatio: '3:4'
    },
    icon: Zap,
    tags: ['Quantum Computing', 'Qiskit', 'Research', 'Nature Publication'],
    metrics: [
      { label: 'Speedup', value: '1000x', trend: 'up' },
      { label: 'Accuracy', value: '94.2%', trend: 'up' },
      { label: 'Citations', value: '47', trend: 'up' }
    ],
    links: {
      paper: 'https://nature.com/quantum-ml-2024',
      dataset: 'https://quantum-datasets.org/optimization'
    },
    impact: 'Published in Nature Quantum Information',
    year: '2024'
  },
  {
    id: '4',
    title: 'AI Recommendation Engine',
    description: 'Collaborative filtering system serving 5M+ users with personalized recommendations',
    category: 'ml-project',
    size: 'large',
    media: {
      type: 'interactive',
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      aspectRatio: '4:3'
    },
    icon: Users,
    tags: ['PyTorch', 'Redis', 'FastAPI', 'A/B Testing', 'MLOps'],
    metrics: [
      { label: 'Active Users', value: '5.2M', trend: 'up' },
      { label: 'CTR Increase', value: '47%', trend: 'up' },
      { label: 'Revenue Impact', value: '$12M', trend: 'up' }
    ],
    links: {
      github: 'https://github.com/ajay-sai/recommendation-engine',
      demo: 'https://rec-engine-demo.vercel.app'
    },
    impact: 'Generated $12M additional revenue in 6 months',
    year: '2024'
  },
  {
    id: '5',
    title: 'Computer Vision Quality Control',
    description: 'Automated defect detection in manufacturing with 99.8% precision',
    category: 'case-study',
    size: 'medium',
    media: {
      type: 'video',
      url: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      aspectRatio: '3:2'
    },
    icon: Brain,
    tags: ['Computer Vision', 'YOLO v8', 'Edge Computing', 'OpenCV'],
    metrics: [
      { label: 'Precision', value: '99.8%', trend: 'up' },
      { label: 'Cost Savings', value: '$3.2M', trend: 'up' },
      { label: 'Processing Speed', value: '150 FPS', trend: 'stable' }
    ],
    links: {
      github: 'https://github.com/ajay-sai/cv-quality-control',
      demo: 'https://cv-qc-demo.vercel.app'
    },
    impact: 'Reduced quality control costs by 65%',
    year: '2023'
  },
  {
    id: '6',
    title: 'Fraud Detection Excellence',
    description: 'Real-time anomaly detection reducing false positives by 72%',
    category: 'achievement',
    size: 'small',
    media: {
      type: 'visualization',
      url: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600',
      aspectRatio: '1:1'
    },
    icon: Award,
    tags: ['Isolation Forest', 'Real-time Analytics', 'AWS Lambda'],
    metrics: [
      { label: 'False Positives', value: '-72%', trend: 'down' },
      { label: 'Detection Speed', value: '45ms', trend: 'down' },
      { label: 'Fraud Caught', value: '98.5%', trend: 'up' }
    ],
    impact: 'Prevented $8.5M in fraudulent transactions',
    year: '2023'
  },
  {
    id: '7',
    title: 'MLOps Platform Architecture',
    description: 'End-to-end ML platform with automated CI/CD and model monitoring',
    category: 'data-pipeline',
    size: 'wide',
    media: {
      type: 'visualization',
      url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400',
      aspectRatio: '3:1'
    },
    icon: TrendingUp,
    tags: ['MLflow', 'Kubeflow', 'Docker', 'Kubernetes', 'GitOps'],
    metrics: [
      { label: 'Models Deployed', value: '250+', trend: 'up' },
      { label: 'Deployment Time', value: '15min', trend: 'down' },
      { label: 'System Uptime', value: '99.97%', trend: 'stable' }
    ],
    links: {
      github: 'https://github.com/ajay-sai/mlops-platform'
    },
    impact: 'Accelerated model deployment by 85%',
    year: '2023'
  },
  {
    id: '8',
    title: 'Natural Language Processing Suite',
    description: 'Multi-language sentiment analysis and text classification platform',
    category: 'demo',
    size: 'medium',
    media: {
      type: 'interactive',
      url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      aspectRatio: '3:2'
    },
    icon: Brain,
    tags: ['BERT', 'Transformers', 'Multi-language', 'Sentiment Analysis'],
    metrics: [
      { label: 'Languages', value: '15', trend: 'up' },
      { label: 'Accuracy', value: '96.8%', trend: 'up' },
      { label: 'Processing Speed', value: '2000/sec', trend: 'stable' }
    ],
    links: {
      demo: 'https://nlp-suite-demo.vercel.app',
      github: 'https://github.com/ajay-sai/nlp-suite'
    },
    impact: 'Analyzing 500K+ customer reviews daily',
    year: '2023'
  }
];

export default function MasonryShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());

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
        return 'col-span-1 row-span-2 h-80';
      case 'medium':
        return 'col-span-1 row-span-3 h-96';
      case 'large':
        return 'col-span-2 row-span-3 h-96';
      case 'wide':
        return 'col-span-2 row-span-2 h-64';
      default:
        return 'col-span-1 row-span-2 h-80';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ml-project':
        return 'from-blue-500 to-purple-600';
      case 'data-pipeline':
        return 'from-green-500 to-teal-600';
      case 'ai-research':
        return 'from-purple-500 to-pink-600';
      case 'case-study':
        return 'from-orange-500 to-red-600';
      case 'achievement':
        return 'from-yellow-500 to-orange-600';
      case 'demo':
        return 'from-cyan-500 to-blue-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return '↗';
      case 'down':
        return '↘';
      case 'stable':
        return '→';
      default:
        return '';
    }
  };

  const renderMedia = (item: MasonryItem) => {
    const Icon = item.icon;
    
    switch (item.media.type) {
      case 'video':
        return (
          <div className="relative w-full h-full overflow-hidden group">
            <img
              src={item.media.url}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 scale-90 group-hover:scale-100"
            >
              <Play className="w-8 h-8 text-white" />
            </Button>
          </div>
        );
      
      case 'visualization':
        return (
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={item.media.url}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            {/* Animated data overlay */}
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bottom-4 bg-primary/40 rounded-t backdrop-blur-sm"
                  style={{
                    left: `${5 + i * 7}%`,
                    width: '5%',
                    height: `${15 + Math.sin(scrollProgress * Math.PI * 2 + i) * 25}%`,
                    transition: 'height 0.4s ease-out',
                    animationDelay: `${i * 50}ms`
                  }}
                />
              ))}
            </div>
          </div>
        );

      case 'interactive':
        return (
          <div className="relative w-full h-full overflow-hidden group">
            <img
              src={item.media.url}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
            <div className="absolute top-4 right-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            {/* Interactive overlay effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/60 rounded-full"
                  style={{
                    left: `${10 + i * 10}%`,
                    top: `${20 + Math.sin(i) * 30}%`,
                    animationDelay: `${i * 200}ms`
                  }}
                />
              ))}
            </div>
          </div>
        );
      
      default:
        return (
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={item.media.url}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Icon className="w-12 h-12 text-white/90 drop-shadow-lg" />
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
      {/* Background with cascading effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />
        
        {/* Cascading grid overlay */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-20 bg-primary"
              style={{
                left: `${(i * 4) % 100}%`,
                top: `${Math.sin(scrollProgress * Math.PI + i * 0.1) * 100}%`,
                transform: `translateY(${scrollProgress * -200 + (i * 5)}px)`,
                opacity: 0.3 + Math.sin(scrollProgress * Math.PI * 2 + i) * 0.3,
                transition: 'all 0.2s ease-out'
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
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
                className={`${getSizeClasses(item.size)} transform transition-all duration-1000 hover:scale-105`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transform: `translateY(${isVisible ? 0 : 30}px) scale(${isVisible ? 1 : 0.95})`,
                  opacity: isVisible ? 1 : 0.3
                }}
              >
                <div className="quantum-card h-full rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                  {/* Media Section */}
                  <div className={`relative h-2/3 bg-gradient-to-br ${item.media.gradient} overflow-hidden`}>
                    {renderMedia(item)}
                    
                    {/* Hover overlay */}
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
                      <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Metrics */}
                    {item.metrics && (
                      <div className="flex space-x-4 mb-3">
                        {item.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-center">
                            <div className="text-primary font-bold text-sm">{metric.value}</div>
                            <div className="text-muted-foreground text-xs">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-secondary text-foreground text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded">
                          +{item.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="outline" size="sm" className="flex-1">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View
                      </Button>
                      {item.type === 'project' && (
                        <Button variant="outline" size="sm">
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
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Projects', value: '50+', color: 'text-blue-400' },
            { label: 'Technologies', value: '25+', color: 'text-green-400' },
            { label: 'Achievements', value: '15+', color: 'text-purple-400' },
            { label: 'Demos', value: '8+', color: 'text-orange-400' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-4 quantum-card rounded-lg transform transition-all duration-1000"
              style={{
                transitionDelay: `${index * 200}ms`,
                transform: `translateY(${scrollProgress > 0.5 ? 0 : 20}px)`,
                opacity: scrollProgress > 0.5 ? 1 : 0.5
              }}
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}