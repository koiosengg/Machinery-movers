import React from "react";
import { Link } from "react-router-dom";
import SEO from "./SEO";
import Logo from "/Logo.png";

function ThankYou() {
  return (
    <>
      <SEO
        title="Thank You | Machinery Movers India"
        description="Thank you for contacting Machinery Movers. We have received your request and our team will get in touch with you shortly."
      />
      <section className="thankyou-container">
        <div className="thankyou-card">
          <div className="thankyou-icon">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="#fdbe33"
                fillOpacity="0.15"
                stroke="#fdbe33"
                strokeWidth="2"
              />
              <path
                d="M8.5 12.5L11 15L16 9"
                stroke="#e6ad2e"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1>Thank You!</h1>
          <h2>Your Message Has Been Received</h2>
          <div className="thankyou-actions">
            <Link
              to="/"
              className="primary-button"
              style={{ textDecoration: "none" }}
            >
              <p>Back to Home</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M7.01671 16.6663L5.83337 15.483L11.3167 9.99967L5.83337 4.51634L7.01671 3.33301L13.6834 9.99967L7.01671 16.6663Z"
                  fill="#030F27"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ThankYou;
