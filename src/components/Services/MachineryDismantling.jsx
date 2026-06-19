import React from "react";
import SEO from "../SEO";
import { MachineryDismantlingStructuredData } from "../../structured-data";
import Banner from "./MachineryDismantling/Banner";
import Services from "./MachineryDismantling/Services";
import Sectors from "./HeavyMachineLiftingAndShifting/Sectors";
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

function MachineryDismantling() {
  return (
    <>
      <SEO
        title="Machinery Dismantling & Decommissioning | Machinery Movers"
        description="Safe machinery dismantling, decommissioning, and match-marking services. We prepare heavy industrial machinery for secure transport and relocation."
      />
      <MachineryDismantlingStructuredData />
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

export default MachineryDismantling;
