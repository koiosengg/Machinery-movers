import React from "react";
import SEO from "../SEO";
import { HeavyMachineLiftingAndShiftingStructuredData } from "../../structured-data";
import Banner from "./HeavyMachineLiftingAndShifting/Banner";
import Sectors from "./HeavyMachineLiftingAndShifting/Sectors";
import Services from "./HeavyMachineLiftingAndShifting/Services";
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

function HeavyMachineLiftingAndShifting() {
  return (
    <>
      <SEO
        title="Heavy Machinery Relocation Services India | Machinery Movers"
        description="Expert heavy machinery relocation for factories and plants across India. Rigging, loading, and reinstallation handled end-to-end. Request a quote today."
      />
      <HeavyMachineLiftingAndShiftingStructuredData />
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

export default HeavyMachineLiftingAndShifting;
