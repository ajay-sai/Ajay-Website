import ajayPhoto from "@assets/20240420_202714_1762722420285.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="pt-4 pb-12 bg-secondary/30 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Content */}
          <div className="space-y-6">
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
          <div className="relative">
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

        {/* Professional Summary - GEO Optimized */}
        <div className="bg-card border border-border rounded-lg p-6">
          {/* Quick Facts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Experience</p>
              <p className="text-sm font-bold">8+ Years in AI/ML</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Location</p>
              <p className="text-sm font-bold">Atlanta, GA, USA</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Education</p>
              <p className="text-sm font-bold">MS Business Statistics, UMD</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Current Role</p>
              <p className="text-sm font-bold">Gen AI & ML Engineer</p>
            </div>
          </div>
          
          {/* Technical Expertise */}
          <div className="mb-6 pb-6 border-b border-border">
            <p className="text-xs text-muted-foreground mb-3 font-semibold">Technical Expertise</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">Generative AI</span>
              <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium">LLM Systems</span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">RAG</span>
              <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium">Python</span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">GCP</span>
              <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium">BigQuery</span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">Vertex AI</span>
              <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium">TensorFlow</span>
            </div>
          </div>

          {/* Industries & Companies */}
          <div className="mb-6 pb-6 border-b border-border grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-muted-foreground mb-3 font-semibold">Industries</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-md font-medium">Retail</span>
                <span className="px-2 py-1 bg-orange-500/10 text-orange-400 text-xs rounded-md font-medium">Manufacturing</span>
                <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 text-xs rounded-md font-medium">Finance</span>
                <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-md font-medium">Education</span>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3 font-semibold">Companies</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-500/10 text-orange-400 text-xs rounded-md font-medium">Home Depot</span>
                <span className="px-2 py-1 bg-orange-500/10 text-orange-400 text-xs rounded-md font-medium">Harley Davidson</span>
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-md font-medium">Principal</span>
                <span className="px-2 py-1 bg-red-500/10 text-red-400 text-xs rounded-md font-medium">UMD</span>
                <span className="px-2 py-1 bg-teal-500/10 text-teal-400 text-xs rounded-md font-medium">Bridge Solutions</span>
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div>
            <p className="text-xs text-muted-foreground mb-3 font-semibold">Measurable Impact</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-secondary/30 rounded-lg">
                <p className="text-2xl font-bold text-green-400">$21M+</p>
                <p className="text-xs text-muted-foreground mt-1">Cost Savings</p>
              </div>
              <div className="text-center p-3 bg-secondary/30 rounded-lg">
                <p className="text-2xl font-bold text-blue-400">80%</p>
                <p className="text-xs text-muted-foreground mt-1">Efficiency Gain</p>
              </div>
              <div className="text-center p-3 bg-secondary/30 rounded-lg">
                <p className="text-2xl font-bold text-purple-400">4000+</p>
                <p className="text-xs text-muted-foreground mt-1">Users Supported</p>
              </div>
              <div className="text-center p-3 bg-secondary/30 rounded-lg">
                <p className="text-2xl font-bold text-amber-400">87%</p>
                <p className="text-xs text-muted-foreground mt-1">ML Accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
