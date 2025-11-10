import { useEffect, useState, useMemo } from "react";
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
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
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

  // Memoize processed markdown content to avoid re-parsing
  const processedMarkdown = useMemo(() => {
    if (!selectedProject?.contentMarkdown) return '';
    return selectedProject.contentMarkdown.replace(/^# .+\n\n/, '');
  }, [selectedProject?.contentMarkdown]);

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
                          {processedMarkdown}
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
        <footer className="relative z-10 py-8 bg-gradient-to-t from-neural-primary via-background to-background border-t border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 max-w-3xl mx-auto">
                {/* Email */}
                <a 
                  href="mailto:sai.ajaysai@gmail.com"
                  className="group flex flex-col items-center p-3 bg-card hover:bg-card/80 rounded-lg border border-border transition-all duration-300"
                  data-testid="link-footer-email"
                >
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors mb-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-xs font-semibold mb-0.5">Email</div>
                  <div className="text-xs text-muted-foreground text-center leading-tight">sai.ajaysai@gmail.com</div>
                </a>

                {/* Phone */}
                <a 
                  href="tel:240-360-7905"
                  className="group flex flex-col items-center p-3 bg-card hover:bg-card/80 rounded-lg border border-border transition-all duration-300"
                  data-testid="link-footer-phone"
                >
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors mb-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-xs font-semibold mb-0.5">Phone</div>
                  <div className="text-xs text-muted-foreground">(240) 360-7905</div>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/ajay-sai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-3 bg-card hover:bg-card/80 rounded-lg border border-border transition-all duration-300"
                  data-testid="link-footer-linkedin"
                >
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors mb-2">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className="text-xs font-semibold mb-0.5">LinkedIn</div>
                  <div className="text-xs text-muted-foreground">ajay-sai</div>
                </a>
                
                {/* GitHub */}
                <a 
                  href="https://github.com/ajay-sai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-3 bg-card hover:bg-card/80 rounded-lg border border-border transition-all duration-300"
                  data-testid="link-footer-github"
                >
                  <div className="w-8 h-8 bg-foreground/20 rounded-full flex items-center justify-center group-hover:bg-foreground/30 transition-colors mb-2">
                    <svg className="w-4 h-4 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="text-xs font-semibold mb-0.5">GitHub</div>
                  <div className="text-xs text-muted-foreground">ajay-sai</div>
                </a>
              </div>

            <div className="text-center pt-4 border-t border-border/30">
              <div className="text-xs text-muted-foreground">
                © 2024 Ajay Miryala. Crafted with advanced web technologies and quantum-inspired design.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
