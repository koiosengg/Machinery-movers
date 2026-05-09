import React from "react";
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
