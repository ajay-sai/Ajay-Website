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

export default function SkillsSection() {
  const [selectedVariation, setSelectedVariation] = useState(1);

  // For demo purposes, show all 4 variations
  return (
    <div className="space-y-12">
      {/* Variation Selector */}
      <div className="text-center py-8 bg-secondary/20">
        <h3 className="text-2xl font-bold mb-4">Choose Your Preferred Skills Layout:</h3>
        <div className="flex justify-center gap-4 flex-wrap">
          {[
            { id: 1, name: "Minimal Pills" },
            { id: 2, name: "Compact Cards" },
            { id: 3, name: "Horizontal Badges" },
            { id: 4, name: "Grid Icons" }
          ].map((variant) => (
            <button
              key={variant.id}
              onClick={() => setSelectedVariation(variant.id)}
              className={`px-4 py-2 rounded-lg border transition-all ${
                selectedVariation === variant.id
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background border-border hover:border-primary/50'
              }`}
            >
              Variation {variant.id}: {variant.name}
            </button>
          ))}
        </div>
      </div>

      {/* Show all variations for comparison */}
      <div className="space-y-16">
        <div className="border-2 border-primary/20 rounded-lg p-1">
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold text-primary">Variation 1: Minimal Pills</h4>
            <p className="text-sm text-muted-foreground">Clean, minimal design with skill tags</p>
          </div>
          <SkillsVariation1 />
        </div>

        <div className="border-2 border-accent/20 rounded-lg p-1">
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold text-accent">Variation 2: Compact Cards</h4>
            <p className="text-sm text-muted-foreground">Small cards with mini progress bars</p>
          </div>
          <SkillsVariation2 />
        </div>

        <div className="border-2 border-primary/20 rounded-lg p-1">
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold text-primary">Variation 3: Horizontal Badges</h4>
            <p className="text-sm text-muted-foreground">Category-grouped horizontal layout</p>
          </div>
          <SkillsVariation3 />
        </div>

        <div className="border-2 border-accent/20 rounded-lg p-1">
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold text-accent">Variation 4: Grid Icons</h4>
            <p className="text-sm text-muted-foreground">Icon grid with hover details</p>
          </div>
          <SkillsVariation4 />
        </div>
      </div>
    </div>
  );
}
