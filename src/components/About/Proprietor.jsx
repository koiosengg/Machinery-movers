import React from "react";
import ProprietorImage from "../../assets/About/Proprietor/Proprietor.png";

function Proprietor() {
  return (
    <section className="home-about about-company">
      <div className="home-about-content">
        <h2>About the Proprietor</h2>
        <div className="home-about-text">
          <p className="home-about-para">
            We would like to introduce ourselves as one of the leading Material
            Handlers carrying out Loading & unloading activity with the help of
            suitable Hydraulic Telescopic mobile Crane, Machine Movement
            internal & external, even on Epoxy painted floor with the help of
            our manual labour using sophisticated equipment in many of the
            reputed factories in and around Karnataka State
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
