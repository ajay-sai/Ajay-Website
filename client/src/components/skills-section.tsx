import { useEffect, useState } from "react";
import { Code, Layers, Cloud, Wrench } from "lucide-react";
import { SkillsVariation1, SkillsVariation2, SkillsVariation3, SkillsVariation4 } from "./skills-variations";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "text-primary",
    skills: [
      { name: "Python", level: 95, icon: "🐍" },
      { name: "R", level: 85, icon: "📊" },
      { name: "SQL", level: 95, icon: "🗄️" },
      { name: "Spark", level: 85, icon: "⚡" },
      { name: "MATLAB", level: 80, icon: "📐" },
    ]
  },
  {
    title: "AI/ML Frameworks",
    icon: Layers,
    color: "text-accent",
    skills: [
      { name: "TensorFlow/TFX", level: 95, icon: "🧠" },
      { name: "HuggingFace", level: 90, icon: "🤗" },
      { name: "Scikit-learn", level: 95, icon: "⚛️" },
      { name: "Pandas/NumPy", level: 95, icon: "📋" },
      { name: "MLflow", level: 85, icon: "🔄" },
    ]
  },
  {
    title: "Cloud & Big Data",
    icon: Cloud,
    color: "text-primary",
    skills: [
      { name: "GCP/BigQuery", level: 95, icon: "🌐" },
      { name: "Vertex AI", level: 90, icon: "🔮" },
      { name: "AWS/Redshift", level: 85, icon: "☁️" },
      { name: "Dataflow", level: 85, icon: "🌊" },
      { name: "Neo4j", level: 80, icon: "🔗" },
    ]
  },
  {
    title: "Analytics & BI",
    icon: Wrench,
    color: "text-accent",
    skills: [
      { name: "Tableau", level: 90, icon: "📊" },
      { name: "Power BI", level: 85, icon: "📈" },
      { name: "Adobe Analytics", level: 85, icon: "📊" },
      { name: "Alteryx", level: 80, icon: "🛠️" },
      { name: "SAP Analytics", level: 75, icon: "📋" },
    ]
  },
];

// Mobile detection utility
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         (window.innerWidth <= 768);
};

export default function SkillsSection() {

  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-1 h-1 bg-primary/50 rounded-full"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-accent/50 rounded-full"></div>
      </div>
      


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text scroll-animate">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 scroll-animate"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto scroll-animate">
            Comprehensive expertise across the full spectrum of data science and AI technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            
            return (
              <div
                key={category.title}
                className="scroll-animate hover:scale-105"
                style={{ 
                  transitionDelay: `${categoryIndex * 100}ms`
                }}
              >
                <div className="quantum-card p-4 rounded-xl relative overflow-hidden group">
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-3">
                      <IconComponent className={`${category.color} text-lg mr-2 transition-all duration-300 group-hover:scale-110`} />
                      <h3 className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skill.name}
                          className={`inline-flex items-center px-2 py-1 bg-secondary/80 hover:bg-secondary text-xs rounded-full border border-border/50 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer ${
                            category.color === 'text-primary' ? 'hover:border-primary/50 hover:bg-primary/10' : 'hover:border-accent/50 hover:bg-accent/10'
                          }`}
                          style={{
                            animationDelay: `${skillIndex * 50}ms`
                          }}
                        >
                          <span className="mr-1 transition-transform duration-300 hover:rotate-12">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Subtle border glow on hover */}
                  <div className={`absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-${category.color === 'text-primary' ? 'primary' : 'accent'}/20 transition-all duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
