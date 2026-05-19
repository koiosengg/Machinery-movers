import React, { useEffect, useRef, useState } from "react";
import image1 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/24_7 emergency shifting support.jpg";
import image2 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Container Stuffing & de-stuffing expertise.jpg";
import image3 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Conterner Stuffing expertise.jpg";
import image4 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Cranes and arrangment.jpg";
import image5 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Expertise in factory relocation internal plant shifting.jpg";
import image6 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Forlift supprt with certified operators.jpg";
import image7 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Handling CNC ,VMC,Injection molding Machines and heavy press.jpg";
import image8 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Handling up to multi-ton equipment.jpg";
import image9 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Heavy equipment postioning with milimeter accuracy.jpg";
import image10 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/In plant machine rearrangement & layout shifting .jpg";
import image11 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Leveling and alignment support.jpg";
import image12 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Professional dismentaling services.jpg";
import image13 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Professional loading & unloading team.jpg";
import image14 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Proper marking and packing for re-installing.jpg";
import image15 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/risk assessmnet and method statement preparation.jpg";
import image16 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Safe and damage free movement.jpg";
import image17 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Safe lifting up to 100+ ton capacity.jpg";
import image18 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Safe removal of heavy components.jpg";
import image19 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/safe unloading at destination.jpg";
import image20 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Skilled manpower with PPE and safty compliance.jpg";
import image21 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Skilled rigging and handling(1).JPG";
import image22 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/skilled rigging and handling.jpg";
import image23 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Turnkey machinery shifting solutions.jpg";

function Services() {
  const servicesData = [
    { img: image1, text: "24/7 emergency shifting support" },
    { img: image2, text: "Container Stuffing & de-stuffing expertise" },
    { img: image3, text: "Conterner Stuffing expertise" },
    { img: image4, text: "Cranes and arrangment" },
    {
      img: image5,
      text: "Expertise in factory relocation internal plant shifting",
    },
    { img: image6, text: "Forlift supprt with certified operators" },
    {
      img: image7,
      text: "Handling CNC, VMC, Injection molding Machines and heavy press",
    },
    { img: image8, text: "Handling up to multi-ton equipment" },
    { img: image9, text: "Heavy equipment postioning with milimeter accuracy" },
    { img: image10, text: "In plant machine rearrangement & layout shifting" },
    { img: image11, text: "Leveling and alignment support" },
    { img: image12, text: "Professional dismentaling services" },
    { img: image13, text: "Professional loading & unloading team" },
    { img: image14, text: "Proper marking and packing for re-installing" },
    { img: image15, text: "Risk assessmnet and method statement preparation" },
    { img: image16, text: "Safe and damage free movement" },
    { img: image17, text: "Safe lifting up to 100+ ton capacity" },
    { img: image18, text: "Safe removal of heavy components" },
    { img: image19, text: "Safe unloading at destination" },
    { img: image20, text: "Skilled manpower with PPE and safty compliance" },
    { img: image21, text: "Skilled rigging and handling" },
    { img: image22, text: "Skilled rigging and handling" },
    { img: image23, text: "Turnkey machinery shifting solutions" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const containerRef = useRef(null);
  const slideRef = useRef(null);
  const firstSlideRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current || !firstSlideRef.current) return;
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
      setItemWidth(firstSlideRef.current.getBoundingClientRect().width);
      setWindowWidth(window.innerWidth);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const visibleCount =
    itemWidth > 0 ? Math.max(1, Math.round(containerWidth / itemWidth)) : 4;
  const slidesCount = Math.max(0, servicesData.length - visibleCount);

  useEffect(() => {
    if (!slideRef.current || itemWidth === 0) return;
    slideRef.current.style.transform = `translate3d(-${activeIndex * (itemWidth + 20)}px, 0, 0)`;
  }, [activeIndex, itemWidth]);

  useEffect(() => {
    if (slidesCount <= 0) return;
    let intervalId;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % (slidesCount + 1));
      }, 3000);
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [slidesCount, windowWidth]);

  return (
    <section className="template blue-template">
      <header className="template-heading">
        <h2>Our Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. At et consequat nunc nullam.
          Mattis ac arcu sodales id quam urna.
        </p>
      </header>

      <div className="services-services" ref={containerRef}>
        <div className="services-services-slide" ref={slideRef}>
          {servicesData.map((item, index) => (
            <article
              className="services-services-set"
              key={index}
              ref={index === 0 ? firstSlideRef : null}
            >
              <img src={item.img} alt={`service-${index}`} />
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
