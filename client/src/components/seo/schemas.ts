// JSON-LD Structured Data Schemas for GEO (Generative Engine Optimization)

// Helper function to format responsibilities arrays as Schema.org compliant Text
const formatResponsibilities = (items: string[]) => items.map(item => `• ${item}`).join('\n');

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
      "streetAddress": "2455 Paces Ferry Rd",
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

export const webPageSchema = (page: {
  name: string;
  description: string;
  url: string;
  dateModified?: string;
  breadcrumb?: Array<{ name: string; url: string }>;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": page.name,
  "description": page.description,
  "url": page.url,
  "inLanguage": "en-US",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Ajay Miryala - AI & ML Portfolio",
    "url": "https://ajaymiryala.com"
  },
  "author": {
    "@type": "Person",
    "name": "Ajay Miryala",
    "jobTitle": "Generative AI and ML Engineer",
    "url": "https://ajaymiryala.com"
  },
  "dateModified": page.dateModified || new Date().toISOString().split('T')[0],
  "breadcrumb": page.breadcrumb ? {
    "@type": "BreadcrumbList",
    "itemListElement": page.breadcrumb.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  } : undefined
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
      "streetAddress": "2455 Paces Ferry Rd",
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
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3700 W Juneau Ave",
      "addressLocality": "Milwaukee",
      "addressRegion": "WI",
      "addressCountry": "US"
    }
  },
  {
    "@type": "Organization",
    "@id": "https://ajaymiryala.com/#principal-financial",
    "name": "Principal Financial Group",
    "url": "https://www.principal.com",
    "sameAs": [
      "https://en.wikipedia.org/wiki/Principal_Financial_Group",
      "https://www.linkedin.com/company/principal-financial-group"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "711 High St",
      "addressLocality": "Des Moines",
      "addressRegion": "IA",
      "addressCountry": "US"
    }
  },
  {
    "@type": "Organization",
    "@id": "https://ajaymiryala.com/#umd",
    "name": "University of Maryland",
    "url": "https://www.umd.edu",
    "sameAs": [
      "https://en.wikipedia.org/wiki/University_of_Maryland,_College_Park",
      "https://www.rhsmith.umd.edu"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7999 Regents Dr",
      "addressLocality": "College Park",
      "addressRegion": "MD",
      "addressCountry": "US"
    }
  },
  {
    "@type": "Organization",
    "@id": "https://ajaymiryala.com/#bridge-solutions",
    "name": "Bridge Solutions",
    "url": "https://ajaymiryala.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Road No. 2, Banjara Hills",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    }
  },
  {
    "@type": "Organization",
    "@id": "https://ajaymiryala.com/#anahata",
    "name": "Anahata Art and Design",
    "url": "https://ajaymiryala.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "MG Road",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    }
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
    "description": "Lead Generative AI and ML Engineer architecting LLM orchestration platforms, Knowledge-Graph RAG assistants, and multi-modal pipelines. Delivered 55% reduction in analytics time and targeting $20M in optimization opportunities.",
    "responsibilities": formatResponsibilities([
      "Designed and developed scalable generative AI systems using transformer-based architectures (GPT-4, BERT, Gemini, Longformer) for text summarization, Q&A bots, and contract parsing.",
      "Led fine-tuning of LLMs with LoRA, QLoRA, and PEFT methods using HuggingFace Transformers to improve model alignment with Home Depot-specific customer and vendor datasets.",
      "Built and deployed image-to-text pipelines integrating Stable Diffusion and Vision Transformers for intelligent product tagging and visual search enhancements.",
      "Created custom prompt optimization frameworks and integrated GenAI tooling for internal analytics automation, reducing turnaround time by 55%.",
      "Implemented RLHF to train chat-based support agents and automated documentation tools, increasing task resolution accuracy by 38%.",
      "Established MLOps pipelines with TensorFlow Extended (TFX), Vertex AI Pipelines, and MLflow for model versioning, validation, and deployment in staging and production environments.",
      "Partnered with engineering, product, and marketing teams to align model outcomes with business KPIs through dashboards and experiment tracking.",
      "Developed a modular GenAI microservice architecture on GCP using Docker, Cloud Run, and Firestore to power multiple real-time analytics and automations.",
      "Published internal technical documentation and model cards to guide ethics review, reuse, and reliability tracking for all deployed GenAI solutions."
    ])
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
    "description": "Built dynamic image generation pipeline and house renovation prediction models achieving 87% accuracy with $20M marketing budget optimization target. Led team of 4 offshore resources optimizing ETL workflows and Big Query integration.",
    "responsibilities": formatResponsibilities([
      "Architected a robust, scalable dynamic image generation pipeline utilizing state-of-the-art vision models (Google Image Gen-3, Stable Diffusion) and advanced text generation models (Gemini-1.5 Pro, Text-Bison-32k), transforming Home Depot's guided search with enhanced visual relevance and accuracy.",
      "Integrated multiple AI models, including multi-modal and text embeddings (Text-embedding-004, Gecko@002), to automate image-keyword alignment, optimizing search coherence and improving product discovery across Home Depot's platform.",
      "Deployed LLM-powered automation for end-to-end process reporting, delivering scalable, on-demand PDF documentation with code explanations for technical and non-technical stakeholders, cutting manual reporting effort by 60%.",
      "Developed predictive models including image classification, object detection, and house renovation score prediction using Res-Net and Vision Transformers on MLS listing images provided by CoreLogic, achieving an accuracy of 87% and aiming to save $20 million in marketing budget.",
      "Led a team of 4 offshore resources (TCS) to optimize ETL workflows and develop ETL scripts in Analytical Workbench and Big Query, integrating data (~50TB) from 15 disparate sources (clickstream, orders, marketing data), resulting in a 40% increase in data processing.",
      "Built OLAP data cubes and architected databases, data warehouses to support Tableau Dashboards (SAIM Deck) and advanced data analysis, leveraging SQL optimization, clustering, partitioning, stored procedures, and functions on Google Cloud Big Query.",
      "Partnered with the Data Engineering team to migrate 25+ workflows from AWB Workbench to Google Data form, targeting significant process efficiencies by automating Big Query SQL workflows, dependency management, and job scheduling—expected to cut project timelines by 30-50% upon completion.",
      "Advancing data pipeline reliability and scalability through Data form's integrated testing, GIT version control, and optimized SQL transformations, with anticipated benefits of a 50% reduction in data error rates and enhanced handling of large datasets for improved operational efficiency.",
      "Empowered BACE (Brand Advocates and CEX) partners with advanced analytics tools, enabling real-time monitoring and post-event analysis during critical events such as Black Friday and Cyber Monday to track key metrics, improving strategic decision-making for various projects to enhance customer experience.",
      "Created data standards and implemented new methods of capturing tagging information in Adobe Analytics Tag Manager by working with the Adobe Analytics team (AAPES team) to gain new analytical insights on customer interaction across all Home Depot online platforms.",
      "Enabled 5 internal organizations to devise strategies for performing full category refreshes across all Home Depot online platforms to maintain and improve foundational stability of online categories (display taxonomy) and perform full-funnel analysis and optimization."
    ])
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
    "description": "Analyzed customer behavior across Home Depot platforms providing insights to 300+ associates, reduced onboarding time by 20%. Led Adobe Analytics training and Voice of Associates initiative.",
    "responsibilities": formatResponsibilities([
      "Analyzed customer behavior across Home Depot platforms to provide key insights to the Category Experience team (CEX) and Brand Advocate Team (BA) with over 300 associates by providing ad-hoc data, standardized real-time reporting, and offering business recommendations for senior executives.",
      "Enhanced the full-funnel customer experience by providing insights into online Category Pages, Product Listing Pages (PLP), and Product Information Pages (PIP).",
      "Constructed analytical dashboards using visualization tools like Tableau and Google Data Studio. Leveraged job orchestration tools such as Analytical Workbench and performed data manipulation using Big Query and Python (~70 hours/month).",
      "Delivered website performance analytics using Adobe Analytics, Tableau, and Big Query to derive analysis of 15+ events (Black Friday, Winter Sale, etc.) over the year to improve the Click-Through Rate (CTR) and Conversion Rate (CVR) by optimizing content placement.",
      "Led a team of 7 in the Voice of Associates (VOA) initiative, leveraging the Liftoff platform to streamline data science onboarding, reducing onboarding time by 20% and increasing satisfaction by 10% through department-specific insights shared with senior leadership.",
      "Acted as an Adobe Analytics Workspace SME, leading weekly Adobe Analytics Office Hours to provide live training and creating training resources and best practices.",
      "Fostered cross-functional partnerships, mentored junior analysts, delivered technical training and spearheaded various project initiatives."
    ])
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
    "description": "Built optimized ETL pipelines and data models reducing processing time by 80%, decreased purchase orders by 55% and inventory mismatches by 30%. Led User Acceptance Testing and root cause analysis initiatives.",
    "responsibilities": formatResponsibilities([
      "Performed in-depth analysis of general merchandise data to identify opportunities and develop proposals and recommendations for use by management.",
      "Designed, prepared, and manipulated data using Business Intelligence tools—Tableau, Power BI, and SAP Analytics Cloud—to identify user behavior and analyze trends and patterns, both independently and in collaboration with product managers and data modeling resources.",
      "Extracted, cleaned, and analyzed multiple data sources, and built optimized data models and ETL pipelines to support dashboard requirements using SQL and Alteryx, which improved the performance of existing reporting dashboards in SAP Analytics Cloud and helped reduce data processing time by 80%.",
      "Maintained, enhanced, and drove Root Cause Analysis in conjunction with SMEs to identify and resolve business process problems, leading to a decrease in open purchase orders by 55% and inventory count mismatches by 30%.",
      "Maintained the master dataset of the General Merchandise department and performed batch inserting/updating of accounts, product information, lead times, BOM, dealer information, and other objects in SAP using FLEX PLM.",
      "Worked with the Supply Chain Analyst and warehouse coordinators to perform error analysis on EDI transactions (IDoc Resolution), providing recommendations and analyzing all error data established for new product builds and launches, compiling and communicating weekly metrics to leadership.",
      "Led multiple rounds of User Acceptance Testing (UAT) by identifying appropriate stakeholders and building test scripts for each to execute."
    ])
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
    "description": "Predicted market regime of Russell 1000 companies achieving 78% ML accuracy and 5% improvement in investment confidence using machine learning algorithms.",
    "responsibilities": formatResponsibilities([
      "Devised the KPI's and predicted market regime of companies from Russell 1000 to evaluate prospective investments for the client.",
      "Performed data aggregation on 5.5 million rows of data using SQL aggregation techniques.",
      "Implemented data cleaning and hyperparameter tuning using machine learning algorithms in Python that resulted in an accuracy of 78%.",
      "Increased the prediction accuracy of investing in one company by ~5% by identifying the most important variables that increased the client's confidence in carrying out deals/investments.",
      "Tools and Libraries- Python, R, Microsoft SQL Server, Logistic Regression, Random Forest, XGBoost, dplyr, scipy.io, keras, numpy, matplotlib, sklearn."
    ])
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
    "description": "Managed Google Ads campaign with $300 budget achieving 200% increase in website traffic, 113 sales generating $3100 revenue, and optimized CPC to $0.11.",
    "responsibilities": formatResponsibilities([
      "Created, maintained, and managed a 3-week Google Ads Campaign with a total budget of $300 for an online gifting startup in India to understand their business, market competitors, popular selling products, and target audience.",
      "Managed to make 110 ad copies with 6,000 keywords, minimized cost-per-click to $0.11, achieved a 200% increase in website traffic (92% new Users/week), achieved 113 sales of products with $3100 in revenue, and improved the landing page experience.",
      "Proposed multiple recommendations for the potential new markets, product updates, and marketing campaign changes to the client after analyzing visits, page views, purchases, revenue, and conversion metrics from multiple data sources (web analytics data as well as external data)."
    ])
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
    "description": "Maintained records for 4000+ students, led team of 10 improving satisfaction by 10%. Designed visualizations to help academic advisors improve programs.",
    "responsibilities": formatResponsibilities([
      "Assessed, created and maintained student records (~4000 students) to identify low performing students to improve academic standing and disciplinary records.",
      "Performed data extraction using SQL to assist the academic advisors to implement various programs to improve a student's performance.",
      "Led a team of 10 undergraduate students to answer student inquiries that improved the satisfaction rate by 10%.",
      "Designed visualizations to understand and analyzed the career opportunities chosen by the students and helped advisors to improve the academic program based on the visualizations."
    ])
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
    "description": "Created interactive dashboards and achieved $1M cost reduction through inventory optimization. Introduced Docker application used by 75% of workforce.",
    "responsibilities": formatResponsibilities([
      "Created visually impactful and interactive dashboards in Tableau and Excel to report various key KPIs of various clients of Bridge Solutions.",
      "Handled and built relational databases, designed queries using Microsoft SQL Server, and created reports for analyzing and root-causing board failure data. Well-versed in finding patterns and trends in complex, multivariable data sets using Python in an agile environment.",
      "Created inventory targets by employing analytical abilities, data mining skills, and experience that resulted in a cost reduction of $1M.",
      "Introduced and developed Docker application to deploy IBM OMS 9.5 and WMS 9.5 which is used by 75% of the workforce."
    ])
  }
];
