import React from "react";
import Sample from "../../assets/Projects/Banner/Projects Video.mp4";
import AwardImage from "../../assets/Projects/Tata/Image.png";

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
          <video src={Sample} muted autoPlay loop playsInline />
        </div>

        <div className="projects-banner-overlay">
          <div className="projects-banner-box">
            <div className="projects-award">
              <img src={AwardImage} alt="Tata Power Solar Award" />
            </div>
            <div className="projects-content">
              <div className="projects-vision">
                <h3>Our Vision</h3>
                <p>
                  To be the preferred provider of lifting solutions, setting
                  standards for a more sustainable future.
                </p>
              </div>
              <div className="projects-trust">
                <h3>Trust</h3>
                <p>
                  Our clients trust us to achieve impossible feats, consistently
                  breaking records through dedication and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
