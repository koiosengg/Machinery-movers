import React from "react";
import SEO from "./SEO";
import { JsonLdScript } from "../structured-data";
import { getBreadcrumbSchema } from "../structured-data/schemas";

function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Machinery Movers"
        description="Learn how Machinery Movers collects, uses, and protects your personal information when you visit our website or submit an enquiry."
      />
      <JsonLdScript data={getBreadcrumbSchema("Privacy Policy", "/privacy-policy")} />
      <section className="template legal-page">
        <header className="template-heading">
          <h1>Privacy Policy</h1>
          <p>Last updated: June 26, 2026</p>
        </header>
        <div className="legal-content">
          <p>
            Machinery Movers (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates
            the website{" "}
            <a href="https://www.machinerymovers.info">www.machinerymovers.info</a>.
            This Privacy Policy explains how we collect, use, and safeguard
            information when you visit our website or contact us.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following information when you use our website:</p>
          <ul>
            <li>Name, email address, phone number, and message content submitted through our contact forms</li>
            <li>Technical data such as browser type, device type, IP address, and pages visited</li>
            <li>Cookie and analytics data collected through Google Tag Manager and related tools</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to enquiries and provide quotes for our services</li>
            <li>Improve our website, user experience, and marketing performance</li>
            <li>Measure advertising effectiveness through tools such as Google Ads and Google Analytics</li>
            <li>Maintain the security and proper functioning of our website</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>
            We use trusted third-party services to operate our website, including:
          </p>
          <ul>
            <li>Formspree for form submissions</li>
            <li>Google Tag Manager, Google Analytics, and Google Ads for measurement and advertising</li>
            <li>Google Maps and YouTube for embedded content on our pages</li>
            <li>Vercel for website hosting</li>
          </ul>
          <p>
            These providers may process data according to their own privacy
            policies. We encourage you to review their policies for more
            information.
          </p>

          <h2>Cookies and Tracking</h2>
          <p>
            Our website uses cookies and similar technologies through Google
            Tag Manager to understand site usage and measure advertising
            performance. You can control cookies through your browser settings.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain enquiry information only as long as necessary to respond
            to your request, manage our business relationship, and comply with
            applicable legal obligations.
          </p>

          <h2>Data Security</h2>
          <p>
            We take reasonable measures to protect your information. However, no
            method of transmission over the internet or electronic storage is
            completely secure.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on applicable law, you may have the right to request
            access to, correction of, or deletion of your personal information.
            To make a request, contact us using the details below.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or how your data is
            handled, contact us at:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:chinnappa@machinerymovers.co.in">
                chinnappa@machinerymovers.co.in
              </a>
            </li>
            <li>
              <strong>Phone:</strong> +91 9980335552 / +91 9448263309
            </li>
            <li>
              <strong>Address:</strong> #2102 &amp; 2103, BCCHS Layout,
              Vajarahalli, Opp Sharma Transport Metro Pillar Number 249,
              Kanakapura Main Road, Bengaluru 560109, India
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;
