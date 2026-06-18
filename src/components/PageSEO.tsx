import { Helmet } from "react-helmet-async";

const SITE_URL = "https://psilvia.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/silvia-photo.webp`;

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export const PageSEO = ({ title, description, path, ogImage = DEFAULT_OG_IMAGE, jsonLd }: PageSEOProps) => {
  const url = `${SITE_URL}${path}`;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Silvia Gómez, psicóloga y psicoterapeuta" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Silvia Gómez, psicóloga y psicoterapeuta" />
      <link rel="alternate" hreflang="es" href={url} />
      <link rel="alternate" hreflang="x-default" href={url} />
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
};
