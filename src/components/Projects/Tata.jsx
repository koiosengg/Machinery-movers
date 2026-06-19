import React from "react";
import Image from "../../assets/Projects/Tata/Image.png";
function Tata() {
  return (
    <section className="projects-tata">
      <header className="template-heading">
        <h2>TATA Safety Achievement Award </h2>
        <p>
          It is in recognition of our contribution in achieving the Safety
          Milestone of “ 70,000 Safe Man-Hours without any loss Time Injury”
        </p>
      </header>
      <div className="projects-tata-img">
        <img decoding="async" loading="lazy" src={Image} alt="TATA Safety Achievement Award" />
      </div>
    </section>
  );
}

export default Tata;
