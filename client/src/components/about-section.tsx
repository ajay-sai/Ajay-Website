import { getImageUrl } from "@/lib/gcs-utils";

// Profile photo served from Cloud Storage with CDN caching
const ajayPhoto = getImageUrl("profile/20240420_202714_1762722420285.jpg");

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
          <meta itemProp="jobTitle" content="Principal AI/ML Engineer" />
          {/* Content */}
          <div className="space-y-4" itemProp="description">
            <p className="text-base font-semibold text-foreground leading-relaxed">
              Principal AI/ML Engineer | AI Foundry – Framework Team, AT&T | 9+ Years Exp | 5x GCP certified | 2x AWS AI certified
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              I build production AI systems that turn messy business problems into measurable outcomes—combining deep Gen AI/ML engineering, strong statistics, and pragmatic platform design.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              At <span itemProp="worksFor" itemScope itemType="https://schema.org/Organization"><span itemProp="name">AT&T</span></span>, I am a Principal AI/ML Engineer on the <strong className="text-foreground">AI Foundry – Framework Team</strong>, the team responsible for all Agentic applications across AT&T's enterprise. I architect and deliver scalable agentic application frameworks enabling multi-agent orchestration, tool use, and autonomous decision-making at telecom scale.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Previously at <strong className="text-foreground">The Home Depot</strong>, I led architecture and delivery of enterprise AI solutions driving <data value="20000000">$20M+</data> projected cost savings and <data value="80">80%+</data> efficiency gains. I built multimodal pipelines and multi agent systems + RAG applications serving <data value="200">200+</data> daily users, cutting manual work by <data value="60">60%</data> and improving decision velocity.
            </p>

            <h4 className="text-lg font-bold text-foreground mt-6 mb-3">What I do best</h4>
            <ul className="list-none space-y-2 text-muted-foreground">
              <li className="text-base leading-relaxed">
                <strong className="text-foreground">Generative AI/ML:</strong> Multi-agent and RAG applications; model selection and prompt/tooling; evaluation + guardrails; end-to-end AIOps on Vertex AI, OpenAI/Gemini/Claude.
              </li>
              <li className="text-base leading-relaxed">
                <strong className="text-foreground">Data Science & Engineering:</strong> Lead team of 4 analysts/engineers delivering predictive models (XGBoost, ResNet, ViT) and modernizing 30+ ETL workflows, integrating 50TB+ data.
              </li>
              <li className="text-base leading-relaxed">
                <strong className="text-foreground">Strategy & Execution:</strong> Translate exec goals into AI roadmap; partner with product/engineering/security to ship reliable systems with clear SLAs.
              </li>
            </ul>

            <h4 className="text-lg font-bold text-foreground mt-6 mb-3">How I operate</h4>
            <ul className="list-disc list-inside space-y-1.5 text-muted-foreground">
              <li className="text-base leading-relaxed">
                <strong className="text-foreground">Build like an owner:</strong> crisp design docs, success metrics, prototype → hardened service.
              </li>
              <li className="text-base leading-relaxed">
                <strong className="text-foreground">Engineer for scale:</strong> distributed pipelines, event-driven patterns, cost-aware inference.
              </li>
              <li className="text-base leading-relaxed">
                <strong className="text-foreground">Measure everything:</strong> offline/online evals, A/B tests, post-launch monitoring.
              </li>
              <li className="text-base leading-relaxed">
                <strong className="text-foreground">Mentor and raise the bar:</strong> code reviews, hiring support, enabling teams safely.
              </li>
            </ul>

            <h4 className="text-lg font-bold text-foreground mt-6 mb-3">Selected stack</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Python, SQL, PyTorch/TensorFlow, Hugging Face, FastAPI; LangChain/LangGraph, LlamaIndex, GraphRAG; Neo4j/Pinecone; vLLM, Ray Serve, MLflow, Docker, Kubernetes; GCP (BigQuery, Vertex AI) + AWS (Bedrock, Lambda).
            </p>

            <h4 className="text-lg font-bold text-foreground mt-6 mb-3">Certifications</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">GCP</strong> – Generative AI Leader | Professional Data Engineer | Professional ML Engineer | Professional Cloud Database Engineer<br />
              <strong className="text-foreground">AWS</strong> - Certified AI Practitioner | Certified Generative AI Developer – Professional
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed italic mt-4">
              Based in <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress"><span itemProp="addressLocality">Atlanta</span></span>; Open to relocation | Contact: sai.ajaysai@gmail.com | 240-360-7905
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
                <data value="9">9+</data> Years in AI/ML
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
              <p className="text-sm font-bold" itemProp="jobTitle">Principal AI/ML Engineer, AT&T</p>
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
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-md font-medium">Telecom</span>
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-md font-medium">Retail</span>
                <span className="px-2 py-1 bg-orange-500/10 text-orange-400 text-xs rounded-md font-medium">Manufacturing</span>
                <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 text-xs rounded-md font-medium">Finance</span>
                <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-md font-medium">Education</span>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-3 font-semibold">Companies</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-md font-medium">AT&T</span>
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
