import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../assets/Projects/Case/CIE/Logo.png";
import Image1 from "../../../assets/Projects/Case/CIE/Image 1.jpg";
import Image2 from "../../../assets/Projects/Case/CIE/Image 2.jpg";
import Image3 from "../../../assets/Projects/Case/CIE/Image 3.jpg";
import Image4 from "../../../assets/Projects/Case/CIE/Image 4.jpg";
import Image5 from "../../../assets/Projects/Case/CIE/Image 5.jpg";
import Image6 from "../../../assets/Projects/Case/CIE/Image 6.jpg";
import Image7 from "../../../assets/Projects/Case/CIE/Image 7.jpg";
import Image8 from "../../../assets/Projects/Case/CIE/Image 8.jpg";
import Image9 from "../../../assets/Projects/Case/CIE/Image 9.jpg";

function CIE() {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
  ];

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
        <img decoding="async" loading="lazy" src={Logo} alt="CIE LIMITED Logo" />
        <h3>CIE LIMITED</h3>
      </div>

      <div className="projects-case-set-container">
        <div className="projects-case-set-imgs" ref={containerRef}>
          <div className="projects-case-set-imgs-slide" ref={slideRef}>
            {images.map((img, index) => (
              <img decoding="async" loading="lazy" key={index} src={img} alt="CIE Image" />
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
              <h3>Automotive Components Manufacturing</h3>
              <p>Industry</p>
            </article>
            <article className="home-reach-set">
              <h3>Jigani, Bengaluru</h3>
              <p>Karnataka, India</p>
            </article>
            <article className="home-reach-set">
              <h3>Hosur</h3>
              <p>Tamil Nadu, India</p>
            </article>
          </div>
          <p className="home-about-para">
            We successfully executed the complete plant relocation of CIE
            Limited – PB6 within a tight timeline of 5 days, involving the
            shifting of 80+ machines.
          </p>
          <p className="home-about-para">
            The scope included dismantling, packing, transportation, unloading,
            internal shifting, and positioning of production and supporting
            machinery, planned to ensure continuity of operations.
          </p>
          <article className="about-company-set">
            <div className="about-company-set-text">
              <h3>Results</h3>
              <p>
                Production was restarted the very next day at the new facility
                without any issues, achieving zero damage and minimal downtime.
              </p>
            </div>
          </article>
        </div>
      </div>
    </article>
  );
}

export default CIE;
