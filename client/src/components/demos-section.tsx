import { useEffect, useState } from "react";
import { Play } from "lucide-react";

const videos = [
  {
    title: "AI Recommendation Engine Demo",
    description: "Live demonstration of the recommendation engine processing user interactions and delivering personalized suggestions.",
    thumbnail: "from-primary/20 to-accent/20",
  },
  {
    title: "Computer Vision Pipeline",
    description: "Walkthrough of the computer vision system detecting defects in manufacturing processes with 99.7% accuracy.",
    thumbnail: "from-purple-500/20 to-pink-500/20",
  },
];

const gallery = [
  {
    title: "Data Flow Architecture",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Holographic data streams and neural network visualizations",
  },
  {
    title: "Neural Network Design",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Futuristic neural network interfaces and AI brain connections",
  },
  {
    title: "Algorithm Performance",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Advanced machine learning algorithms and data science visualizations",
  },
  {
    title: "Analytics Dashboard",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Real-time analytics dashboard with data visualizations",
  },
  {
    title: "Statistical Analysis",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Data science charts and statistical analysis visualizations",
  },
  {
    title: "Model Architecture",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Machine learning model architecture and deep learning networks",
  },
];

export default function DemosSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="demos" className="py-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text scroll-animate">
            Demos & Presentations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        {/* Video Demos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center quantum-glow">Project Demonstrations</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div
                key={video.title}
                className={`quantum-card rounded-xl overflow-hidden shadow-lg transition-all duration-1000 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`aspect-video bg-gradient-to-br ${video.thumbnail} flex items-center justify-center relative group cursor-pointer overflow-hidden`}>
                  <div className="text-center scroll-animate">
                    <Play className="w-16 h-16 text-primary mb-4 quantum-glow group-hover:scale-110 transition-transform" />
                    <p className="text-muted-foreground font-medium">{video.title}</p>
                  </div>
                  <div className="absolute inset-0 holographic-shimmer opacity-0 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{video.title}</h4>
                  <p className="text-muted-foreground">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center quantum-glow">Project Visualizations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div
                key={item.title}
                className={`relative group overflow-hidden rounded-xl shadow-lg transition-all duration-1000 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <h4 className="font-semibold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
