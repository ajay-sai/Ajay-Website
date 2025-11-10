import { Code2, Brain, Database, Rocket, Target, Zap } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "LLM Orchestration & RAG Systems",
    description: "Build production-grade LLM platforms with GPT-4, Gemini, and custom RAG architectures using Neo4j Knowledge Graphs. Design robust evaluation frameworks and safety filters for enterprise deployment.",
    tags: ["GPT-4", "Gemini", "RAG", "Neo4j", "LangChain"],
    gradient: "from-blue-500 to-cyan-500",
    serviceType: "Generative AI Development"
  },
  {
    icon: Database,
    title: "ML Infrastructure & Production Systems",
    description: "Architect scalable ML pipelines from data ingestion to model deployment. Build ETL workflows, feature engineering systems, and monitoring dashboards that deliver measurable business impact.",
    tags: ["BigQuery", "Vertex AI", "GCP", "MLOps", "Airflow"],
    gradient: "from-green-500 to-emerald-500",
    serviceType: "ML Engineering"
  },
  {
    icon: Code2,
    title: "Computer Vision & Multi-Modal AI",
    description: "Develop image generation pipelines with Stable Diffusion, Vision Transformers for classification, and dynamic asset creation systems that scale to millions of requests.",
    tags: ["Vision Transformers", "Stable Diffusion", "PyTorch", "TensorFlow"],
    gradient: "from-purple-500 to-violet-500",
    serviceType: "Computer Vision Solutions"
  },
  {
    icon: Target,
    title: "Predictive Analytics & ML Models",
    description: "Build high-accuracy ML models for forecasting, classification, and optimization. Achieve 80%+ accuracy with XGBoost, Random Forests, and deep learning on complex business problems.",
    tags: ["XGBoost", "Random Forest", "Deep Learning", "Python"],
    gradient: "from-orange-500 to-red-500",
    serviceType: "Predictive Modeling"
  },
  {
    icon: Rocket,
    title: "Data Strategy & Architecture",
    description: "Design end-to-end data architectures with cloud platforms, data warehouses, and real-time processing. Reduce costs by 50%+ through optimization and intelligent pipeline design.",
    tags: ["Data Warehousing", "Cloud Architecture", "BigQuery", "ETL"],
    gradient: "from-indigo-500 to-purple-500",
    serviceType: "Data Engineering"
  },
  {
    icon: Zap,
    title: "AI Consulting & POC Development",
    description: "Rapid prototyping and proof-of-concept development for AI initiatives. Turn notebooks into production systems with comprehensive evaluation, monitoring, and deployment strategies.",
    tags: ["Consulting", "POC", "Strategy", "AI Roadmap"],
    gradient: "from-pink-500 to-rose-500",
    serviceType: "AI Consulting"
  }
];

export default function ServicesSection() {
  return (
    <section 
      id="services" 
      className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            How I Can Help
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Specialized AI and ML engineering services that bridge the gap between impressive demos and production systems that actually work at scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-lg p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                itemScope
                itemProp="hasOfferCatalog"
                itemType="https://schema.org/OfferCatalog"
              >
                {/* Icon */}
                <div className={`w-14 h-14 mb-4 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 
                  className="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
                  itemProp="name"
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-muted-foreground text-sm mb-4 leading-relaxed"
                  itemProp="description"
                >
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2" itemProp="category">
                  {service.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-secondary/50 text-xs rounded font-medium hover:bg-secondary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Service Type (hidden for SEO) */}
                <meta itemProp="serviceType" content={service.serviceType} />

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-lg`}></div>
              </div>
            );
          })}
        </div>

        {/* Provider Info (hidden for schema) */}
        <div className="hidden" itemProp="provider" itemScope itemType="https://schema.org/Person">
          <span itemProp="name">Ajay Miryala</span>
          <span itemProp="jobTitle">Generative AI and ML Engineer</span>
        </div>
      </div>
    </section>
  );
}
