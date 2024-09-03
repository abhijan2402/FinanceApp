import React from "react";
import Img1 from "../../assets/Images/Img1.jpeg";
import Img2 from "../../assets/Images/Img2.webp";
import Img3 from "../../assets/Images/Img4.webp";
import "./Services.css"; // Import the CSS file for styling

const Services = () => {
  return (
    <div className="container my-4 service_container">
      <div className="our-heading">
        <h1
          className="text-center mb-4"
          style={{ fontWeight: "800", letterSpacing: "2px" }}
        >
          Our Services
        </h1>
        <hr className=" mx-auto" />
      </div>

      <div>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.8rem",
            marginBottom: "30px",
          }}
        >
          At FinXec, we offer a wide range of wealth management and financial
          planning services to help you achieve your financial goals and secure
          your future. Let us guide you on your financial journey.
        </p>
      </div>
      <div className="row ">
        <div className="col-md-4 card_Service">
          <div
            className="card text-center service-card"
            style={{ backgroundImage: `url(${Img1})` }}
          >
            <div className="card-body">
              <i class="bi bi-calendar3"></i>
              <h5 className="card-title">Wealth Management</h5>
              <p className="card-text">
                Expert wealth management services to help you grow and protect
                your assets.
              </p>
              {/* <a href="#" className="btn btn-primary">
                More
              </a> */}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card text-center service-card"
            style={{ backgroundImage: `url(${Img2})` }}
          >
            <div className="card-body">
              <i class="bi bi-kanban-fill"></i>
              <h5 className="card-title">Goal Planning</h5>
              <p className="card-text">
                Live your life as you earn! Comprehensive financial planning
                support to align your investments with your vision and
                life-goals.
              </p>
              {/* <a href="#" className="btn btn-primary">
                More
              </a> */}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card text-center service-card"
            style={{ backgroundImage: `url(${Img3})` }}
          >
            <div className="card-body">
              <i class="bi bi-easel2-fill"></i>
              <h5 className="card-title">Investment Advisory</h5>
              <p className="card-text">
                Professional investment advisory services to help you make
                informed and strategic investment decisions.
              </p>
              {/* <a href="#" className="btn btn-primary">
                More
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
