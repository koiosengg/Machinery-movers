import React from "react";
import OfferingsImage1 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Offerings/Offerings Image 1.jpg";
import OfferingsImage2 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Offerings/Offerings Image 2.jpg";
import OfferingsImage3 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Offerings/Offerings Image 3.jpg";
import OfferingsImage4 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Offerings/Offerings Image 4.jpg";
import OfferingsImage5 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Offerings/Offerings Image 5.jpg";
import OfferingsImage6 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Offerings/Offerings Image 6.jpg";
import OfferingsImage7 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Offerings/Offerings Image 7.jpg";
import OfferingsImage8 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Offerings/Offerings Image 8.jpg";

function Offerings() {
  return (
    <section className="template">
      <header className="template-heading">
        <h2>Other Key Service Offerings</h2>
        <p>
          Explore our extended machinery handling services including crane
          rental, pick and carry, heavy recovery, and industrial equipment
          support solutions
        </p>
      </header>
      <div className="home-equipment">
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={OfferingsImage1} alt="Offerings Image 1" />
          <div className="home-fleet-set-text">
            <p>Heavy Machine Lifting & Shifting</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={OfferingsImage2} alt="Offerings Image 2" />
          <div className="home-fleet-set-text">
            <p>Machine Positioning & Alignment</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={OfferingsImage3} alt="Offerings Image 3" />
          <div className="home-fleet-set-text">
            <p>Complete Plant Relocation</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={OfferingsImage4} alt="Offerings Image 4" />
          <div className="home-fleet-set-text">
            <p>Erection & Dismantling Works</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={OfferingsImage5} alt="Offerings Image 5" />
          <div className="home-fleet-set-text">
            <p>Loading & Unloading of Machines</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={OfferingsImage6} alt="Offerings Image 6" />
          <div className="home-fleet-set-text">
            <p>Material Handling Solutions</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={OfferingsImage7} alt="Offerings Image 7" />
          <div className="home-fleet-set-text">
            <p>Emergency breakdown lifting support</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={OfferingsImage8} alt="Offerings Image 8" />
          <div className="home-fleet-set-text">
            <p>Floor protection, safe movement & load distribution</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Offerings;
