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
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Atlanta",
    "addressRegion": "GA",
    "addressCountry": "US"
  },
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
    "Production ML Systems",
    "GPT-4",
    "Gemini",
    "Neo4j",
    "BigQuery",
    "Vertex AI",
    "TensorFlow",
    "PyTorch",
    "Python",
    "GCP"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Generative AI and ML Engineer",
    "skills": "GPT-4, Gemini, RAG Systems, Neo4j, Knowledge Graphs, LLM Orchestration, BigQuery, Vertex AI, TensorFlow, Python, GCP, Production ML Infrastructure",
    "occupationLocation": {
      "@type": "City",
      "name": "Atlanta",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "GA",
        "addressCountry": "US"
      }
    },
    "experienceRequirements": "8+ years"
  },
  "award": [
    "$21M+ in cost savings delivered",
    "80% efficiency improvement in data processing",
    "87% ML model accuracy achievement",
    "4000+ users supported with production AI systems",
    "55% reduction in manual reporting time"
  ],
  "seeks": {
    "@type": "Demand",
    "itemOffered": {
      "@type": "Service",
      "name": "AI Engineering & ML Consulting",
      "serviceType": "Generative AI Development, LLM Architecture, RAG Systems, ML Infrastructure, Production AI Deployment"
    }
  },
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "University of Maryland, College Park",
      "description": "Master of Science in Business Statistics",
      "sameAs": "https://www.rhsmith.umd.edu/"
    },
    {
      "@type": "EducationalOrganization",
      "name": "SRM University",
      "description": "Bachelor of Technology in Computer Science",
      "sameAs": "https://www.srmist.edu.in/"
    }
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "The Home Depot",
    "description": "Generative AI and ML Engineer",
    "sameAs": "https://www.homedepot.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Atlanta",
      "addressRegion": "GA",
      "addressCountry": "US"
    }
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

// Organization schemas for employment history
export const organizationSchemas = [
  {
    "@type": "Organization",
    "@id": "https://ajaymiryala.com/#home-depot",
    "name": "The Home Depot",
    "url": "https://www.homedepot.com",
    "sameAs": [
      "https://en.wikipedia.org/wiki/The_Home_Depot",
      "https://www.linkedin.com/company/the-home-depot"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Atlanta",
      "addressRegion": "GA",
      "addressCountry": "US"
    }
  },
  {
    "@type": "Organization",
    "@id": "https://ajaymiryala.com/#harley-davidson",
    "name": "Harley Davidson Motor Company",
    "url": "https://www.harley-davidson.com",
    "sameAs": [
      "https://en.wikipedia.org/wiki/Harley-Davidson",
      "https://www.linkedin.com/company/harley-davidson"
    ]
  },
  {
    "@type": "Organization",
    "@id": "https://ajaymiryala.com/#principal-financial",
    "name": "Principal Financial Group",
    "url": "https://www.principal.com",
    "sameAs": [
      "https://en.wikipedia.org/wiki/Principal_Financial_Group",
      "https://www.linkedin.com/company/principal-financial-group"
    ]
  },
  {
    "@type": "Organization",
    "@id": "https://ajaymiryala.com/#umd",
    "name": "University of Maryland",
    "url": "https://www.umd.edu",
    "sameAs": [
      "https://en.wikipedia.org/wiki/University_of_Maryland,_College_Park",
      "https://www.rhsmith.umd.edu"
    ]
  },
  {
    "@type": "Organization",
    "@id": "https://ajaymiryala.com/#bridge-solutions",
    "name": "Bridge Solutions",
    "url": "https://ajaymiryala.com"
  },
  {
    "@type": "Organization",
    "@id": "https://ajaymiryala.com/#anahata",
    "name": "Anahata Art and Design",
    "url": "https://ajaymiryala.com"
  }
];

