import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Style/Blog.css";
import SliderScreen from "../components/SilderScreen/SliderScreen";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";

const Blog = () => {
  const [dataImg, setdataImg] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navcolor = "#000";

  const getData = async () => {
    let resultArray = [];
    const q = query(collection(db, "Blog"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      resultArray.push({ id: doc.id, ...doc.data() });
    });
    // console.log(resultArray, "ARRAY");
    setdataImg(resultArray);
    console.log(dataImg);
  };

  useEffect(() => {
    getData();
  }, []);
  const truncateText = (text, limit) => {
    return (
      text.split(" ").slice(0, limit).join(" ") +
      (text.split(" ").length > limit ? "..." : "")
    );
  };
  return (
    <>
      {/* <SliderScreen /> */}
      <Navbar navcolor={navcolor} />
      <div className="blog-page">
        <h5 className="blog-heading"></h5>

        <div className="blog-list">
          {/* Blog Row */}
          <div className="blog-row">
            {dataImg.map((item, index) => (
              <div className="blog-card" key={index} data-aos="fade-up">
                <img
                  src={item?.Image}
                  alt="Investment Strategies"
                  className="blog-image"
                />
                <h3>{item?.Title}</h3>
                <p style={{}}>{truncateText(item?.Description, 30)}</p>
                <button
                  className="read-more-btn"
                  onClick={() => navigate("/blog_details", { state: { item } })}
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
