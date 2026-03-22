import React, { useEffect, useRef, useState } from "react";
import serviceImg1 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Services Image 1.png";
import serviceImg2 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Services Image 2.png";
import serviceImg3 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Services Image 3.png";
import serviceImg4 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Services Image 4.png";
import serviceImg5 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Services/Services Image 5.png";

function Services() {
  const servicesData = [
    { img: serviceImg1, text: "24/7 emergency shifting support" },
    { img: serviceImg2, text: "Heavy machinery loading & unloading" },
    { img: serviceImg3, text: "Factory relocation services" },
    { img: serviceImg4, text: "Precision equipment installation" },
    { img: serviceImg5, text: "Industrial rigging solutions" },
    { img: serviceImg1, text: "Safe transportation of heavy equipment" },
    { img: serviceImg2, text: "On-site dismantling & reassembly" },
    { img: serviceImg3, text: "Crane and forklift assistance" },
    { img: serviceImg4, text: "Warehouse shifting services" },
    { img: serviceImg5, text: "End-to-end project management" },
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
