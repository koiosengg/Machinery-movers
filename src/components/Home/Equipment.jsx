import React from "react";
import EquipmentImage1 from "../../assets/Home/Equipment/Equipment Image 1.jpg";
import EquipmentImage2 from "../../assets/Home/Equipment/Equipment Image 2.jpg";
import EquipmentImage3 from "../../assets/Home/Equipment/Equipment Image 3.jpg";
import EquipmentImage4 from "../../assets/Home/Equipment/Equipment Image 4.jpg";
import EquipmentImage5 from "../../assets/Home/Equipment/Equipment Image 5.jpg";
import EquipmentImage6 from "../../assets/Home/Equipment/Equipment Image 6.jpg";
import EquipmentImage7 from "../../assets/Home/Equipment/Equipment Image 7.jpg";
import EquipmentImage8 from "../../assets/Home/Equipment/Equipment Image 8.jpg";
import EquipmentImage9 from "../../assets/Home/Equipment/Equipment Image 9.jpg";

function Equipment() {
  return (
    <section className="template">
      <header className="template-heading">
        <h2>
          More Equipment to
          <br className="desktop" /> Power Your Projects
        </h2>
        <p>
          Expanded fleet of specialised machines supporting complex lifts,
          precise moves, and large-scale projects
        </p>
      </header>
      <div className="home-equipment">
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={EquipmentImage1} alt="Equipment Image 1" />
          <div className="home-fleet-set-text">
            <p>HYDRAULIC JACKS</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={EquipmentImage2} alt="Equipment Image 2" />
          <div className="home-fleet-set-text">
            <p>RAILWAY MECHANICAL JACKS</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={EquipmentImage3} alt="Equipment Image 3" />
          <div className="home-fleet-set-text">
            <p>PALLET TROLLEY</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={EquipmentImage4} alt="Equipment Image 4" />
          <div className="home-fleet-set-text">
            <p>SKID ROLLERS</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={EquipmentImage5} alt="Equipment Image 5" />
          <div className="home-fleet-set-text">
            <p>RUBBER MATS</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={EquipmentImage6} alt="Equipment Image 6" />
          <div className="home-fleet-set-text">
            <p>WOODBLOCKS</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={EquipmentImage7} alt="Equipment Image 7" />
          <div className="home-fleet-set-text">
            <p>FLATFORM</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={EquipmentImage8} alt="Equipment Image 8" />
          <div className="home-fleet-set-text">
            <p>M.S SHEETS TO MOVE MAHCINE ON EPOXY PAINTED FLOOR</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img decoding="async" loading="lazy" src={EquipmentImage9} alt="Equipment Image 9" />
          <div className="home-fleet-set-text">
            <p>STEEL & FIBER WHEEL UPTO 100T CAPACITY</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Equipment;
