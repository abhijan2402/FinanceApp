import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurWork.css";

function OurWork() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <div className="container mb-5 pt-4">
      <div className="our-heading" data-aos="fade-up">
        <h1 style={{ letterSpacing: "2px", fontWeight: "800" }}>
          Our Work
        </h1>
        <hr className="mx-auto" />
      </div>
      <div className="row work-content">
        <div className="col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
          <div
            className="card p-4 content-box text-center"
            style={{ backgroundImage: "linear-gradient(to top, #accbee 0%, #e7f0fd 100%)" }}
          >
            <i className="bi bi-card-checklist"></i>
            <p className="p-4">
              Explore our diverse portfolio of successful wealth management and
              financial planning projects. See how we have helped others achieve
              their financial dreams and secure their future.
            </p>
          </div>
        </div>
        <div className="col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="400">
          <div
            className="card p-4 content-box text-center"
            style={{ backgroundImage: "linear-gradient(to top, #feada6 0%, #f5efef 100%)" }}
          >
            <i className="bi bi-clipboard-data"></i>
            <p className="p-4">
              Explore our diverse portfolio of successful wealth management and
              financial planning projects. See how we have helped others achieve
              their financial dreams and secure their future.
            </p>
          </div>
        </div>
        <div className="col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="600">
          <div
            className="card p-4 content-box text-center"
            style={{ backgroundImage: "linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)" }}
          >
            <i className="bi bi-bar-chart-steps"></i>
            <p className="p-4">
              Explore our diverse portfolio of successful wealth management and
              financial planning projects. See how we have helped others achieve
              their financial dreams and secure their future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurWork;
