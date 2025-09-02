import { useEffect, useState } from "react";
import { Code, Layers, Cloud, Wrench } from "lucide-react";

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

// VARIATION 1: Minimal Pill Style
export function SkillsVariation1() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            
            return (
              <div
                key={category.title}
                className={`transition-all duration-700 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="flex items-center mb-3">
                  <IconComponent className={`${category.color} text-lg mr-2`} />
                  <h3 className="text-sm font-semibold text-muted-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center px-2 py-1 bg-secondary/80 hover:bg-secondary text-xs rounded-full border border-border/50 transition-colors"
                    >
                      <span className="mr-1">{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// VARIATION 2: Compact Cards with Mini Progress Bars
export function SkillsVariation2() {
  const [mounted, setMounted] = useState(false);
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set());

  useEffect(() => {
    setMounted(true);
    setTimeout(() => {
      setVisibleSkills(new Set(skillCategories.map(cat => cat.title)));
    }, 300);
  }, []);

  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            const isVisible = visibleSkills.has(category.title);
            
            return (
              <div
                key={category.title}
                className={`quantum-card p-4 rounded-lg transition-all duration-700 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="flex items-center mb-3">
                  <IconComponent className={`${category.color} text-lg mr-2`} />
                  <h3 className="text-sm font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="flex items-center justify-between text-xs">
                      <span className="flex items-center">
                        <span className="mr-1 text-xs">{skill.icon}</span>
                        <span className="truncate">{skill.name}</span>
                      </span>
                      <div className="w-12 bg-secondary rounded-full h-1 overflow-hidden ml-2">
                        <div
                          className={`h-1 rounded-full transition-all duration-1000 ${
                            category.color === 'text-primary' ? 'bg-primary' : 'bg-accent'
                          }`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 50}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// VARIATION 3: Horizontal Badge Style
export function SkillsVariation3() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="space-y-6">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            
            return (
              <div
                key={category.title}
                className={`transition-all duration-700 ${
                  mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                }`}
                style={{ transitionDelay: `${categoryIndex * 150}ms` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center sm:w-48 flex-shrink-0">
                    <IconComponent className={`${category.color} text-lg mr-2`} />
                    <h3 className="text-sm font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 flex-1">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          category.color === 'text-primary' 
                            ? 'bg-primary/10 text-primary border border-primary/20' 
                            : 'bg-accent/10 text-accent border border-accent/20'
                        }`}
                      >
                        <span className="mr-1">{skill.icon}</span>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// VARIATION 4: Grid Icons with Hover Details
export function SkillsVariation4() {
  const [mounted, setMounted] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const allSkills = skillCategories.flatMap(category => 
    category.skills.map(skill => ({
      ...skill,
      category: category.title,
      categoryColor: category.color
    }))
  );

  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
          {allSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`relative group transition-all duration-500 ${
                mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 30}ms` }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="quantum-card aspect-square rounded-lg p-2 flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                <span className="text-lg mb-1">{skill.icon}</span>
                <span className="text-xs text-center truncate w-full">{skill.name}</span>
              </div>
              
              {hoveredSkill === skill.name && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10">
                  <div className="bg-background border border-border rounded-lg p-2 shadow-lg whitespace-nowrap">
                    <div className="text-xs font-medium">{skill.name}</div>
                    <div className="text-xs text-muted-foreground">{skill.category}</div>
                    <div className="flex items-center mt-1">
                      <div className="w-16 bg-secondary rounded-full h-1 overflow-hidden">
                        <div
                          className={`h-1 rounded-full ${
                            skill.categoryColor === 'text-primary' ? 'bg-primary' : 'bg-accent'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="text-xs ml-2">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.title} className="flex items-center">
                <IconComponent className={`${category.color} text-sm mr-1`} />
                <span className="text-xs text-muted-foreground">{category.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}