import React from "react";

function FloatingContact() {
  return (
    <a
      href="tel:+919980335552"
      className="floating-contact-btn"
      aria-label="Contact Us"
      title="Call Us: +91 99803 35552"
    >
      <div className="floating-contact-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </div>
      <div className="floating-contact-pill">
        <span>Contact us</span>
      </div>
    </a>
  );
}

export default FloatingContact;
