import { storage } from "./storage";
import type { InsertProject } from "@shared/schema";

export async function seedProjects() {
  try {
    // Check if projects already exist
    const existingProjects = await storage.getAllProjects();
    if (existingProjects.length > 0) {
      console.log("Projects already seeded, skipping...");
      return;
    }

    const sampleProjects: InsertProject[] = [
      {
        slug: "rag-knowledge-graph-assistant",
        title: "Neo4j Knowledge-Graph RAG Assistant",
        summary: "Built enterprise RAG assistant with Neo4j knowledge graphs serving 200+ analysts at The Home Depot",
        coverImage: "",
        featured: true,
        tags: ["RAG", "Knowledge Graph", "LLM", "Neo4j", "Enterprise AI"],
        technologies: ["GPT-4", "Neo4j", "LangChain", "Python", "GCP", "BigQuery"],
        links: [],
        contentMarkdown: `# Neo4j Knowledge-Graph RAG Assistant

## Overview
Designed and deployed a production-grade Retrieval-Augmented Generation (RAG) system using Neo4j knowledge graphs to power intelligent Q&A capabilities for 200+ business analysts at The Home Depot.

## Challenge
Analysts needed quick access to complex, interrelated business data scattered across multiple sources. Traditional search methods were insufficient for discovering hidden relationships and contextual information.

## Solution Architecture

### 1. Knowledge Graph Construction
- Built a comprehensive knowledge graph using Neo4j to model relationships between products, customers, transactions, and business metrics
- Implemented automated data ingestion pipelines from BigQuery and other enterprise sources
- Created semantic relationships to capture business logic and domain knowledge

### 2. RAG Implementation
- Developed hybrid retrieval combining vector similarity search and graph traversal
- Integrated GPT-4 for natural language understanding and response generation
- Implemented context-aware prompting to leverage graph structure

### 3. Production Deployment
- Deployed on Google Cloud Platform with auto-scaling capabilities
- Implemented caching layers for frequently accessed queries
- Added comprehensive logging and monitoring using MLflow

## Impact
- **60% reduction** in manual reporting time
- Enabled self-service analytics for non-technical users
- Improved data discovery through relationship-based insights
- Served 200+ analysts with 95%+ accuracy in responses

## Technical Highlights
- Custom embedding models fine-tuned for domain-specific terminology
- Graph-based query expansion for comprehensive context retrieval
- Safety filters and hallucination detection mechanisms
- Real-time knowledge graph updates from streaming data sources

## Key Learnings
- Graph structures significantly improve RAG accuracy for relationship-heavy data
- Hybrid retrieval (vector + graph) outperforms vector-only approaches
- Production LLM systems require robust safety mechanisms and monitoring
`,
      },
      {
        slug: "dynamic-image-generation-pipeline",
        title: "AI-Powered Dynamic Image Generation for E-Commerce",
        summary: "Architected scalable image generation pipeline using Gen AI models to transform guided search experience",
        coverImage: "",
        featured: true,
        tags: ["Generative AI", "Image Generation", "E-Commerce", "Computer Vision"],
        technologies: ["Google Image Gen-3", "Stable Diffusion", "Gemini-1.5 Pro", "ResNet", "Vision Transformers", "BigQuery"],
        links: [],
        contentMarkdown: `# Dynamic Image Generation Pipeline

## Project Overview
Transformed The Home Depot's guided search experience by implementing an AI-powered dynamic image generation system that creates personalized product visualizations based on customer queries.

## Business Context
Customers searching for home improvement solutions often struggle to visualize how products might look in their specific use case. This gap between imagination and reality led to decision fatigue and abandoned purchases.

## Technical Implementation

### Phase 1: Model Selection & Testing
- Evaluated Google Image Gen-3, Stable Diffusion, and DALL-E
- Benchmarked generation quality, speed, and cost across different model architectures
- Selected Google Image Gen-3 for production due to superior quality and GCP integration

### Phase 2: Pipeline Architecture
- **Input Processing**: Customer query + product catalog data → structured generation prompts
- **Image Generation**: Parallel API calls to Gen AI models with fallback mechanisms
- **Quality Assurance**: Vision Transformer models for automated quality screening
- **Storage & CDN**: Optimized image delivery through global CDN

### Phase 3: Personalization Layer
- Implemented ResNet-based classification to understand customer intent
- Created prompt templates optimized for different product categories
- Added style transfer capabilities using Gemini-1.5 Pro for brand consistency

## Results & Impact
- Deployed to production serving 1M+ customer sessions monthly
- **87% accuracy** in renovation prediction models
- Potential **$20M marketing budget savings** through targeted campaigns
- Reduced time-to-decision for customers by 40%

## Technical Challenges Solved

### 1. Cost Optimization
- Implemented intelligent caching to avoid redundant generations
- Created tiered generation strategy (fast/quality modes)
- Reduced per-image cost by 65% through batch processing

### 2. Quality Consistency
- Built automated quality scoring pipeline using Vision Transformers
- Implemented fallback generation with different prompts for low-quality outputs
- Created feedback loop for continuous model improvement

### 3. Scale & Performance
- Handled peak loads of 10K+ image requests per minute
- Maintained sub-2-second generation times through parallel processing
- Implemented circuit breakers and graceful degradation

## Future Enhancements
- Integration with AR/VR for immersive product visualization
- User-uploaded photo integration for personalized room scenes
- Multi-modal search combining text and sketches
`,
      },
      {
        slug: "llm-orchestration-multi-agent-system",
        title: "Multi-LLM Orchestration System with Safety Filters",
        summary: "Designed production LLM orchestration with structured outputs and comprehensive safety mechanisms",
        coverImage: "",
        featured: true,
        tags: ["LLM Orchestration", "AI Safety", "Production ML", "Agent Systems"],
        technologies: ["GPT-4", "Gemini", "LangChain", "Pydantic", "FastAPI", "MLflow"],
        links: [],
        contentMarkdown: `# Multi-LLM Orchestration System

## Executive Summary
Built a production-ready multi-LLM orchestration platform enabling safe, reliable, and cost-effective deployment of large language models for enterprise use cases at The Home Depot.

## System Architecture

### Orchestration Layer
- **Model Router**: Intelligent routing based on task complexity, cost, and latency requirements
- **Load Balancer**: Distributed requests across multiple LLM providers (OpenAI, Google, Anthropic)
- **Fallback Mechanisms**: Automatic failover when primary models are unavailable

### Structured Output Framework
- Leveraged Pydantic for type-safe LLM outputs
- Implemented schema validation at runtime
- Created domain-specific output templates for common use cases

### Safety & Compliance Layer
- **Content Filters**: Multi-stage filtering for inappropriate content
- **PII Detection**: Automated redaction of personally identifiable information
- **Hallucination Detection**: Fact-checking mechanisms for critical outputs
- **Audit Logging**: Comprehensive logging for compliance and debugging

## Use Cases Implemented

### 1. Text Summarization
- Contract parsing and key term extraction
- Report generation from analytics data
- Email summarization for executive briefings

### 2. Q&A Bots
- Customer service automation
- Internal knowledge base queries
- Product information retrieval

### 3. Data Transformation
- Unstructured text → structured data conversion
- Legacy document digitization
- Multi-format data normalization

## Performance Metrics
- **55% reduction** in analytics turnaround time
- 99.5% uptime across all LLM endpoints
- Sub-500ms p95 latency for standard queries
- 40% cost savings through optimal model routing

## Technical Innovation

### Prompt Engineering Framework
- Created reusable, versioned prompt templates for consistency
- Implemented context injection and few-shot examples
- Added safety instructions and guardrails to all prompts
- Built template rendering system for dynamic prompt generation

### Model Selection Strategy
- Fast models (GPT-3.5) for simple classification tasks
- Powerful models (GPT-4) for complex reasoning
- Specialized models (Code Llama) for technical content
- Cost-performance optimization through A/B testing

## Safety Architecture

### Input Validation
1. Length checking and truncation
2. Injection attack detection
3. Rate limiting per user/endpoint

### Output Verification
1. Schema validation (Pydantic models)
2. Confidence scoring
3. Human-in-the-loop for high-stakes decisions

### Monitoring & Observability
- Real-time dashboards showing model performance
- Alert systems for anomalous behavior
- Cost tracking and budget controls

## Lessons Learned
- Multi-model strategies provide resilience and cost flexibility
- Structured outputs (via Pydantic) eliminate 90% of parsing errors
- Safety filters must be layered - no single solution is sufficient
- Prompt versioning and A/B testing are critical for production LLMs

## Future Roadmap
- Integration of open-source models (Llama 3, Mistral)
- Fine-tuning workflows for domain-specific tasks
- Expanded agent capabilities with tool usage
- Multi-modal support (vision, audio, video)
`,
      },
    ];

    console.log("Seeding projects...");
    for (const project of sampleProjects) {
      await storage.createProject(project);
      console.log(`Seeded project: ${project.title}`);
    }
    console.log("Projects seeded successfully!");
  } catch (error) {
    console.error("Error seeding projects:", error);
  }
}
