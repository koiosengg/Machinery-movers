import AwardImage from "../../assets/Projects/Tata/Image.png";

function VisionMission() {
  return (
    <div className="projects-banner-overlay">
      <div className="projects-banner-box">
        <div className="projects-award">
          <img src={AwardImage} alt="Tata Power Solar Award" />
        </div>
        <div className="projects-content">
          <div className="projects-vision">
            <h3>Our Vision</h3>
            <p>
              To be the preferred provider of lifting solutions, setting
              standards for a more sustainable future.
            </p>
          </div>
          <div className="projects-trust">
            <h3>Trust</h3>
            <p>
              Our clients trust us to achieve impossible feats, consistently
              breaking records through dedication and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionMission;

