import React from "react";
import AboutImage from "../../assets/About/Company/Image.jpg";

function Company() {
  return (
    <section className="home-about about-company">
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
          <div className="about-company-container">
            <article className="about-company-set">
              <span>01</span>
              <div className="about-company-set-text">
                <h3>Reliablity</h3>
                <p>
                  We deliver consistent, dependable machinery handling services.
                </p>
              </div>
            </article>
            <article className="about-company-set">
              <span>02</span>
              <div className="about-company-set-text">
                <h3>Expertise</h3>
                <p>
                  We provide efficient turnkey solutions backed by over a decade
                  of experience.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="home-about-img blue-overlay">
        <img decoding="async" loading="lazy" src={AboutImage} alt="About Image" className="blue-hover" />
      </div>
    </section>
  );
}

export default Company;
