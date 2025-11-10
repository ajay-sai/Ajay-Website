import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string[];
  schema?: object;
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage,
  keywords,
  schema,
}: SEOProps) {
  const siteName = "Ajay Miryala - Generative AI and ML Engineer";
  const defaultImage = "https://placehold.co/1200x630/orange/white?text=Ajay+Miryala";
  const currentUrl = canonical || window.location.href;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph Tags for Social Media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      
      {/* Language and Geo Meta Tags */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-GA" />
      <meta name="geo.placename" content="Atlanta" />
      <meta name="geo.position" content="33.7490;-84.3880" />
      <meta name="ICBM" content="33.7490, -84.3880" />
      
      {/* Target Audience and Coverage */}
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="target" content="all" />
      <meta name="audience" content="AI Engineers, ML Engineers, Data Scientists, Tech Recruiters, Engineering Managers" />
      <meta name="subject" content="Generative AI, Machine Learning, LLM Systems, Production AI" />
      
      {/* Additional Meta Tags for AI/Search Engines */}
      <meta name="author" content="Ajay Miryala" />
      <meta name="copyright" content="© 2024 Ajay Miryala" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
      
      {/* JSON-LD Structured Data for AI Search Engines */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
