import Head from "next/head";

export default function SEOHead() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "امداد خودرو جوکار", // Your service name in Persian
    "url": "https://emdadjoocar.ir", // Replace with your actual domain
    "telephone": "+989177483447", // Replace with your actual contact number
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "خیابان اصلی، پلاک 12", // Your street address
      "addressLocality": "سروستان",          // Your city
      "addressRegion": "فارس",               // Your region
      "postalCode": "1234567890",            // Your postal code
      "addressCountry": "IR"
    },
    "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59" // 24/7 service
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
