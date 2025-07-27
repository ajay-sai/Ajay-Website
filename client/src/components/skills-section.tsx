import { useEffect, useState } from "react";
import { Code, Layers, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    color: "text-primary",
    skills: [
      { name: "Python", level: 95, icon: "🐍" },
      { name: "R", level: 85, icon: "📊" },
      { name: "SQL", level: 90, icon: "🗄️" },
    ]
  },
  {
    title: "Frameworks",
    icon: Layers,
    color: "text-accent",
    skills: [
      { name: "TensorFlow", level: 90, icon: "🧠" },
      { name: "PyTorch", level: 85, icon: "🔥" },
      { name: "Scikit-learn", level: 95, icon: "⚛️" },
      { name: "Pandas", level: 95, icon: "📋" },
    ]
  },
  {
    title: "Cloud",
    icon: Cloud,
    color: "text-primary",
    skills: [
      { name: "AWS", level: 90, icon: "☁️" },
      { name: "GCP", level: 80, icon: "🌐" },
      { name: "Azure", level: 75, icon: "🔷" },
    ]
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "text-accent",
    skills: [
      { name: "Docker", level: 85, icon: "🐳" },
      { name: "Git", level: 95, icon: "📚" },
      { name: "Jupyter", level: 90, icon: "📔" },
    ]
  },
];

export default function SkillsSection() {
  const [mounted, setMounted] = useState(false);
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set());

  useEffect(() => {
    setMounted(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryTitle = entry.target.getAttribute('data-category');
            if (categoryTitle) {
              setTimeout(() => {
                setVisibleSkills(prev => new Set([...prev, categoryTitle]));
              }, 200);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillCards = document.querySelectorAll('[data-category]');
    skillCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [mounted]);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 quantum-dots opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text consciousness-expand">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            const isVisible = visibleSkills.has(category.title);
            
            return (
              <div
                key={category.title}
                data-category={category.title}
                className={`quantum-card p-6 rounded-xl shadow-lg transition-all duration-1000 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <IconComponent className={`${category.color} text-2xl mr-3 quantum-glow`} />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="flex items-center">
                        <span className="mr-2">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <div className="w-20 bg-secondary rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 rounded-full skill-progress transition-all duration-1500 ${
                            category.color === 'text-primary' ? 'bg-primary' : 'bg-accent'
                          }`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 100}ms`,
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
