import React from "react";
import ProjectBanner from "../../assets/Projects/Banner/Projects Video.mp4";

function Banner() {
  return (
    <section className="home-banner other-banner">
      <header>
        <h1>
          Projects That Built
          <br className="desktop" />
          Our Reputation
        </h1>
        <p>
          Delivering complex machinery shifting and industrial relocation
          projects across South India with safety, precision, and proven
          expertise
        </p>
      </header>
      <div className="home-banner-gallery">
        <div className="home-banner-gallery-slide">
          <video
            autoPlay
            muted
            loop
            playsInline
            src={ProjectBanner}
            type="video/mp4"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
