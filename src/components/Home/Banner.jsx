import React, { useEffect, useRef, useState } from "react";
import Arrow from "../../assets/Home/Banner/Arrow.svg";
import GalleryImg1 from "../../assets/Home/Banner/Gallery Video 1.mp4";
import GalleryImg2 from "../../assets/Home/Banner/Gallery Video 2.mp4";
import GalleryImg3 from "../../assets/Home/Banner/Gallery Video 3.mp4";

const galleryData = [
  {
    img: GalleryImg1,
    title: "MOVING MACHINES ON EPOXY",
    desc: "Epoxy painted floors are our specialty",
    link: "https://youtu.be/cXZxdMAYFcc?si=uAtfWmQg3DA-JGmN",
  },
  {
    img: GalleryImg2,
    title: "We Shift The Machines Using",
    desc: "Rollers and Hydralic Jacks",
    link: "https://youtu.be/HbjPpJwUydY?si=1_xAU2PsavPaqLI1",
  },
  {
    img: GalleryImg3,
    title: "Container Loading / Unloading",
    desc: "De-Stepping is our Speciality",
    link: "https://youtu.be/6uZFFT2xSsA?si=0Vt_wUny3ZvVaEHu",
  },
];

function Banner() {
  const galleryRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [galleryWidth, setGalleryWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (galleryRef.current) {
        setGalleryWidth(galleryRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const slideStyle = {
    transform: `translateX(-${currentIndex * galleryWidth}px)`,
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentIndex < galleryData.length - 1)
      setCurrentIndex((prev) => prev + 1);
  };

  return (
    <section className="home-banner">
      <header>
        <h1>
          Heavy Lifting Solutions
          <br className="desktop" /> for Every Industry
        </h1>
        <p>
          South India’s complete service partner for container loading, machine
          movement, and recovery operations.
        </p>
      </header>

      <div className="home-banner-gallery" ref={galleryRef}>
        <div className="home-banner-gallery-slide" style={slideStyle}>
          {galleryData.map((item, index) => {
            const isActive = index === currentIndex;
            const isAdjacent = Math.abs(index - currentIndex) === 1;
            const videoSrc = (isActive || isAdjacent) ? item.img : undefined;
            return (
              <video
                key={index}
                src={videoSrc}
                autoPlay={isActive}
                loop
                muted
                playsInline
                preload={isActive ? "auto" : (isAdjacent ? "metadata" : "none")}
              />
            );
          })}
        </div>

        <div className="home-banner-gallery-text">
          <span>{galleryData[currentIndex].title}</span>
          <p>{galleryData[currentIndex].desc}</p>
        </div>

        <button
          className="home-banner-gallery-button home-banner-gallery-button-left"
          onClick={handlePrev}
          style={{
            opacity: currentIndex === 0 ? 0.3 : 1,
            cursor: currentIndex === 0 ? "default" : "pointer",
          }}
        >
          <img
            src={Arrow}
            style={{ transform: "rotate(180deg)" }}
            alt="Arrow Icon"
          />
        </button>

        <button
          className="home-banner-gallery-button home-banner-gallery-button-right"
          onClick={handleNext}
          style={{
            opacity: currentIndex === galleryData.length - 1 ? 0.3 : 1,
            cursor:
              currentIndex === galleryData.length - 1 ? "default" : "pointer",
          }}
        >
          <img src={Arrow} alt="Arrow Icon" />
        </button>

        <div className="home-banner-gallery-indicators">
          {galleryData.map((_, index) => (
            <div
              key={index}
              className={`home-banner-gallery-indicator ${
                index === currentIndex
                  ? "active-home-banner-gallery-indicator"
                  : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <a
          href={galleryData[currentIndex].link}
          target="_blank"
          className="home-banner-youtube"
        >
          <p>Click here to watch</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_803_823"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_803_823)">
              <path
                d="M8.42 20L7 18.58L13.58 12L7 5.42L8.42 4L16.42 12L8.42 20Z"
                fill="white"
              />
            </g>
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Banner;
