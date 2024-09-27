import React from "react";
import "./Footer.css"; // Optional: Use for custom styling if needed

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container footer_container">
        <div className=" footer_content text-md-start">
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>
              <i className="bi bi-telephone-fill me-2"></i>+91 9717033809
            </p>
            <p>
              <i className="bi bi-envelope-fill me-2"></i>contact@finxec.in
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Stay Updated</h5>
            <p>
              <i className="bi bi-envelope-fill me-2"></i>Offers@finxec.in
            </p>
            <p>
              <i className="bi bi-envelope-fill me-2"></i>newsletter@finxec.in
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="address">Addresses</h5>
            <p>
              <i className="bi bi-geo-alt-fill me-2"></i>Registered: 3013, C
              Block, Greenfield Colony, Faridabad.
            </p>
            <p>
              <i className="bi bi-geo-alt-fill me-2"></i>Office: Unit 101,
              Pyramid Square, Sector 67a, Gurgaon.
            </p>
          </div>
        </div>

        <div className="text-center pt-3">
          <small>
            &copy; {new Date().getFullYear()} FinXec. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
