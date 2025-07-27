import { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Predictive Analytics Dashboard",
    description: "Real-time analytics platform for forecasting business metrics using advanced time series models and machine learning algorithms.",
    technologies: ["Python", "TensorFlow", "React"],
    icon: "📈",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "AI Recommendation Engine",
    description: "Collaborative filtering system serving personalized recommendations to 1M+ users with 95% accuracy and sub-100ms response time.",
    technologies: ["Python", "PyTorch", "AWS"],
    icon: "🤖",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "NLP Sentiment Analyzer",
    description: "Multi-language sentiment analysis tool using transformer models for social media monitoring and brand perception analysis.",
    technologies: ["Python", "BERT", "FastAPI"],
    icon: "🗣️",
    gradient: "from-green-500/20 to-blue-500/20",
  },
  {
    title: "Fraud Detection System",
    description: "Real-time fraud detection using ensemble methods and anomaly detection algorithms, reducing false positives by 60%.",
    technologies: ["Python", "Scikit-learn", "Kafka"],
    icon: "🛡️",
    gradient: "from-red-500/20 to-yellow-500/20",
  },
  {
    title: "Computer Vision Pipeline",
    description: "Automated image classification and object detection system for quality control in manufacturing using CNNs.",
    technologies: ["Python", "TensorFlow", "OpenCV"],
    icon: "👁️",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "MLOps Pipeline",
    description: "End-to-end ML pipeline with automated training, validation, deployment, and monitoring using modern DevOps practices.",
    technologies: ["Python", "MLflow", "Kubernetes"],
    icon: "🔄",
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
];

const techColors: Record<string, string> = {
  Python: "bg-primary/20 text-primary",
  TensorFlow: "bg-accent/20 text-accent",
  React: "bg-purple-500/20 text-purple-400",
  PyTorch: "bg-red-500/20 text-red-400",
  AWS: "bg-orange-500/20 text-orange-400",
  BERT: "bg-yellow-500/20 text-yellow-400",
  FastAPI: "bg-blue-500/20 text-blue-400",
  "Scikit-learn": "bg-accent/20 text-accent",
  Kafka: "bg-gray-500/20 text-gray-400",
  OpenCV: "bg-blue-500/20 text-blue-400",
  MLflow: "bg-green-500/20 text-green-400",
  Kubernetes: "bg-blue-500/20 text-blue-400",
};

export default function ProjectsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="projects" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 neural-flow opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text reality-bend">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`quantum-card rounded-xl shadow-lg overflow-hidden transition-all duration-1000 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Icon */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl quantum-float consciousness-expand">
                  {project.icon}
                </div>
                <div className="absolute inset-0 holographic-shimmer opacity-30"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 quantum-glow">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded text-sm ${
                        techColors[tech] || 'bg-secondary text-foreground'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary/10 transition-all duration-300"
                  >
                    <a
                      href="https://github.com/ajay-sai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-1"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                  
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-accent/10 transition-all duration-300"
                  >
                    <a
                      href="#demos"
                      className="flex items-center justify-center space-x-1"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#demos')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <a
              href="https://github.com/ajay-sai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Github className="h-5 w-5" />
              <span>View All Projects</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
