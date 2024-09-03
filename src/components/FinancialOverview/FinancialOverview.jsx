import React from "react";
import "./FinancialOverview.css"; // Import the CSS file for styling
import BackgroundImage from "../../assets/Images/Img1.jpeg"; // Import your image

const FinancialOverview = () => {
  return (
    <div className="financial-overview-container">
      <div className="financial-overview-content">
        <h1>
          Master Your <span style={{ color: "red" }}>Finances</span> - Unmatched
          Guidance & Support
        </h1>
        <p>
          Experience unparalleled financial support with access to a
          comprehensive array of investment products designed to meet your
          unique goals and aspirations. Take charge of your financial future
          today and navigate the path to success with FinXec.
        </p>

        <div className="financial-services">
          <div
            className="service-item"
            style={{
              backgroundImage:
                "linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)",
            }}
          >
            <h2>Diverse Investment Options</h2>
            <p>
              Explore a diverse range of investment options to craft a portfolio
              that aligns with your personal and financial objectives.
            </p>
          </div>

          <div className="service-item">
            <h2>Risk Management Strategies</h2>
            <p>
              Implement robust risk management strategies to protect your wealth
              and safeguard your investments.
            </p>
          </div>

          <div
            className="service-item"
            style={{
              backgroundImage:
                "linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)",
            }}
          >
            <h2>Retirement Planning</h2>
            <p>
              Plan for your retirement with confidence and secure great returns
              aligned with your life goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialOverview;
