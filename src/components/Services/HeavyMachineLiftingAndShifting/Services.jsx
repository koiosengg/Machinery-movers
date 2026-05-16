import React, { useEffect, useRef, useState } from "react";
import img24_7EmergencyShiftingSupport from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/24_7 emergency shifting support.jpg";
import imgContainerStuffingDestuffingExpertise from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Container Stuffing & de-stuffing expertise.jpg";
import imgConternerStuffingExpertise from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Conterner Stuffing expertise.jpg";
import imgCranesAndArrangment from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Cranes and arrangment.jpg";
import imgExpertiseInFactoryRelocationInternalPlantShifting from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Expertise in factory relocation internal plant shifting.jpg";
import imgForliftSupprtWithCertifiedOperators from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Forlift supprt with certified operators.jpg";
import imgHandlingCNCVMCInjectionMoldingMachinesAndHeavyPress from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Handling CNC ,VMC,Injection molding Machines and heavy press.jpg";
import imgHandlingUpToMultiTonEquipment from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Handling up to multi-ton equipment.jpg";
import imgHeavyEquipmentPostioningWithMilimeterAccuracy from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Heavy equipment postioning with milimeter accuracy.jpg";
import imgInPlantMachineRearrangementLayoutShifting from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/In plant machine rearrangement & layout shifting .jpg";
import imgLevelingAndAlignmentSupport from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Leveling and alignment support.jpg";
import imgProfessionalDismentalingServices from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Professional dismentaling services.jpg";
import imgProperMarkingAndPackingForReInstalling from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Proper marking and packing for re-installing.jpg";
import imgRiskAssessmnetAndMethodStatementPreparation from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/risk assessmnet and method statement preparation.jpg";
import imgSafeAndDamageFreeMovement from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Safe and damage free movement.jpg";
import imgSafeLiftingUpTo100TonCapacity from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Safe lifting up to 100+ ton capacity.jpg";
import imgSafeRemovalOfHeavyComponents from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Safe removal of heavy components.jpg";
import imgSafeUnlkoadingAtDestination from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/safe unlkoading at destination.jpg";
import imgSkilledManpowerWithPPEAndSaftyCompliance from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Skilled manpower with PPE and safty compliance.jpg";
import imgSkilledRiggingAndHandling1 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Skilled rigging and handling(1).JPG";
import imgSkilledRiggingAndHandling from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/skilled rigging and handling.jpg";
import imgTurnkeyMachineryShiftingSolutions from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Turnkey machinery shifting solutions.jpg";

function Services() {
  const servicesData = [
    {
      img: img24_7EmergencyShiftingSupport,
      text: "24/7 emergency shifting support",
    },
    {
      img: imgContainerStuffingDestuffingExpertise,
      text: "Container Stuffing & de-stuffing expertise",
    },
    {
      img: imgConternerStuffingExpertise,
      text: "Conterner Stuffing expertise",
    },
    { img: imgCranesAndArrangment, text: "Cranes and arrangment" },
    {
      img: imgExpertiseInFactoryRelocationInternalPlantShifting,
      text: "Expertise in factory relocation internal plant shifting",
    },
    {
      img: imgForliftSupprtWithCertifiedOperators,
      text: "Forlift supprt with certified operators",
    },
    {
      img: imgHandlingCNCVMCInjectionMoldingMachinesAndHeavyPress,
      text: "Handling CNC, VMC, Injection molding Machines and heavy press",
    },
    {
      img: imgHandlingUpToMultiTonEquipment,
      text: "Handling up to multi-ton equipment",
    },
    {
      img: imgHeavyEquipmentPostioningWithMilimeterAccuracy,
      text: "Heavy equipment postioning with milimeter accuracy",
    },
    {
      img: imgInPlantMachineRearrangementLayoutShifting,
      text: "In plant machine rearrangement & layout shifting",
    },
    {
      img: imgLevelingAndAlignmentSupport,
      text: "Leveling and alignment support",
    },
    {
      img: imgProfessionalDismentalingServices,
      text: "Professional dismentaling services",
    },
    {
      img: imgProperMarkingAndPackingForReInstalling,
      text: "Proper marking and packing for re-installing",
    },
    {
      img: imgRiskAssessmnetAndMethodStatementPreparation,
      text: "Risk assessmnet and method statement preparation",
    },
    {
      img: imgSafeAndDamageFreeMovement,
      text: "Safe and damage free movement",
    },
    {
      img: imgSafeLiftingUpTo100TonCapacity,
      text: "Safe lifting up to 100+ ton capacity",
    },
    {
      img: imgSafeRemovalOfHeavyComponents,
      text: "Safe removal of heavy components",
    },
    {
      img: imgSafeUnlkoadingAtDestination,
      text: "Safe unlkoading at destination",
    },
    {
      img: imgSkilledManpowerWithPPEAndSaftyCompliance,
      text: "Skilled manpower with PPE and safty compliance",
    },
    {
      img: imgSkilledRiggingAndHandling1,
      text: "Skilled rigging and handling",
    },
    { img: imgSkilledRiggingAndHandling, text: "Skilled rigging and handling" },
    {
      img: imgTurnkeyMachineryShiftingSolutions,
      text: "Turnkey machinery shifting solutions",
    },
  ];

  const visibleSlides = 4;
  const slidesCount = servicesData.length - visibleSlides;

  const [activeIndex, setActiveIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const containerRef = useRef(null);
  const slideRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (!containerRef.current) return;

      setSlideWidth(containerRef.current.getBoundingClientRect().width);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (!slideRef.current) return;

    slideRef.current.style.transform = `translate3d(-${
      activeIndex * (slideWidth / 4 - 15 + 20)
    }px, 0, 0)`;
  }, [activeIndex, slideWidth]);

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === slidesCount;

  const handlePrev = () => {
    if (!isFirst) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (!isLast) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="template blue-template">
      <header className="template-heading">
        <h2>Our Services</h2>
        <p>
          Comprehensive industrial machinery shifting, heavy lifting, and
          relocation services across South India and pan-India manufacturing
          hubs
        </p>
      </header>

      <div className="services-services" ref={containerRef}>
        <div className="services-services-slide" ref={slideRef}>
          {servicesData.map((item, index) => (
            <article className="services-services-set" key={index}>
              <img src={item.img} alt={`service-${index}`} />
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="about-clients-left-controls">
          <button
            onClick={!isFirst ? handlePrev : undefined}
            style={{
              opacity: isFirst ? 0.3 : 1,
              cursor: isFirst ? "default" : "pointer",
              pointerEvents: isFirst ? "none" : "auto",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <mask
                id="mask0_583_3864"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <rect
                  width="20"
                  height="20"
                  transform="matrix(-1 0 0 1 20 0)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_583_3864)">
                <path
                  d="M12.9834 16.6666L14.1667 15.4833L8.68341 9.99992L14.1667 4.51659L12.9834 3.33325L6.31675 9.99992L12.9834 16.6666Z"
                  fill="#030F27"
                />
              </g>
            </svg>
          </button>
          <button
            onClick={!isLast ? handleNext : undefined}
            style={{
              opacity: isLast ? 0.3 : 1,
              cursor: isLast ? "default" : "pointer",
              pointerEvents: isLast ? "none" : "auto",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <mask
                id="mask0_583_3864"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <rect
                  width="20"
                  height="20"
                  transform="matrix(-1 0 0 1 20 0)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_583_3864)">
                <path
                  d="M12.9834 16.6666L14.1667 15.4833L8.68341 9.99992L14.1667 4.51659L12.9834 3.33325L6.31675 9.99992L12.9834 16.6666Z"
                  fill="#030F27"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
