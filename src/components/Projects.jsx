import React from "react";
import SEO from "./SEO";
import Banner from "./Projects/Banner";
import Case from "./Projects/Case";
import Tata from "./Projects/Tata";
import Yellow from "./Home/Yellow";
import Clients from "./Home/Clients";
import BTS from "./Home/BTS";
import FAQ from "./Home/FAQ";
import Reach from "./Home/Reach";
import Ready from "./Home/Ready";
import VisionMission from "./Projects/VisionMission";
function Projects() {
  return (
    <>
      <SEO
        title="Industrial Relocation Projects | Machinery Movers"
        description="View our successful heavy machinery and factory relocation projects across India. Safe, insured rigging and shifting completed on schedule."
      />
      <Banner />
      <VisionMission />
      <Case />
      <Tata />
      <Yellow />
      <Clients />
      <BTS />
      <FAQ />
      <Reach />
      <Ready />
    </>
  );
}

export default Projects;
