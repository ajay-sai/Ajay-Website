import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ThemeProvider } from "@/contexts/theme-context";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useCursorEffects } from "@/hooks/use-cursor-effects";
import Navigation from "@/components/navigation";
import ParticleSystem from "@/components/particle-system";
import QuantumBackground from "@/components/quantum-background";
import SEOHead from "@/components/seo/SEOHead";
import { personSchema, breadcrumbSchema, createProjectSchema } from "@/components/seo/schemas";
import type { Project, ProjectListItem } from "@shared/schema";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ExternalLink, Tag, Code } from "lucide-react";

export default function Projects() {
  useScrollAnimation();
  useCursorEffects();
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);

  const { data: projects, isLoading } = useQuery<ProjectListItem[]>({
    queryKey: ['/api/projects'],
  });

  const { data: selectedProject, isLoading: isLoadingProject } = useQuery<Project>({
    queryKey: ['/api/projects', selectedProjectSlug],
    enabled: !!selectedProjectSlug,
  });

  useEffect(() => {
    document.body.classList.add('quantum-reality');
    
    return () => {
      document.body.classList.remove('quantum-reality');
    };
  }, []);

  // Auto-select first project if available
  useEffect(() => {
    if (projects && projects.length > 0 && !selectedProjectSlug) {
      setSelectedProjectSlug(projects[0].slug);
    }
  }, [projects, selectedProjectSlug]);

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <SEOHead
        title="AI Projects & Case Studies - Ajay Miryala | Technical Deep-Dives"
        description="Explore detailed case studies and technical deep-dives into production AI projects, including Neo4j RAG systems, LLM orchestration platforms, dynamic image generation pipelines, and enterprise ML deployments."
        keywords={["AI Projects", "Case Studies", "RAG Systems", "LLM Orchestration", "Knowledge Graphs", "Production ML", "Machine Learning Projects"]}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            personSchema,
            breadcrumbSchema([
              { name: "Home", url: window.location.origin },
              { name: "Projects", url: `${window.location.origin}/projects` }
            ]),
            ...(selectedProject ? [createProjectSchema({
              name: selectedProject.title,
              description: selectedProject.summary,
              technologies: selectedProject.technologies,
              url: `${window.location.origin}/projects#${selectedProject.slug}`
            })] : [])
          ]
        }}
      />
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
        <QuantumBackground />
        <ParticleSystem />
        
        <Navigation />
        
        <main className="relative z-10 pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                Projects & Case Studies
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Detailed technical walkthroughs and tutorials for my AI/ML projects
              </p>
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-lg text-muted-foreground">Loading projects...</div>
              </div>
            ) : projects && projects.length > 0 ? (
              <div className="grid lg:grid-cols-12 gap-8">
                {/* Left Sidebar - Project List */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="space-y-3">
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        onClick={() => setSelectedProjectSlug(project.slug)}
                        className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                          selectedProjectSlug === project.slug
                            ? 'bg-primary/20 border-2 border-primary shadow-lg'
                            : 'bg-secondary hover:bg-secondary/80 border-2 border-transparent'
                        }`}
                        data-testid={`project-card-${project.slug}`}
                      >
                        {project.coverImage && (
                          <img
                            src={project.coverImage}
                            alt={project.title}
                            className="w-full h-32 object-cover rounded-md mb-3"
                          />
                        )}
                        <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {project.summary}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Panel - Project Detail */}
                <div className="lg:col-span-8">
                  {isLoadingProject ? (
                    <div className="bg-card border border-border rounded-lg p-12 text-center">
                      <div className="text-lg text-muted-foreground">Loading project details...</div>
                    </div>
                  ) : selectedProject ? (
                    <div className="bg-card border border-border rounded-lg p-8 shadow-xl" data-testid="project-detail-panel">
                      {/* Project Title */}
                      <h1 className="text-4xl font-bold mb-6 text-foreground" data-testid={`project-title-${selectedProject.slug}`}>
                        {selectedProject.title}
                      </h1>

                      {selectedProject.coverImage && (
                        <img
                          src={selectedProject.coverImage}
                          alt={selectedProject.title}
                          className="w-full h-64 object-cover rounded-lg mb-6"
                        />
                      )}

                      {/* Metadata Grid */}
                      <div className="grid gap-4 mb-8 p-4 bg-secondary/30 rounded-lg border border-border/50">
                        {/* Tags */}
                        <div>
                          <div className="text-sm font-semibold text-muted-foreground mb-2 flex items-center">
                            <Tag className="w-4 h-4 mr-1" />
                            Skills
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-primary/15 text-primary rounded-full text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <div className="text-sm font-semibold text-muted-foreground mb-2 flex items-center">
                            <Code className="w-4 h-4 mr-1" />
                            Tech Stack
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-accent/15 text-accent rounded-md text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        {selectedProject.links && selectedProject.links.length > 0 && (
                          <div>
                            <div className="text-sm font-semibold text-muted-foreground mb-2 flex items-center">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Links
                            </div>
                            <div className="flex flex-wrap gap-3">
                              {selectedProject.links.map((link, index) => (
                                <a
                                  key={index}
                                  href={link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:text-primary/80 underline text-sm"
                                  data-testid={`project-link-${index}`}
                                >
                                  Link {index + 1}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Markdown Content */}
                      <div className="prose prose-lg dark:prose-invert max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {selectedProject.contentMarkdown.replace(/^# .+\n\n/, '')}
                        </ReactMarkdown>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-card border border-border rounded-lg p-12 text-center">
                      <p className="text-muted-foreground">
                        Select a project from the list to view details
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground mb-4">
                  No projects available yet. Check back soon!
                </p>
                <p className="text-sm text-muted-foreground">
                  Projects will be added with detailed case studies and technical tutorials.
                </p>
              </div>
            )}
          </div>
        </main>
      
        {/* Footer */}
        <footer className="relative z-10 py-16 bg-gradient-to-t from-neural-primary via-background to-background border-t border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <div className="text-3xl font-bold gradient-text">Ajay Miryala</div>
                <p className="text-xl text-muted-foreground">Generative AI and ML Engineer | AI Innovator</p>
                <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
                  Building scalable AI systems and transforming businesses through cutting-edge machine learning solutions.
                </p>
              </div>
              
              <div className="pt-8 border-t border-border/30">
                <div className="text-sm text-muted-foreground">
                  © 2024 Ajay Miryala. Crafted with advanced web technologies and quantum-inspired design.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
