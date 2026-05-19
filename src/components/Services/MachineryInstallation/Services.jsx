import React, { useEffect, useRef, useState } from "react";
import ServicesImage1 from "../../../assets/Services/MachineryInstallation/Services/Services Image 1.jpg";

function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const servicesText = ["Leveling & alignment support"];

  const servicesImages = [ServicesImage1];

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % servicesText.length);
    }, 4000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
    startTimer();
  };

  return (
    <section className="template blue-template">
      <header className="template-heading">
        <h2>Our Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. At et consequat nunc nullam.
          Mattis ac arcu sodales id quam urna.
        </p>
      </header>

      <div className="services-services services-services--split">
        <div className="services-services-left">
          <nav className="services-services-nav">
            {servicesText.map((text, index) => (
              <button
                key={index}
                className={index === activeIndex ? "is-active" : ""}
                onClick={() => handleClick(index)}
              >
                {text}
              </button>
            ))}
          </nav>
        </div>

        <div className="services-services-right">
          <div className="services-services-gallery">
            {servicesImages.map((img, index) => (
              <div
                key={index}
                className={`services-services-gallery-item ${
                  index === activeIndex ? "is-active" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                <img src={img} alt={`Services Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
