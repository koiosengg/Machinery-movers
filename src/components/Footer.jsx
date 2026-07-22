import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "/Logo.png";

function Footer() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [status, setStatus] = useState("IDLE"); // "IDLE" | "PENDING" | "SUCCESS" | "ERROR"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("PENDING");
    try {
      const response = await fetch("https://formspree.io/f/xwvgqgoa", {
        method: "POST",
        body: JSON.stringify({ mobile_number: mobile }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setStatus("SUCCESS");
        setMobile("");
        navigate("/thank-you");
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      console.error("Message submission error:", error);
      setStatus("ERROR");
    }
  };

  return (
    <footer>
      <div className="newsletter">
        <header>
          <h2>
            Planning a Machine Move?
            <br className="desktop" /> <span>We’re Here To Help!</span>
          </h2>
          <p>
            Share your phone number below, and our team will call you to
            understand and support your requirement promptly
          </p>
        </header>
        <form onSubmit={handleSubmit} autoComplete="on">
          <input
            type="tel"
            id="mobile_number"
            name="mobile_number"
            placeholder="Enter your Mobile Number"
            pattern="[0-9]{10}"
            maxLength="10"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            disabled={status === "PENDING"}
          />
          <button
            type="submit"
            className="primary-button"
            aria-label="Submit"
            disabled={status === "PENDING"}
          >
            <p className="desktop">
              {status === "PENDING" ? "Sending..." : "Submit"}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="mobile"
            >
              <mask
                id="mask0_655_3331"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <rect width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_655_3331)">
                <path
                  d="M7.01671 16.6663L5.83337 15.483L11.3167 9.99967L5.83337 4.51634L7.01671 3.33301L13.6834 9.99967L7.01671 16.6663Z"
                  fill="#030F27"
                />
              </g>
            </svg>
          </button>
          {status === "ERROR" && (
            <p
              style={{
                color: "#ff4d4d",
                fontSize: "0.9rem",
                marginTop: "8px",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                width: "100%",
              }}
            >
              Submission failed. Please try again.
            </p>
          )}
        </form>
      </div>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <img
              decoding="async"
              loading="lazy"
              src={Logo}
              alt="Company Logo"
            />
            <p>
              Lifting the Impossible
              <br className="desktop" /> Since 1999.
            </p>
          </div>
          <div className="footer-top-right">
            <div className="footer-top-right-links">
              <h3>Quick Links</h3>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Our Projects</Link>
                <Link to="/contact">Contact</Link>
              </nav>
            </div>
            <div className="footer-top-right-links">
              <h3>Services</h3>
              <nav>
                <Link to="/services/heavy-machine-lifting-and-shifting">
                  Heavy Machine Lifting & Shifting
                </Link>
                <Link to="/services/machinery-loading-and-unloading">
                  Machinery Loading & Unloading
                </Link>
                <Link to="/services/machinery-installation">
                  Machinery Installation
                </Link>
                <Link to="/services/machinery-dismantling">
                  Machinery Dismantling
                </Link>
              </nav>
            </div>
            <div className="footer-top-right-links">
              <h3>Find Us</h3>
              <nav>
                <article>
                  <label>Our Office</label>
                  <a
                    href="https://maps.app.goo.gl/sqD61pVbL8e5x8qy6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    #2102 & 2103, BCCHS Layout, Vajarahalli, Opp Sharma
                    Transport Metro Pillar Number 249, Kanakapura Main Road,
                    Bengaluru 560109
                  </a>
                </article>
                <article>
                  <label>Call us</label>
                  <div className="contact-number">
                    <a href="tel:+919980335552">+91 9980335552</a>{" "}
                    <span>/</span>{" "}
                    <a href="tel:+919448263309">+91 9448263309</a>
                  </div>
                </article>
                <article>
                  <label>Reach out to us</label>
                  <a href="mailto:chinnappa@machinerymovers.co.in">
                    chinnappa@machinerymovers.co.in
                  </a>
                </article>
              </nav>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>©All rights reserved.</p>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <p>
            Crafted by{" "}
            <a
              href="https://www.koiostudio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Koiostudio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
