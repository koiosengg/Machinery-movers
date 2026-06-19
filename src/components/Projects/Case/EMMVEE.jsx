import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../assets/Projects/Case/EMMVEE/Logo.png";
import Image1 from "../../../assets/Projects/Case/EMMVEE/Image 1.jpg";
import Image2 from "../../../assets/Projects/Case/EMMVEE/Image 2.jpg";
import Image3 from "../../../assets/Projects/Case/EMMVEE/Image 3.jpg";
import Image4 from "../../../assets/Projects/Case/EMMVEE/Image 4.jpg";
import Image5 from "../../../assets/Projects/Case/EMMVEE/Image 5.jpg";
import Image6 from "../../../assets/Projects/Case/EMMVEE/Image 6.jpg";
import Image7 from "../../../assets/Projects/Case/EMMVEE/Image 7.jpg";

function EMMVEE() {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

  const totalSlides = images.length;

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

    slideRef.current.style.transform = `translate3d(-${activeIndex * slideWidth}px, 0, 0)`;
  }, [activeIndex, slideWidth]);

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === totalSlides - 1;

  const handlePrev = () => {
    if (!isFirst) setActiveIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!isLast) setActiveIndex((prev) => prev + 1);
  };

  return (
    <article className="projects-case-set">
      <div className="projects-case-set-heading">
        <img decoding="async" loading="lazy" src={Logo} alt="EMMVEE Logo" />
        <h3>Emmvee Energy Pvt. Ltd.</h3>
      </div>

      <div className="projects-case-set-container">
        <div className="projects-case-set-imgs" ref={containerRef}>
          <div className="projects-case-set-imgs-slide" ref={slideRef}>
            {images.map((img, index) => (
              <img decoding="async" loading="lazy" key={index} src={img} alt="EMMVEE Image" />
            ))}
          </div>
          <button
            className="projects-case-set-button projects-case-set-button-left"
            onClick={!isFirst ? handlePrev : undefined}
            style={{
              opacity: isFirst ? 0.3 : 1,
              cursor: isFirst ? "default" : "pointer",
              pointerEvents: isFirst ? "none" : "auto",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7.825 13H20V11H7.825L13.425 5.4L12 4L4 12L12 20L13.425 18.6L7.825 13Z"
                fill="white"
              />
            </svg>
          </button>

          <button
            className="projects-case-set-button projects-case-set-button-right"
            onClick={!isLast ? handleNext : undefined}
            style={{
              opacity: isLast ? 0.3 : 1,
              cursor: isLast ? "default" : "pointer",
              pointerEvents: isLast ? "none" : "auto",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7.825 13H20V11H7.825L13.425 5.4L12 4L4 12L12 20L13.425 18.6L7.825 13Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="projects-case-set-content">
          <div className="home-reach">
            <article className="home-reach-set">
              <h3>Solar Energy Manufacturing</h3>
              <p>Industry</p>
            </article>
            <article className="home-reach-set">
              <h3>Dabaspet & Sulibele Plants</h3>
              <p>Karnataka, India</p>
            </article>
          </div>
          <p className="home-about-para">
            We successfully executed the unloading, internal shifting, and
            positioning of 3,000+ tons of solar manufacturing machinery for
            Emmvee Energy Pvt. Ltd. as part of their 6.5 GW solar plant
            expansion. <br />
            The scope included handling critical equipment such as laminators,
            conveyors, and production line machinery, completed twice across two
            plants with strict adherence to safety and timelines.
          </p>
          <article className="about-company-set">
            <div className="about-company-set-text">
              <h3>Results</h3>
              <p>
                Zero damage, on-time completion, and high client satisfaction.
              </p>
            </div>
          </article>
        </div>
      </div>
    </article>
  );
}

export default EMMVEE;
