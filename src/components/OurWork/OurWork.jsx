import React from "react";
import "./OurWork.css"; // Import the CSS file

function OurWork() {
  return (
    <div className="container mb-5 pt-4">
      <div className="our-heading">
        <h1 style={{ letterSpacing: "2px", fontWeight:"800" }}>
          Our Work
        </h1>
        <hr className=" mx-auto" />
      </div>
      <div className="row work-content">
        <div className="col-md-4 mb-4" >
          <div className="card p-4 content-box text-center " style={{backgroundImage: "linear-gradient(to top, #accbee 0%, #e7f0fd 100%)"}}>
            <i class="bi bi-card-checklist"></i>
            <p className="p-4">
              Explore our diverse portfolio of successful wealth management and
              financial planning projects. See how we have helped others achieve
              their financial dreams and secure their future.
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card p-4 content-box text-center" style={{backgroundImage:" linear-gradient(to top, #feada6 0%, #f5efef 100%)"}}>
            <i class="bi bi-clipboard-data"></i>
            <p className="p-4">
              Explore our diverse portfolio of successful wealth management and
              financial planning projects. See how we have helped others achieve
              their financial dreams and secure their future.
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card p-4 content-box text-center" style={{backgroundImage: "linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)"}}>
            <i class="bi bi-bar-chart-steps"></i>
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
