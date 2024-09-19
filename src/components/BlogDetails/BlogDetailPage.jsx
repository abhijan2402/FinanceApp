import React from 'react';
import './BlogDetailPage.css';
import Navbar from "../Navbar/Navbar";
// import 'bootstrap/dist/css/bootstrap.min.css';

const BlogDetailPage = () => {
  const navcolor = "#000";
  return (
    <>
      <Navbar navcolor={navcolor} />
      <div className="container blog-detail-page mt-5">
        {/* Blog Header */}
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="blog-title">Top 5 Investment Strategies for 2024</h1>
            <p className="date text-muted">September 19, 2024</p>
          </div>
        </div>

        {/* Blog Hero Image */}
        <div className="row justify-content-center my-4">
          <div className="col-lg-10">
            <div className="blog-image-container">
              <img
                src="https://media.istockphoto.com/id/2148377214/photo/abstract-data-ai-driven-business-cloud-computing-sustainable-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=fV4sdK5Ch7J2soZARLdOMsWfQ7Ahqj941kKbvQzQCyI="
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
              <p className="lead">
                The investment landscape for 2024 presents both challenges and opportunities.
                Investors must carefully analyze market trends, diversify their portfolios,
                and adopt strategies that align with their financial goals. In this blog,
                we’ll explore the top 5 investment strategies for 2024 to help you make informed decisions.
              </p>
              <h2>1. Diversify Your Portfolio</h2>
              <p>Investing in a mix of asset classes, including stocks, bonds, and real estate, can reduce risk and enhance returns.</p>

              <h2>2. Focus on Long-term Growth</h2>
              <p>Identify stocks and sectors that are poised for long-term growth, such as technology and healthcare.</p>

              <h2>3. Monitor Interest Rates</h2>
              <p>Stay informed about changes in interest rates, as they can significantly impact bond yields and stock performance.</p>

              <h2>4. Leverage Emerging Markets</h2>
              <p>Investing in emerging markets can offer high growth potential, but be cautious of the risks involved.</p>

              <h2>5. Stay Agile</h2>
              <p>Flexibility is key in 2024. Be ready to adjust your investment strategies based on market conditions.</p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailPage;
