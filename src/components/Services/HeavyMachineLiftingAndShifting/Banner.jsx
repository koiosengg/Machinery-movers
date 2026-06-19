import React, { useEffect, useRef, useState } from "react";
import Arrow from "../../../assets/Home/Banner/Arrow.svg";
import GalleryImg1 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Banner/Gallery Image 1.jpg";

function Banner() {
  return (
    <section className="home-banner other-banner">
      <header>
        <h1>
          Heavy Machine
          <br className="desktop" /> Lifting & Shifting
        </h1>
        <p>
          Professional heavy machinery lifting and shifting services across
          South India for safe, precise, and efficient industrial relocation
          projects
        </p>
      </header>

      <div className="home-banner-gallery">
        <div className="home-banner-gallery-slide">
          <img src={GalleryImg1} alt="Heavy Machine Lifting & Shifting" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
