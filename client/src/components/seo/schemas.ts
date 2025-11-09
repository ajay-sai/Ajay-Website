// JSON-LD Structured Data Schemas for GEO (Generative Engine Optimization)

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ajay Miryala",
  "jobTitle": "Generative AI and ML Engineer",
  "description": "Experienced Generative AI and ML Engineer specializing in building scalable AI systems, RAG architectures, LLM orchestration, and production-grade machine learning solutions",
  "url": "https://ajaymiryala.com",
  "sameAs": [
    "https://www.linkedin.com/in/ajay-sai/",
    "https://github.com/ajay-sai"
  ],
  "email": "sai.ajaysai@gmail.com",
  "telephone": "+1-240-360-7905",
  "knowsAbout": [
    "Generative AI",
    "Large Language Models",
    "RAG (Retrieval-Augmented Generation)",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Knowledge Graphs",
    "LLM Orchestration",
    "Computer Vision",
    "Data Science",
    "MLOps",
    "Production ML Systems"
  ],
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "University of Maryland, College Park",
      "description": "Master of Science in Business Analytics"
    },
    {
      "@type": "EducationalOrganization",
      "name": "SRM University",
      "description": "Bachelor of Technology in Computer Science"
    }
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "The Home Depot",
    "description": "Generative AI and ML Engineer"
  }
};

export const createProjectSchema = (project: {
  name: string;
  description: string;
  url?: string;
  technologies: string[];
  datePublished?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  "name": project.name,
  "description": project.description,
  "url": project.url,
  "programmingLanguage": project.technologies,
  "author": {
    "@type": "Person",
    "name": "Ajay Miryala",
    "jobTitle": "Generative AI and ML Engineer"
  },
  "datePublished": project.datePublished,
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
