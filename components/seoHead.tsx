import Head from "next/head";

export default function SEOHead() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Your Car Assistance Service Name",
    "url": "https://yourdomain.com",
    "telephone": "+1234567890",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": "City",
      "addressRegion": "State",
      "postalCode": "12345",
      "addressCountry": "Country",
    },
    "openingHours": "Mo,Tu,We,Th,Fr 08:00-18:00",
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  );
}
