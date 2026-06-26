import React from "react";
import { Link } from "react-router-dom";
import SEO from "./SEO";

function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Machinery Movers"
        description="The page you are looking for does not exist on Machinery Movers."
      />
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.iconContainer}>
            {/* A premium machinery/construction warning SVG */}
            <svg
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 22H22L12 2Z"
                stroke="#fdbe33"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="#fdbe33"
                fillOpacity="0.1"
              />
              <path
                d="M12 9V13"
                stroke="#030f27"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="12" cy="17" r="1.25" fill="#030f27" />
            </svg>
          </div>
          <h1 style={styles.heading}>404</h1>
          <h2 style={styles.subheading}>Oops! Page Not Found</h2>
          <p style={styles.text}>
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="primary-button" style={styles.button}>
            <p>Back to Home Page</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="#030f27"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "75vh",
    padding: "40px 20px",
    background: "#f9fafe",
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    color: "#030f27",
  },
  content: {
    textAlign: "center",
    maxWidth: "500px",
    width: "100%",
  },
  iconContainer: {
    marginBottom: "24px",
    display: "flex",
    justifyContent: "center",
  },
  heading: {
    fontSize: "96px",
    fontWeight: "800",
    lineHeight: "1",
    margin: "0 0 10px 0",
    color: "#030f27",
    letterSpacing: "-2px",
  },
  subheading: {
    fontSize: "24px",
    fontWeight: "700",
    margin: "0 0 16px 0",
    color: "#353f52",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#6b7280",
    marginBottom: "32px",
  },
  button: {
    display: "inline-flex",
    textDecoration: "none",
    margin: "0 auto",
  },
};

export default NotFound;
