import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Style/Blog.css";
import SliderScreen from "../components/SilderScreen/SliderScreen";

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <SliderScreen />
      <div className="blog-page">
        <h5 className="blog-heading"></h5>

        <div className="blog-list">
          {/* Blog Row */}
          <div className="blog-row">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div className="blog-card" key={index} data-aos="fade-up">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeuMw5WWAAKQuWzhr108UPLhK4-D4MDte8nU7GT1oRaFIIF5OHOuA8u8vrYyAwsjvzXIk&usqp=CAU"
                  alt="Investment Strategies"
                  className="blog-image"
                />
                <h3>Top 5 Investment Strategies for 2024</h3>
                <p>
                  Discover the best ways to grow your portfolio this year with these top investment strategies.
                </p>
                <button className="read-more-btn">Read More</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
