const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rylkon",
  url: "https://rylkon.com",
  email: "hello@rylkon.com",
  description:
    "Programmatic SEO systems: validated data, strong templates, and controlled indexing.",
  areaServed: "Worldwide",
  knowsAbout: [
    "Programmatic SEO",
    "Technical SEO",
    "Content systems",
    "Indexing",
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
    />
  );
}
