import React from "react";
import "./BlogDetailPage.css";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

const BlogDetailPage = () => {
  const navcolor = "#000";
  const location = useLocation();
  const { item } = location.state || {};
  // console.log(item, "ITEN");

  return (
    <>
      <Navbar navcolor={navcolor} />
      <div className="container blog-detail-page mt-5">
        {/* Blog Header */}
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="blog-title">{item?.Title}</h1>
            {/* <p className="date text-muted">September 19, 2024</p> */}
          </div>
        </div>

        {/* Blog Hero Image */}
        <div className="row justify-content-center my-4">
          <div className="col-lg-10">
            <div className="blog-image-container">
              <img
                src={item?.Image}
                alt="Investment Strategies"
                className="img-fluid rounded blog-image"
              />
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <article className="blog-content ">
              <p className="lead">{item?.Description}</p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailPage;
