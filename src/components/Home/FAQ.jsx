import React, { useState } from "react";
import BlueArrow from "/Blue Arrow.svg";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      title: "What services does Machinery Movers provide in India?",
      desc: "Machinery Movers provides industrial machinery shifting, relocation, loading and unloading, machinery installation, crane rental, pick and carry services, and heavy equipment recovery across India.",
    },
    {
      title: "Do you provide machinery shifting services across India?",
      desc: "Yes, Machinery Movers operates pan-India with a strong base in Bangalore, handling machinery relocation projects across multiple states and industrial locations.",
    },
    {
      title:
        "Can you move heavy machinery inside factories without damaging epoxy floors?",
      desc: "Yes, we specialize in internal machine movement on epoxy-coated floors using controlled techniques, skilled manpower, and specialised handling equipment to prevent surface damage.",
    },
    {
      title: "What types of industries do you serve for machinery relocation?",
      desc: "We serve automotive, aerospace, electronics, medical device manufacturing, heavy engineering, OEMs, EPC contractors, warehouses, and large manufacturing facilities.",
    },
    {
      title:
        "Do you provide turnkey machinery shifting and installation services?",
      desc: "Yes, we offer end-to-end turnkey solutions including site inspection, planning, dismantling, loading, transportation, positioning, and final machinery installation.",
    },
    {
      title: "What equipment do you use for heavy machinery handling?",
      desc: "Our fleet includes hydraulic telescopic mobile cranes, forklifts, trailers, hydraulic and mechanical jacks, skid rollers, wire rope slings, and specialised lifting tools.",
    },
    {
      title: "Why choose Machinery Movers for industrial machine relocation?",
      desc: "With 25+ years of experience, trained workforce, safety-driven execution, modern equipment, and trusted relationships with 200+ reputed organizations, we deliver reliable and damage-free machinery movement.",
    },
  ];

  return (
    <section className="template home-faq">
      <header className="template-heading">
        <h2>
          Frequently <br className="desktop"/> Asked Questions
        </h2>
        <p>
          Essential details answering what to expect from our industrial
          machinery relocation services
        </p>
      </header>

      <div className="home-faq-container">
        {faqData.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className={`home-faq-set ${
                activeIndex === index ? "active-home-faq-set" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="home-faq-set-text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <img decoding="async" loading="lazy" src={BlueArrow} alt="Blue Arrow" />
            </div>

            {index !== faqData.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
