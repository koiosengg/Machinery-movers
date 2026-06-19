import React from "react";
import PF from "../../../assets/Services/HeavyMachineLiftingAndShifting/Standards/PF.jpg";
import ESIC from "../../../assets/Services/HeavyMachineLiftingAndShifting/Standards/ESIC.jpg";

function Standards() {
  return (
    <section className="template">
      <header className="template-heading">
        <h2>
          Safety Standards & <br className="desktop" /> Worker Coverage
        </h2>
        <p>
          Strict safety protocols, trained workforce, and comprehensive worker
          coverage ensuring compliant and risk-free machinery handling
          operations across industrial sites.
        </p>
      </header>
      <div className="services-standards">
        <p className="services-standards-para">
          *Our work is driven by 100% commitment to{" "}
          <span>safety, compliance, and methodical execution,</span> ensuring
          smooth, risk-free operations every time.
        </p>
        <article className="services-standards-set">
          <img decoding="async" loading="lazy" src={PF}
            alt="Employee’s Provident Fund of India (PF Compliance)"
          />
          <h3>Employee’s Provident Fund of India (PF Compliance)</h3>
        </article>
        <article className="services-standards-set">
          <img decoding="async" loading="lazy" src={ESIC}
            alt="Employee’s State Insurance Corporation Scheme (ESIC)"
          />
          <h3>Employee’s State Insurance Corporation Scheme (ESIC)</h3>
        </article>
      </div>
    </section>
  );
}

export default Standards;
