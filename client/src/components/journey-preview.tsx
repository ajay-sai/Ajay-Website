import { Link } from "wouter";
import { ArrowRight, TrendingUp, Code, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const journeyHighlights = [
  {
    year: "2025",
    title: "Generative AI and ML Engineer",
    company: "The Home Depot",
    dateRange: "January 2025 - Present",
    icon: TrendingUp,
    gradient: "from-blue-500 to-cyan-500",
    achievements: [
      "55% reduction in analytics turnaround time through custom prompt optimization",
      "Technologies: GPT-4, Gemini, BERT, Vertex AI, MLflow",
    ],
  },
  {
    year: "2023",
    title: "Senior Data Scientist",
    company: "The Home Depot",
    dateRange: "June 2023 - January 2025",
    icon: Code,
    gradient: "from-green-500 to-emerald-500",
    achievements: [
      "87% accuracy in house renovation prediction targeting $20M marketing savings",
      "Technologies: Google Image Gen-3, Stable Diffusion, Vision Transformers",
    ],
  },
  {
    year: "2020",
    title: "Data Analyst and Engineer",
    company: "Harley Davidson",
    dateRange: "February 2020 - March 2022",
    icon: Award,
    gradient: "from-orange-500 to-red-500",
    achievements: [
      "80% reduction in data processing time through optimized ETL pipelines",
      "Technologies: Tableau, Power BI, SAP Analytics Cloud, Alteryx",
    ],
  },
];

export default function JourneyPreview() {
  return (
    <section id="journey-preview" className="py-20 bg-gradient-to-br from-secondary/50 via-background to-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A snapshot of my career progression from data analytics to generative AI engineering
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {journeyHighlights.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-xl p-6 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Year Badge */}
                <div className="absolute -top-4 left-6">
                  <div className={`px-4 py-1 bg-gradient-to-r ${milestone.gradient} text-white text-sm font-bold rounded-full shadow-lg`}>
                    {milestone.year}
                  </div>
                </div>

                {/* Icon */}
                <div className="mt-4 mb-6 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${milestone.gradient} p-0.5`}>
                    <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                      <Icon className={`w-8 h-8 bg-gradient-to-br ${milestone.gradient} bg-clip-text text-transparent`} style={{ 
                        stroke: 'url(#gradient)',
                        fill: 'none'
                      }} />
                      <svg width="0" height="0">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                            <stop offset="100%" stopColor="rgb(6, 182, 212)" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-primary font-semibold mb-1">{milestone.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">{milestone.dateRange}</p>
                  
                  <div className="space-y-2 text-left">
                    {milestone.achievements.map((achievement, i) => (
                      <p key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </p>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${milestone.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl`}></div>
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
