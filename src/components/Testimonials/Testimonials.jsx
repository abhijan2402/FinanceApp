import React, { useState, useEffect } from "react";
import "./Testimonials.css"; // Import the CSS file for styling

const testimonials = [
  {
    text: "Thanks to their expert guidance, I finally feel confident about my financial future. Their personalised approach made all the difference!",
    client: "Saurabh Mishra",
  },
  {
    text: "Exceptional service and clear advice helped me reach my investment goals faster than I imagined. Highly recommend!",
    client: "Jatin Arora",
  },
  {
    text: "Their strategic planning transformed my financial situation. I now have a solid plan and peace of mind.",
    client: "Meghana Dave",
  },
];

const Testimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 4000); // Slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(
      (currentTestimonialIndex + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex(
      (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <>
      <div className="testimonial-container">
        <div className="our_heading">
          <h1 style={{ letterSpacing: "2px", fontWeight: "800" }}>
            Testimonials
          </h1>
          {/* <hr className=" mx-auto" /> */}
          <p style={{fontSize:"1.2rem", letterSpacing:"1px", fontWeight:"600"}}>What are clients have to say about us.</p>
        </div>
        <div className="test_content">

        <div className="testimonial-content">
          <p className="testimonial-text">
            "{testimonials[currentTestimonialIndex].text}"
          </p>
          <p className="testimonial-client">
            - {testimonials[currentTestimonialIndex].client}
          </p>
        </div>
        <div className="testimonial-buttons">
          <button onClick={prevTestimonial} className="testimonial-button">
            &lt;
          </button>
          <button onClick={nextTestimonial} className="testimonial-button">
            &gt;
          </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
