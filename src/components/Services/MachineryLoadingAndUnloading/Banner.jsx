import React, { useEffect, useRef, useState } from "react";
import BannerVideo from "../../../assets/Services/MachineryLoadingAndUnloading/Banner/MachineryLoadingAndUnloading.mp4";

function Banner() {
  return (
    <section className="home-banner other-banner">
      <header>
        <h1>
          Machinery Loading &
          <br className="desktop" /> Unloading
        </h1>
        <p>
          Safe, efficient machinery loading and unloading services across South
          India for factories and industrial projects
        </p>
      </header>

      <div className="home-banner-gallery">
        <div className="home-banner-gallery-slide">
          <video src={BannerVideo} autoPlay loop muted playsInline />
        </div>
      </div>
    </section>
  );
}

export default Banner;
