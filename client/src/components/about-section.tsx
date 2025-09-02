import ajayPhoto from "@assets/image_1756764365127.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text scroll-animate">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 scroll-animate">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lead AI Data Scientist with 8+ years of experience designing and deploying robust, production-grade data ecosystems. 
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
                alt="Ajay Miryala - Lead Data Scientist"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl holographic-shimmer"></div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full quantum-float opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full quantum-float opacity-60" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-primary rounded-full quantum-float opacity-70" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
