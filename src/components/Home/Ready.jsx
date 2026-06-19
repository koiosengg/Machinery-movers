import React from "react";
import Setting from "../../assets/Home/Ready/Setting.svg";

function Ready() {
  return (
    <section className="home-ready">
      <h2>
        TESTED. <br />
        APPR
        <img decoding="async" loading="lazy" src={Setting} alt="Setting Icon" />
        VED <br />
        CERTIFIED.
      </h2>
      <p>Ready to move anything!</p>
    </section>
  );
}

export default Ready;
