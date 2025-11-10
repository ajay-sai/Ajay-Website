import { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Dynamic Image Generation Pipeline",
    description: "Architected scalable dynamic image generation utilizing Google Image Gen-3, Stable Diffusion, and Gemini-1.5 Pro for enhanced visual search relevance and accuracy at The Home Depot.",
    technologies: ["Google AI", "Stable Diffusion", "GCP", "Gemini"],
    icon: "🎨",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "Neo4j Knowledge-Graph RAG Assistant",
    description: "Engineered RAG assistant deployed in Slack/Teams for 200+ analysts, improving discovery speed and answer groundedness with multi-modal embeddings integration.",
    technologies: ["Neo4j", "RAG", "Slack API", "LLM"],
    icon: "🧠",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Multi-LLM Orchestration System",
    description: "Deployed multi-LLM orchestration with Gemini 2.5 Pro/Flash, Llama for structured JSON outputs, function-calling, and comprehensive safety filters with bias detection.",
    technologies: ["Gemini", "Llama", "JSON", "Safety AI"],
    icon: "⚙️",
    gradient: "from-green-500/20 to-blue-500/20",
  },
  {
    title: "MLOps Pipeline with TFX & Vertex AI",
    description: "Established MLOps pipelines using TensorFlow Extended, Vertex AI Pipelines, and MLflow for model versioning, validation, and deployment in production environments.",
    technologies: ["TFX", "Vertex AI", "MLflow", "GCP"],
    icon: "🔄",
    gradient: "from-red-500/20 to-yellow-500/20",
  },
  {
    title: "House Renovation Score Prediction",
    description: "Developed predictive models using ResNet and Vision Transformers on MLS listing images, achieving 87% accuracy and targeting $20M marketing budget savings.",
    technologies: ["ResNet", "Vision Transformers", "CoreLogic", "Computer Vision"],
    icon: "🏠",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "BigQuery ETL Data Integration",
    description: "Led team of 4 to optimize ETL workflows integrating 50TB data from 15 disparate sources (clickstream, orders, marketing), resulting in 40% increase in data processing efficiency.",
    technologies: ["BigQuery", "ETL", "Data Engineering", "SQL"],
    icon: "📊",
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
];

const techColors: Record<string, string> = {
  "Google AI": "bg-primary/20 text-primary",
  "Stable Diffusion": "bg-purple-500/20 text-purple-400",
  GCP: "bg-blue-500/20 text-blue-400",
  Gemini: "bg-green-500/20 text-green-400",
  Neo4j: "bg-accent/20 text-accent",
  RAG: "bg-yellow-500/20 text-yellow-400",
  "Slack API": "bg-red-500/20 text-red-400",
  LLM: "bg-purple-500/20 text-purple-400",
  Llama: "bg-orange-500/20 text-orange-400",
  JSON: "bg-gray-500/20 text-gray-400",
  "Safety AI": "bg-red-500/20 text-red-400",
  TFX: "bg-accent/20 text-accent",
  "Vertex AI": "bg-blue-500/20 text-blue-400",
  MLflow: "bg-green-500/20 text-green-400",
  ResNet: "bg-indigo-500/20 text-indigo-400",
  "Vision Transformers": "bg-purple-500/20 text-purple-400",
  CoreLogic: "bg-teal-500/20 text-teal-400",
  "Computer Vision": "bg-cyan-500/20 text-cyan-400",
  BigQuery: "bg-blue-500/20 text-blue-400",
  ETL: "bg-green-500/20 text-green-400",
  "Data Engineering": "bg-teal-500/20 text-teal-400",
  SQL: "bg-primary/20 text-primary",
};

export default function ProjectsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="projects" className="py-12 bg-secondary/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 neural-flow opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text scroll-animate">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 scroll-animate"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto scroll-animate">
            Showcasing innovative data science projects that transform complex challenges into actionable solutions
          </p>
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
                <div className="text-6xl">
                  {project.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
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
              href="/projects"
              className="flex items-center space-x-2"
            >
              <ExternalLink className="h-5 w-5" />
              <span>View All Projects</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
