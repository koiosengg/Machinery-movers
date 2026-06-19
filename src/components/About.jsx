import React from "react";
import SEO from "./SEO";
import { AboutPageStructuredData } from "../structured-data";
import Numbers from "./About/Numbers";
import Company from "./About/Company";
import Proprietor from "./About/Proprietor";
import Yellow from "./Home/Yellow";
import Move from "./Home/Move";
import Clients from "./About/Clients";
import FAQ from "./Home/FAQ";
import Reach from "./Home/Reach";
import Ready from "./Home/Ready";
import Hero from "./About/Hero";

function About() {
  return (
    <>
      <SEO
        title="About Machinery Movers | Industrial Relocation Experts"
        description="Learn about Machinery Movers' experience, licenses, insurance, and track record relocating heavy industrial machinery and plants safely across India."
      />
      <AboutPageStructuredData />
      <Hero />
      <Numbers />
      <Proprietor />
      <Company />
      <Move />
      <Yellow />
      <Clients />
      <FAQ />
      <Reach />
      <Ready />
    </>
  );
}

export default About;
