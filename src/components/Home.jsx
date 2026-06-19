import React from "react";
import SEO from "./SEO";
import Banner from "./Home/Banner";
import Provide from "./Home/Provide";
import About from "./Home/About";
import Fleet from "./Home/Fleet";
import Yellow from "./Home/Yellow";
import Equipment from "./Home/Equipment";
import Clients from "./Home/Clients";
import BTS from "./Home/BTS";
import FAQ from "./Home/FAQ";
import Reach from "./Home/Reach";
import Ready from "./Home/Ready";
import Move from "./Home/Move";

function Home() {
  return (
    <>
      <SEO
        title="Heavy Machinery & Plant Movers in India | Machinery Movers"
        description="Safe, insured heavy machinery and plant relocation across India. CNC moves, rigging, and factory shifting with zero-downtime planning. Get a free quote."
      />
      <Banner />
      <Provide />
      <About />
      <Move />
      <Fleet />
      <Yellow />
      <Equipment />
      <Clients />
      <BTS />
      <FAQ />
      <Reach />
      <Ready />
    </>
  );
}

export default Home;
