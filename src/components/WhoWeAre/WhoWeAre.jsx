import React from "react";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <div className="container-fluid who_container">
      <h2 className="text-center who_heading mb-4">Who We Are ?</h2>
      <p className="lead text-center mb-5">
        At FinXec, we are dedicated to helping you achieve your financial dreams
        by providing expert wealth management services both online and offline.
        Utilizing cutting-edge AI and machine learning technologies, we offer
        precise analysis and interpretation of your financial plans. Trust us to
        guide you in securing your financial future with expertise and
        innovation.
      </p>

      <div className="row">
        <div className="col-md-4">
          <div className="card text-center h-100">
            <div className="card-body">
              <i className="bi bi-bar-chart-fill fs-1 text-primary mb-3"></i>
              <h5 className="card-title">Comprehensive Planning</h5>
              <p className="card-text">
                Gain access to a wide range of financial planning support and
                products aligned with your unique vision and goals.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center h-100">
            <div className="card-body">
              <i className="bi bi-person-check-fill fs-1 text-primary mb-3"></i>
              <h5 className="card-title">Expert Guidance</h5>
              <p className="card-text">
                Receive expert guidance from our team of experienced
                professionals who are committed to your financial success.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center h-100">
            <div className="card-body">
              <i className="bi bi-gear-fill fs-1 text-primary mb-3"></i>
              <h5 className="card-title">Customized Solutions</h5>
              <p className="card-text">
                Get personalized financial solutions tailored to your individual
                needs and aspirations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