// Work experience schemas for employment history
export const workExperienceSchemas = [
  {
    "@type": "EmployeeRole",
    "roleName": "Generative AI and ML Engineer",
    "startDate": "2025-01",
    "employee": {
      "@type": "Person",
      "name": "Ajay Miryala"
    },
    "worksFor": {
      "@id": "https://ajaymiryala.com/#home-depot"
    },
    "workLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Atlanta",
        "addressRegion": "GA",
        "addressCountry": "US"
      }
    },
    "description": "Architecting LLM orchestration platforms, Knowledge-Graph RAG assistants, and multi-modal pipelines. Delivered 55% reduction in analytics time and targeting $20M in optimization opportunities."
  },
  {
    "@type": "EmployeeRole",
    "roleName": "Senior Data Scientist - Decision Analytics",
    "startDate": "2023-06",
    "endDate": "2025-01",
    "employee": {
      "@type": "Person",
      "name": "Ajay Miryala"
    },
    "worksFor": {
      "@id": "https://ajaymiryala.com/#home-depot"
    },
    "description": "Built dynamic image generation pipeline and house renovation prediction models achieving 87% accuracy with $20M marketing budget optimization target."
  },
  {
    "@type": "EmployeeRole",
    "roleName": "Senior Data Analyst",
    "startDate": "2022-03",
    "endDate": "2023-06",
    "employee": {
      "@type": "Person",
      "name": "Ajay Miryala"
    },
    "worksFor": {
      "@id": "https://ajaymiryala.com/#home-depot"
    },
    "description": "Analyzed customer behavior providing insights to 300+ associates, reduced onboarding time by 20%."
  },
  {
    "@type": "EmployeeRole",
    "roleName": "Data Analyst and Engineer",
    "startDate": "2020-02",
    "endDate": "2022-03",
    "employee": {
      "@type": "Person",
      "name": "Ajay Miryala"
    },
    "worksFor": {
      "@id": "https://ajaymiryala.com/#harley-davidson"
    },
    "description": "Built ETL pipelines reducing processing time by 80%, decreased purchase orders by 55% and inventory mismatches by 30%."
  },
  {
    "@type": "EmployeeRole",
    "roleName": "Data Scientist",
    "startDate": "2019-08",
    "endDate": "2019-12",
    "employee": {
      "@type": "Person",
      "name": "Ajay Miryala"
    },
    "worksFor": {
      "@id": "https://ajaymiryala.com/#principal-financial"
    },
    "description": "Predicted market regime of Russell 1000 companies achieving 78% ML accuracy and 5% improvement in investment confidence."
  },
  {
    "@type": "EmployeeRole",
    "roleName": "Marketing Analyst",
    "startDate": "2019-05",
    "endDate": "2019-12",
    "employee": {
      "@type": "Person",
      "name": "Ajay Miryala"
    },
    "worksFor": {
      "@id": "https://ajaymiryala.com/#anahata"
    },
    "description": "Managed Google Ads campaign with $300 budget achieving 200% increase in website traffic, 113 sales generating $3100 revenue, and optimized CPC to $0.11."
  },
  {
    "@type": "EmployeeRole",
    "roleName": "Graduate Assistant",
    "startDate": "2019-05",
    "endDate": "2019-12",
    "employee": {
      "@type": "Person",
      "name": "Ajay Miryala"
    },
    "worksFor": {
      "@id": "https://ajaymiryala.com/#umd"
    },
    "description": "Maintained records for 4000+ students, led team of 10 improving satisfaction by 10%."
  },
  {
    "@type": "EmployeeRole",
    "roleName": "Data Analyst",
    "startDate": "2017-05",
    "endDate": "2018-05",
    "employee": {
      "@type": "Person",
      "name": "Ajay Miryala"
    },
    "worksFor": {
      "@id": "https://ajaymiryala.com/#bridge-solutions"
    },
    "description": "Created interactive dashboards and achieved $1M cost reduction through inventory optimization."
  }
];
