import React from "react";
import SEO from "../SEO";
import Banner from "./MachineryInstallation/Banner";
import Sectors from "./HeavyMachineLiftingAndShifting/Sectors";
import Services from "./MachineryInstallation/Services";
import Equipment from "./HeavyMachineLiftingAndShifting/Equipment";
import Infrastructure from "./HeavyMachineLiftingAndShifting/Infrastructure";
import Safety from "./HeavyMachineLiftingAndShifting/Safety";
import Move from "../Home/Move";
import Standards from "./HeavyMachineLiftingAndShifting/Standards";
import Gear from "./HeavyMachineLiftingAndShifting/Gear";
import Yellow from "../Home/Yellow";
import Excel from "./HeavyMachineLiftingAndShifting/Excel";
import Clients from "../Home/Clients";
import Offerings from "./HeavyMachineLiftingAndShifting/Offerings";
import FAQ from "../Home/FAQ";
import Ready from "../Home/Ready";

function MachineryInstallation() {
  return (
    <>
      <SEO
        title="Industrial Machinery Installation Services | Machinery Movers"
        description="Expert industrial machinery installation, leveling, alignment, and commissioning. End-to-end relocation and setup for factory machinery in India."
      />
      <Banner />
      <Sectors />
      <Services />
      <Equipment />
      <Infrastructure />
      <Safety />
      <Move />
      <Standards />
      <Gear />
      <Yellow />
      <Excel />
      <Clients />
      <Offerings />
      <FAQ />
      <Ready />
    </>
  );
}

export default MachineryInstallation;
