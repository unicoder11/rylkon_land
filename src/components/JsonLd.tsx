"use client";

import { useI18n } from "@/i18n/LanguageProvider";

export function JsonLd() {
  const { t } = useI18n();

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rylkon",
    url: "https://rylkon.com",
    email: "hello@rylkon.com",
    description: t.jsonLd.orgDescription,
    areaServed: "Worldwide",
    knowsAbout: [
      "Programmatic SEO",
      "Organic Growth Infrastructure",
      "Knowledge graphs",
      "Technical SEO",
      "Indexing",
      "SEO programático",
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.jsonLd.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
