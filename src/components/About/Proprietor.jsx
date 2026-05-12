import React from "react";
import ProprietorImage from "../../assets/About/Proprietor/Proprietor.png";

function Proprietor() {
  return (
    <section className="home-about about-company">
      <div className="home-about-content">
        <h2>Leadership Built on Experience</h2>
        <div className="home-about-text">
          <p className="home-about-para">
            With over 25 years of hands-on industry experience, Mr. Chinnappa
            has built Machinery Movers into a trusted name in industrial
            material handling, machinery shifting, and heavy equipment
            relocation. Under his leadership, the company has successfully
            partnered with 300+ manufacturing units, OEMs, engineering
            companies, and industrial organizations, delivering safe, efficient,
            and execution-driven solutions across India.
          </p>
        </div>
      </div>
      <div className="home-about-img blue-overlay">
        <img src={ProprietorImage} alt="Proprietor" className="blue-hover" />
      </div>
    </section>
  );
}

export default Proprietor;
