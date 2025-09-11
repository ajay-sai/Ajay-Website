import ajayPhoto from "@assets/image_1756764365127.png";

export default function AboutSection() {
  return (
    <section id="about" className="pt-4 pb-12 bg-secondary/30 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text scroll-animate">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 scroll-animate"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto scroll-animate">
            Discover my journey, expertise, and passion for transforming data into actionable insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 scroll-animate">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Generative AI and ML Engineer with 8+ years of experience designing and deploying robust, production-grade data ecosystems. 
              I specialize in building the full-stack infrastructure that powers modern AI, from architecting scalable ETL and 
              analytics platforms (BigQuery, GCP) to operationalizing the complete lifecycle of Generative AI models, including 
              RAG and multi-modal systems.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My focus is on creating resilient, efficient, and scalable solutions that serve as the backbone for enterprise-level 
              AI applications. At The Home Depot, I've architected LLM evaluation pipelines, engineered Neo4j Knowledge-Graph RAG 
              assistants for 200+ analysts, and deployed multi-LLM orchestration systems with structured outputs and safety filters, 
              delivering measurable impact including 60% reduction in manual reporting and $20M potential marketing savings.
            </p>


          </div>

          {/* Image */}
          <div className="relative scroll-animate">
            <div className="relative group">
              <img
                src={ajayPhoto}
                alt="Ajay Miryala - Generative AI and ML Engineer"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl"></div>
              

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
