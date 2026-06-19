import React from "react";
import InfrastructureImage1 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Infrastructure/Infrastructure Image 1.jpg";
import InfrastructureImage2 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Infrastructure/Infrastructure Image 2.jpg";
import InfrastructureImage3 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Infrastructure/Infrastructure Image 3.jpg";
import InfrastructureImage4 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Infrastructure/Infrastructure Image 4.jpg";
import InfrastructureImage5 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Infrastructure/Infrastructure Image 5.jpg";
import InfrastructureImage6 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Infrastructure/Infrastructure Image 6.jpg";

function Infrastructure() {
  return (
    <section className="template">
      <header className="template-heading">
        <h2>Our Infrastructure </h2>
        <p>
          Advanced equipment, skilled workforce, and structured processes for
          safe industrial machinery handling
        </p>
      </header>
      <div className="home-equipment">
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={InfrastructureImage1} alt="Infrastructure Image 1" />
          <div className="home-fleet-set-text">
            <p>Professional crane and trailer partners</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={InfrastructureImage2} alt="Infrastructure Image 2" />
          <div className="home-fleet-set-text">
            <p>Skilled and experienced rigging team</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={InfrastructureImage3} alt="Infrastructure Image 3" />
          <div className="home-fleet-set-text">
            <p>Ability to handle machinery up to several tons</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={InfrastructureImage4} alt="Infrastructure Image 4" />
          <div className="home-fleet-set-text">
            <p>Vehicle support for transportation</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={InfrastructureImage5} alt="Infrastructure Image 5" />
          <div className="home-fleet-set-text">
            <p>Dedicated project supervisor</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={InfrastructureImage6} alt="Infrastructure Image 6" />
          <div className="home-fleet-set-text">
            <p>Safety equipment tools</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Infrastructure;
