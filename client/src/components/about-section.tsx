// Profile photo served from static public directory for Cloud Run deployment
const ajayPhoto = "/images/profile/20240420_202714_1762722420285.jpg";

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="pt-4 pb-12 bg-secondary/30 relative overflow-hidden"
      itemScope
      itemType="https://schema.org/Person"
    >
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Hidden schema data */}
          <meta itemProp="name" content="Ajay Miryala" />
          <meta itemProp="jobTitle" content="Generative AI and ML Engineer" />
          {/* Content */}
          <div className="space-y-6" itemProp="description">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most AI demos look impressive. Most AI in production doesn't work. I bridge that gap.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              For the past <data value="8">8 years</data>, I've been building the infrastructure that makes Generative AI actually useful—transforming 
              research papers and prototype models into systems that handle millions of real-world queries, scale across enterprise 
              environments, and deliver returns measured in millions, not metrics.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At <span itemProp="worksFor" itemScope itemType="https://schema.org/Organization"><span itemProp="name">The Home Depot</span></span>, I architect the AI systems powering business decisions: LLM orchestration platforms that parse 
              contracts and generate insights, Knowledge-Graph RAG assistants serving <data value="200">200+ analysts</data>, and multi-modal pipelines 
              that cut manual work by <data value="60">60%</data> while targeting <data value="20000000">$20M</data> in optimization opportunities. Before that, I built data ecosystems 
              at <span itemProp="alumniOf" itemScope itemType="https://schema.org/Organization"><span itemProp="name">Harley Davidson</span></span>, predictive models at <span itemProp="alumniOf" itemScope itemType="https://schema.org/Organization"><span itemProp="name">Principal Financial</span></span>, and marketing intelligence systems that turned 
              <data value="300">$300</data> into <data value="3100">$3,100</data>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              What sets my work apart? I don't just implement models—I engineer end-to-end solutions. From ETL pipelines and data 
              architecture (BigQuery, GCP) to RAG systems and LLM evaluation frameworks, I build the full stack that makes AI 
              production-ready. <span itemProp="knowsAbout">GPT-4</span>, <span itemProp="knowsAbout">Gemini</span>, <span itemProp="knowsAbout">Vision Transformers</span>, <span itemProp="knowsAbout">Neo4j</span>—I've deployed them all, not in notebooks, but in systems 
              serving thousands of users daily.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress"><span itemProp="addressLocality">Atlanta</span></span> with a <span itemProp="alumniOf" itemScope itemType="https://schema.org/EducationalOrganization"><span itemProp="name">Master's in Business Statistics from University of Maryland</span></span>, I've worked across retail, 
              manufacturing, finance, and education. This cross-industry perspective taught me something critical: the best AI 
              solutions aren't the most sophisticated—they're the ones that solve real problems for real people, reliably, at scale.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative group">
              <img
                src={ajayPhoto}
                alt="Ajay Miryala - Generative AI and ML Engineer"
                className="rounded-2xl shadow-2xl w-full h-auto"
                itemProp="image"
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
              <p className="text-sm font-bold">
                <data value="8">8+</data> Years in AI/ML
              </p>
            </div>
            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <p className="text-xs text-muted-foreground mb-1">Location</p>
              <p className="text-sm font-bold">
                <span itemProp="addressLocality">Atlanta</span>, <span itemProp="addressRegion">GA</span>, <span itemProp="addressCountry">USA</span>
              </p>
            </div>
            <div itemProp="alumniOf" itemScope itemType="https://schema.org/EducationalOrganization">
              <p className="text-xs text-muted-foreground mb-1">Education</p>
              <p className="text-sm font-bold">
                <span itemProp="name">MS Business Statistics, UMD</span>
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Current Role</p>
              <p className="text-sm font-bold" itemProp="jobTitle">Gen AI & ML Engineer</p>
            </div>
          </div>
          
          {/* Technical Expertise */}
          <div className="mb-6 pb-6 border-b border-border">
            <p className="text-xs text-muted-foreground mb-3 font-semibold">Technical Expertise</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium" itemProp="knowsAbout">Generative AI</span>
              <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium" itemProp="knowsAbout">LLM Systems</span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium" itemProp="knowsAbout">RAG</span>
              <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium" itemProp="knowsAbout">Python</span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium" itemProp="knowsAbout">GCP</span>
              <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium" itemProp="knowsAbout">BigQuery</span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium" itemProp="knowsAbout">Vertex AI</span>
              <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium" itemProp="knowsAbout">TensorFlow</span>
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
          <div itemProp="awards">
            <p className="text-xs text-muted-foreground mb-3 font-semibold">Measurable Impact</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-secondary/30 rounded-lg" itemProp="award">
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
