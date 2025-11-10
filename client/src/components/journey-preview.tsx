import { Link } from "wouter";
import { ArrowRight, TrendingUp, Code, Award, Calendar, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Journey Cards - Left Side */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {journeyHighlights.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-lg p-4 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Year Badge */}
                <div className="absolute -top-2 -right-2">
                  <div className={`px-3 py-1 bg-gradient-to-r ${milestone.gradient} text-white text-xs font-bold rounded-full shadow-md`}>
                    {milestone.year}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-3 flex items-center">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${milestone.gradient} p-0.5 flex-shrink-0`}>
                    <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-sm font-bold mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-xs text-primary font-semibold mb-1">{milestone.company}</p>
                  
                  {/* Type & Date Range */}
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    {milestone.type !== 'Full-time' && (
                      <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded ${
                        milestone.type === 'Internship'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-amber-500/20 text-amber-400'
                      }`}>
                        {milestone.type}
                      </span>
                    )}
                    <p className="text-xs text-muted-foreground">{milestone.dateRange}</p>
                  </div>
                  
                  {/* Key Metric Badge */}
                  <div className={`inline-block px-2 py-1 bg-gradient-to-r ${milestone.gradient} bg-opacity-10 rounded text-xs font-semibold`}>
                    {milestone.keyMetric}
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${milestone.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-lg`}></div>
              </div>
            );
          })}
            </div>
          </div>

          {/* Career Summary - Right Side (SEO/LLM Optimized) */}
          <div className="lg:col-span-3">
            <div className="sticky top-24 bg-card border border-border rounded-lg p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-4 gradient-text">Career Highlights</h3>
                
                {/* Key Stats - Structured for LLMs */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">8+ Years Experience</p>
                      <p className="text-xs text-muted-foreground">Data Science & AI Engineering</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">5 Companies</p>
                      <p className="text-xs text-muted-foreground">Fortune 500 & Startups</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Master's Degree</p>
                      <p className="text-xs text-muted-foreground">Business Analytics, UMD</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <h4 className="text-sm font-bold mb-3">Core Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">Generative AI</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium">LLM Systems</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">RAG</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium">ML Engineering</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">Data Analytics</span>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <h4 className="text-sm font-bold mb-3">Impact Metrics</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Cost Savings</span>
                    <span className="text-sm font-bold text-green-400">$21M+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Efficiency Gains</span>
                    <span className="text-sm font-bold text-blue-400">80%+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Users Impacted</span>
                    <span className="text-sm font-bold text-purple-400">4000+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
