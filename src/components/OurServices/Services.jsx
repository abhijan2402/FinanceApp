import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Img1 from "../../assets/Images/Img1.jpeg";
import Img2 from "../../assets/Images/Img2.webp";
import Img3 from "../../assets/Images/Img4.webp";
import "./Services.css"; // Import the CSS file for styling

const Services = ({ openModal }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <div className="container my-4 service_container">
      <div className="our-heading" data-aos="fade-up">
        <h1
          className="text-center mb-4"
          style={{ fontWeight: "800", letterSpacing: "2px" }}
        >
          Our Services
        </h1>
        <hr className="mx-auto" />
      </div>

      <div data-aos="fade-up " className="our-heading_text" data-aos-delay="200">
        <p
        >
          At FinXec, we offer a wide range of wealth management and financial
          planning services to help you achieve your financial goals and secure
          your future. Let us guide you on your financial journey.
        </p>
      </div>

      <div className="row">
        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
          <div
            className="card text-center service-card"
            style={{ backgroundImage: `url(${Img1})` }}
          >
            <div className="card-body">
              <i className="bi bi-calendar3"></i>
              <h5 className="card-title">Wealth Management</h5>
              <p className="card-text">
                Expert wealth management services to help you grow and protect
                your assets.
              </p>
              <button className="query_btn" onClick={openModal}>
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="600">
          <div
            className="card text-center service-card"
            style={{ backgroundImage: `url(${Img2})` }}
          >
            <div className="card-body">
              <i className="bi bi-kanban-fill"></i>
              <h5 className="card-title">Goal Planning</h5>
              <p className="card-text">
                Live your life as you earn! Comprehensive financial planning
                support to align your investments with your vision and
                life-goals.
              </p>
              <button className="query_btn" onClick={openModal}>
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="800">
          <div
            className="card text-center service-card"
            style={{ backgroundImage: `url(${Img3})` }}
          >
            <div className="card-body">
              <i className="bi bi-easel2-fill"></i>
              <h5 className="card-title">Investment Advisory</h5>
              <p className="card-text">
                Professional investment advisory services to help you make
                informed and strategic investment decisions.
              </p>
              <button className="query_btn" onClick={openModal}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
