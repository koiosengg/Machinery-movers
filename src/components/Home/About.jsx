import React from "react";
import { Link } from "react-router-dom";
import AboutImage from "../../assets/Home/About/Image.jpg";

function About() {
  return (
    <section className="home-about">
      <div className="home-about-content">
        <h2>25 Years of Trust, Strength & Safe Machinery Handling</h2>
        <div className="home-about-text">
          <p className="home-about-para">
            We would like to introduce ourselves as one of the leading Material
            Handlers carrying out Loading & unloading activity with the help of
            suitable Hydraulic Telescopic mobile Crane, Machine Movement
            internal & external, even on Epoxy painted floor with the help of
            our manual labour using sophisticated equipment in many of the
            reputed factories in and around Karnataka State
          </p>
          <Link to="/about" className="secondary-button" aria-label="Read more about Machinery Movers">
            <p>Read More About Us</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_516_175"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_516_175)">
                <path
                  d="M8.42 20L7 18.58L13.58 12L7 5.42L8.42 4L16.42 12L8.42 20Z"
                  fill="white"
                />
              </g>
            </svg>
          </Link>
        </div>
      </div>
      <div className="home-about-img blue-overlay">
        <img decoding="async" loading="lazy" src={AboutImage} alt="About Image" className="blue-hover" />
      </div>
    </section>
  );
}

export default About;
