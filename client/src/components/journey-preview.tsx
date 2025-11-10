import { Link } from "wouter";
import { ArrowRight, TrendingUp, Code, Award, Calendar, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ajayPhoto from "@assets/20240420_202714_1762722420285.jpg";

const journeyHighlights = [
  {
    year: "2025",
    title: "Generative AI & ML Engineer",
    company: "The Home Depot",
    dateRange: "Jan 2025 - Present",
    type: "Full-time",
    icon: TrendingUp,
    gradient: "from-blue-500 to-cyan-500",
    keyMetric: "55% faster analytics",
    highlights: ["GPT-4", "Gemini", "RAG Systems", "Contract Parsing"],
    achievements: ["Text Summarization", "Q&A Bots", "Prompt Optimization"],
  },
  {
    year: "2023",
    title: "Senior Data Scientist",
    company: "The Home Depot",
    dateRange: "Jun 2023 - Jan 2025",
    type: "Full-time",
    icon: Code,
    gradient: "from-green-500 to-emerald-500",
    keyMetric: "$20M savings target",
    highlights: ["Image Gen", "Stable Diffusion", "Vision Transformers", "BigQuery"],
    achievements: ["87% Accuracy", "Dynamic Pipelines", "Guided Search"],
  },
  {
    year: "2022",
    title: "Senior Data Analyst",
    company: "The Home Depot",
    dateRange: "Mar 2022 - Jun 2023",
    type: "Full-time",
    icon: Award,
    gradient: "from-purple-500 to-violet-500",
    keyMetric: "300+ associates impact",
    highlights: ["Adobe Analytics", "Tableau", "Data Studio", "Python"],
    achievements: ["Customer Insights", "Voice of Associates", "20% Faster Onboarding"],
  },
  {
    year: "2020",
    title: "Data Analyst & Engineer",
    company: "Harley Davidson",
    dateRange: "Feb 2020 - Mar 2022",
    type: "Full-time",
    icon: Zap,
    gradient: "from-orange-500 to-red-500",
    keyMetric: "80% faster processing",
    highlights: ["ETL Pipelines", "Power BI", "SAP", "Alteryx"],
    achievements: ["55% Less POs", "30% Better Inventory", "Data Modeling"],
  },
  {
    year: "2019",
    title: "Data Scientist",
    company: "Principal Financial",
    dateRange: "Aug 2019 - Dec 2019",
    type: "Internship",
    icon: Code,
    gradient: "from-indigo-500 to-purple-500",
    keyMetric: "78% ML accuracy",
    highlights: ["XGBoost", "Random Forest", "Python", "SQL Server"],
    achievements: ["Market Regime Prediction", "Russell 1000", "5% Better Confidence"],
  },
  {
    year: "2019",
    title: "Marketing Analyst",
    company: "Anahata Art & Design",
    dateRange: "May 2019 - Dec 2019",
    type: "Internship",
    icon: Target,
    gradient: "from-pink-500 to-rose-500",
    keyMetric: "200% traffic growth",
    highlights: ["Google Ads", "6K Keywords", "Web Analytics", "CPC Optimization"],
    achievements: ["$3100 Revenue", "113 Sales", "$300 Budget"],
  },
  {
    year: "2019",
    title: "Graduate Assistant",
    company: "University of Maryland",
    dateRange: "May 2019 - Dec 2019",
    type: "Part-time",
    icon: Award,
    gradient: "from-emerald-500 to-teal-500",
    keyMetric: "4000+ students served",
    highlights: ["SQL", "Student Records", "Academic Advisory", "Team Leadership"],
    achievements: ["10% Better Satisfaction", "10 Team Members", "Performance Analytics"],
  },
  {
    year: "2017",
    title: "Data Analyst",
    company: "Bridge Solutions",
    dateRange: "May 2017 - May 2018",
    type: "Full-time",
    icon: Calendar,
    gradient: "from-teal-500 to-cyan-500",
    keyMetric: "$1M cost reduction",
    highlights: ["Tableau", "SQL Server", "Docker", "IBM OMS"],
    achievements: ["Interactive Dashboards", "KPI Reporting", "Inventory Optimization"],
  },
];

export default function JourneyPreview() {
  return (
    <section id="about-journey" className="pt-4 pb-12 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* About Me Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
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

        {/* Professional Journey Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        {/* Journey Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {journeyHighlights.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-lg p-4 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Content */}
                <div>
                  <h3 className="text-sm font-bold mb-2 group-hover:text-primary transition-colors">
                    {milestone.title}
                  </h3>
                  
                  {/* Company & Date Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded font-medium">
                      {milestone.company}
                    </span>
                    <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded font-medium">
                      {milestone.dateRange}
                    </span>
                    {milestone.type !== 'Full-time' && (
                      <span className={`px-2 py-0.5 text-xs font-semibold rounded ${
                        milestone.type === 'Internship'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-amber-500/20 text-amber-400'
                      }`}>
                        {milestone.type}
                      </span>
                    )}
                  </div>
                  
                  {/* Tech Highlights */}
                  <div className="mb-2">
                    <p className="text-xs text-muted-foreground mb-1.5 font-semibold">Tech</p>
                    <div className="flex flex-wrap gap-1">
                      {milestone.highlights.map((tech, i) => (
                        <span key={i} className="px-1.5 py-0.5 bg-accent/10 text-accent text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Career Achievements */}
                  <div>
                    <p className="text-xs text-muted-foreground mb-1.5 font-semibold">Impact</p>
                    <div className="flex flex-wrap gap-1">
                      {milestone.achievements.map((achievement, i) => (
                        <span key={i} className={`px-1.5 py-0.5 bg-gradient-to-r ${milestone.gradient} bg-opacity-10 text-xs rounded font-medium`}>
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${milestone.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-lg`}></div>
              </div>
            );
          })}
        </div>

        {/* View Full Journey Button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/journey" className="flex items-center space-x-2" data-testid="link-view-full-journey">
              <span>View Full Journey</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
