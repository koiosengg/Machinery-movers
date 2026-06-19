import React from "react";
import {
  organizationSchema,
  localBusinessSchema,
  webSiteSchema,
  servicesSchema,
  faqPageSchema,
  aboutPageSchema,
  contactPageSchema,
  getBreadcrumbSchema
} from "./schemas";

/**
 * JsonLdScript component to inject JSON-LD script into the DOM.
 */
export const JsonLdScript = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data)
    }}
  />
);

/**
 * Structured Data for Homepage
 */
export const HomePageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={localBusinessSchema} />
    <JsonLdScript data={webSiteSchema} />
    <JsonLdScript data={faqPageSchema} />
  </>
);

/**
 * Structured Data for About Page
 */
export const AboutPageStructuredData = () => (
  <>
    <JsonLdScript data={aboutPageSchema} />
    <JsonLdScript data={getBreadcrumbSchema("About Us", "/about")} />
  </>
);

/**
 * Structured Data for Contact Page
 */
export const ContactPageStructuredData = () => (
  <>
    <JsonLdScript data={contactPageSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Contact Us", "/contact")} />
  </>
);

/**
 * Structured Data for Services Page (Heavy Machine Lifting & Shifting)
 */
export const HeavyMachineLiftingAndShiftingStructuredData = () => (
  <>
    <JsonLdScript data={servicesSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Heavy Machine Shifting & Lifting", "/services/heavy-machine-lifting-and-shifting")} />
  </>
);

/**
 * Structured Data for Services Page (Machinery Loading & Unloading)
 */
export const MachineryLoadingAndUnloadingStructuredData = () => (
  <>
    <JsonLdScript data={servicesSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Machinery Loading & Unloading", "/services/machinery-loading-and-unloading")} />
  </>
);

/**
 * Structured Data for Services Page (Machinery Installation)
 */
export const MachineryInstallationStructuredData = () => (
  <>
    <JsonLdScript data={servicesSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Machinery Installation", "/services/machinery-installation")} />
  </>
);

/**
 * Structured Data for Services Page (Machinery Dismantling)
 */
export const MachineryDismantlingStructuredData = () => (
  <>
    <JsonLdScript data={servicesSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Machinery Dismantling", "/services/machinery-dismantling")} />
  </>
);
