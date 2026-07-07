// ============================================
// JSON-LD SCHEMA DEFINITIONS FOR MACHINERY MOVERS
// ============================================

const BASE_URL = 'https://www.machinerymovers.info';
const COMPANY_NAME = 'Machinery Movers';
const LOGO_URL = `${BASE_URL}/Logo.png`;

// 1. ORGANIZATION SCHEMA
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": COMPANY_NAME,
  "url": BASE_URL,
  "logo": LOGO_URL,
  "description": "Safe, insured heavy machinery relocation, plant shifting, and factory relocation services across India with 25+ years of experience.",
  "foundingDate": "1999",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "#2102 & 2103, BCCHS Layout, Vajarahalli, Opp Sharma Transport Metro Pillar Number 249, Kanakapura Main Road",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560109",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9980335552",
    "contactType": "Customer Service",
    "email": "chinnappa@machinerymovers.co.in",
    "availableLanguage": ["English", "Hindi", "Kannada"]
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "India"
    }
  ]
};

// 2. LOCAL BUSINESS SCHEMA
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": COMPANY_NAME,
  "description": "South India’s premier partner for heavy machinery relocation, crane coordination, and rigging operations.",
  "url": BASE_URL,
  "telephone": "+91-9980335552",
  "email": "chinnappa@machinerymovers.co.in",
  "image": `${BASE_URL}/Logo.png`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "#2102 & 2103, BCCHS Layout, Vajarahalli, Opp Sharma Transport Metro Pillar Number 249, Kanakapura Main Road",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560109",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.8721922",
    "longitude": "77.5344487"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "priceRange": "$$"
};

// 3. WEBSITE SCHEMA
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": COMPANY_NAME,
  "url": BASE_URL,
  "publisher": {
    "@type": "Organization",
    "name": COMPANY_NAME,
    "logo": {
      "@type": "ImageObject",
      "url": LOGO_URL
    }
  }
};

// 4. SERVICE SCHEMAS
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Industrial Machinery Relocation & Shifting Services",
  "provider": {
    "@type": "Organization",
    "name": COMPANY_NAME
  },
  "description": "End-to-end heavy machinery relocation, plant dismantling, loading, unloading, and precision installation across India.",
  "url": `${BASE_URL}/services/heavy-machine-lifting-and-shifting`,
  "areaServed": {
    "@type": "Place",
    "name": "India"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Machinery Shifting Services Catalog",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Heavy Machine Shifting & Lifting",
          "description": "Specialized internal machine movement on epoxy-coated floors using jacks, rollers, and cranes with full floor protection."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Machinery Loading & Unloading",
          "description": "Safe loading and unloading of heavy containers, including de-stepping and rigging at destinations."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Machinery Installation",
          "description": "Precision alignment, leveling, and commissioning of heavy industrial machinery and production lines."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Machinery Dismantling",
          "description": "Careful dismantling, tagging, and packing of machinery for decommissioning and safe transit."
        }
      }
    ]
  }
};

// 5. FAQ PAGE SCHEMA
export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Machinery Movers provide in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Machinery Movers provides industrial machinery shifting, relocation, loading and unloading, machinery installation, crane rental, pick and carry services, and heavy equipment recovery across India."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide machinery shifting services across India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Machinery Movers operates pan-India with a strong base in Bangalore, handling machinery relocation projects across multiple states and industrial locations."
      }
    },
    {
      "@type": "Question",
      "name": "Can you move heavy machinery inside factories without damaging epoxy floors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in internal machine movement on epoxy-coated floors using controlled techniques, skilled manpower, and specialised handling equipment to prevent surface damage."
      }
    },
    {
      "@type": "Question",
      "name": "What types of industries do you serve for machinery relocation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve automotive, aerospace, electronics, medical device manufacturing, heavy engineering, OEMs, EPC contractors, warehouses, and large manufacturing facilities."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide turnkey machinery shifting and installation services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer end-to-end turnkey solutions including site inspection, planning, dismantling, loading, transportation, positioning, and final machinery installation."
      }
    },
    {
      "@type": "Question",
      "name": "What equipment do you use for heavy machinery handling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our fleet includes hydraulic telescopic mobile cranes, forklifts, trailers, hydraulic and mechanical jacks, skid rollers, wire rope slings, and specialised lifting tools."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose Machinery Movers for industrial machine relocation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With 25+ years of experience, trained workforce, safety-driven execution, modern equipment, and trusted relationships with 200+ reputed organizations, we deliver reliable and damage-free machinery movement."
      }
    }
  ]
};

// 6. ABOUT PAGE SCHEMA
export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": `About Machinery Movers`,
  "description": "Learn about Machinery Movers' 25+ years of experience, credentials, and safety standards in heavy machinery and plant moves.",
  "url": `${BASE_URL}/about`,
  "mainEntity": {
    "@type": "Organization",
    "name": COMPANY_NAME,
    "foundingDate": "1999",
    "description": "Industrial machinery shifting, relocation, loading and unloading, machinery installation, crane rental, and recovery experts in India.",
    "knowsAbout": [
      "Heavy Machinery Shifting",
      "Factory Relocation",
      "CNC Machine Relocation",
      "Machinery Installation & Alignment",
      "Industrial Rigging"
    ]
  }
};

// 7. CONTACT PAGE SCHEMA
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": `Contact Machinery Movers`,
  "description": "Request a free quote or consult on your heavy machinery shifting and factory relocation project.",
  "url": `${BASE_URL}/contact`,
  "mainEntity": {
    "@type": "Organization",
    "name": COMPANY_NAME,
    "telephone": "+91-9980335552",
    "email": "chinnappa@machinerymovers.co.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "#2102 & 2103, BCCHS Layout, Vajarahalli, Opp Sharma Transport Metro Pillar Number 249, Kanakapura Main Road",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560109",
      "addressCountry": "IN"
    }
  }
};

// 8. BREADCRUMB SCHEMA BUILDER
export const getBreadcrumbSchema = (pageName, pageUrl) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": BASE_URL
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": pageName,
      "item": `${BASE_URL}${pageUrl}`
    }
  ]
});
